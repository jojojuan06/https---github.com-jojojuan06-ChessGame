// CREATE READ UPDATE DELTE POSTS AND LIKE 

//valide et nettoie uniquement les chaînes (validation de l'email)
const { ChessPiece , PlayerMatch} = require('../models')
// function pour calculer les mouvement disponibles 1/la piece a bougé 2/liste des pieces du jeu
availableMovesKnight = (chesspiece ,chess_pieces) => {
    // todo
    let movesPositions = []
    movesPositions.push({x:chesspiece.x+2,y:chesspiece.y+1})
    movesPositions.push({x:chesspiece.x+2,y:chesspiece.y-1})
    
    movesPositions.push({x:chesspiece.x+1,y:chesspiece.y+2})
    movesPositions.push({x:chesspiece.x+1,y:chesspiece.y-2})
    
    movesPositions.push({x:chesspiece.x-1,y:chesspiece.y+2})
    movesPositions.push({x:chesspiece.x-1,y:chesspiece.y-2})
    
    movesPositions.push({x:chesspiece.x-2,y:chesspiece.y+1})
    movesPositions.push({x:chesspiece.x-2,y:chesspiece.y-1})
    let availableMoves = []
    for (const position of movesPositions) {
        let piece = FindPiece(position.x,position.y,chess_pieces);
        //position dans l'echiquier ,pas de piece sur la case ou  la couleur de la piece n'est pas egal a la couleur que l'on veut deplacer
        if (PositionInside(position.x,position.y)  && (piece == null || chesspiece.color != piece.color)) {
            availableMoves.push(position)
        }
    }
    return availableMoves
}
//position dans l'échiquier
function PositionInside(x,y) {
    if (x >= 0 && x<8 && y>=0 && y<8) {
        return true;
    } 
    return false
}

//trouve la piece a partir de la position
function FindPiece(x,y ,chess_pieces) {
    return chess_pieces.filter(chess_piece => chess_piece.x == x && chess_piece.y == y);
}

availableMovesList = (chesspiece ,chess_pieces) => {
    // todo
    let availableMoves = []
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            //l'inverse de la position de ma piece (toute les autres case)
            if (!(chesspiece.x == x && chesspiece.y == y)) {
                availableMoves.push({"x":x, "y":y})
            }
        }   
    }
    return availableMoves
}

//Recuperer les match
exports.getAllAvailableMoves = (req, res, next) => { //function de callback
    let matchId = req.params.matchId // avoir acces  dans l'objet req.pams.id
    let chesspieceId = req.params.chesspieceId // avoir acces  dans l'objet req.pams.id

    ChessPiece.findOne({ where:{match_id: matchId, id: chesspieceId}
    })
            .then(chesspiece => {
                findAll({ where:{match_id: matchId},
                attributes:["color","x","y"]
                })
                .then(chesspieces => {
                    let availableMoves = availableMovesList(chesspiece ,chesspieces)
                    return res.status(200).json(availableMoves) // retourne la response 200 pour ok pour la methode http , revoi le tableaux des users recu
                })    
                .catch(error => res.status(400).json({ message: `nous faisons face a cette: ${error}` }))
            })   
            .catch(error => res.status(400).json({ message: `nous faisons face a cette: ${error}` })); 
}
//-------------

//Recuperer la position
exports.updatePosition = (req, res, next) => { //function de callback
    // creation d'une nouvelle instance  de mon objet post (class) de le req
    let matchId = req.params.matchId // avoir acces  dans l'objet req.pams.id
    let chesspieceId = req.params.chesspieceId // avoir acces  dans l'objet req.pams.id
    let x = req.body.x
    let y = req.body.y
    let playerId = req.auth.id
    PlayerMatch.findOne({ where:{match_id: matchId, player_id: playerId},
        include: [
            {
                //recuperation du model user inclu avec des atttributs specifier (ex:evite de donné le Mdp)
                model:Match,
                attributes:[
                    "color_turn"
                ]
            },
        ]
    
    })
    .then((playerMatch) => {
        if (!playerMatch) {
            return res.status(404).json({message: `l'association du joueur et du match n'existe pas`}); //404 ressource non trouvé 
        }
        else {
            let player_color = playerMatch.player_color
            let color_turn = playerMatch.Match.color_turn
            if (player_color != color_turn) {
                return res.status(401).json({message: `le joueur ne peut pas deplacer la piece si ce n'est pas sont tour`}); //404 ressource non trouvé
            }
            ChessPiece.findOne({ where:{match_id: matchId, id: chesspieceId}})
            .then((chesspiece) => {
                if (!chesspiece) {
                    return res.status(404).json({message: `la piece n'existe pas`}); //404 ressource non trouvé    
                } 
                else if (player_color != chesspiece.color) {
                    return res.status(401).json({message: `le joueur ne peut déplacer que ses pieces`});  // Unauthorized
                }
                else {
                    // verifie mouvement autorisé
                    let chessPieces = ChessPiece.findAll({ where:{match_id: matchId }})
                    let availableMoves = availableMovesList(chesspiece,chessPieces)
                    const available = availableMoves.filter(availableMove => availableMove.x == x && availableMove.y == y);
                    if (!available) {
                        return res.status(401).json({message: `la piece ne peut pas se deplacer ici`});  // Unauthorized
                    }
                    // verfie piece enemie a supprimer
                    let enemie = ChessPiece.findOne({ where:{match_id: matchId,x:x,y:y}})
                    if (enemie) {
                        enemie.destroy()
                    }
                    // modifier la postion de la piece
                    chesspiece.x = x
                    chesspiece.y = y
                    chesspiece.save()
                    res.status(200).json({ message: 'nouvelle position enregistré !'})
                }
            }) 
        }
    })
    .catch(error => res.status(400).json({ message: `⚠ Oops, une erreur s\'est produite !${error}`}));
};   
//-------------

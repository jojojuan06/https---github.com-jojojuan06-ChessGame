// CREATE READ UPDATE DELTE POSTS AND LIKE 

//valide et nettoie uniquement les chaînes (validation de l'email)
const { Match , ChessPiece, Player, PlayerMatch } = require('../models')


//Creation d'un match
exports.createMatch = (req, res, next) => { //function de callback
    let playerId = req.auth.playerId // avoir acces  dans l'objet req.pams.id
    Player.findOne({ where:{id: playerId}})
    .then(player => {
        //si le player n'existe pas renvoi le message d'erreur
        if (!player) {
            return res.status(404).json({message: `le player n'existe pas`}); //404 ressource non trouvé    
        } else {
            // creation d'une nouvelle instance  de mon objet post (class) de le req
            const match = new Match({  //recupere mon objet de la req
            "public": req.body.public
            });
            match.save()//methode save enregistre l'objet dans la base de donnée renvoi une promise
            const playerMatch = new PlayerMatch({  //recupere mon objet de la req
                    "player_id": playerId,
                    "match_id": match.id,
                    "player_color": req.body.playerColor
            });
            playerMatch.save()//methode save enregistre l'objet dans la base de donnée renvoi une promise
            const initChessPiece = (x,y,type,color) =>  {
                const chesspiece = new ChessPiece({  //recupere mon objet de la req
                        "color": color,
                        "x": x,
                        "y": y,
                        "type":type,
                        "match_id": match.id
                });
                chesspiece.save()//methode save enregistre l'objet dans la base de donnée renvoi une promise
            }
            //piece blanche
            initChessPiece(0,0,"ROOK","WHITE") //tour
            initChessPiece(1,0,"KNIGHT","WHITE") // cavalier
            initChessPiece(2,0,"BISHOP","WHITE") // fou
            initChessPiece(3,0,"QUEEN","WHITE") //reine
            initChessPiece(4,0,"KING","WHITE") // roi
            initChessPiece(5,0,"BISHOP","WHITE")
            initChessPiece(6,0,"KNIGHT","WHITE")
            initChessPiece(7,0,"ROOK","WHITE")
            // boucle pour les pions
            for (let index = 0; index < 8; index++) {
                initChessPiece(index,1,"PAWN","WHITE")
            }
            //piece noir
            initChessPiece(0,7,"ROOK","BLACK")
            initChessPiece(1,7,"KNIGHT","BLACK")
            initChessPiece(2,7,"BISHOP","BLACK")
            initChessPiece(3,7,"QUEEN","BLACK")
            initChessPiece(4,7,"KING","BLACK")
            initChessPiece(5,7,"BISHOP","BLACK")
            initChessPiece(6,7,"KNIGHT","BLACK")
            initChessPiece(7,7,"ROOK","BLACK")
            // boucle pour les pions
            for (let index = 0; index < 8; index++) {
                initChessPiece(index,6,"PAWN","BLACK")
            }
            return res.status(201).json({ message: 'Match enregistré !'});  
        }
    }) // retourne la response 200 pour ok pour la methode http , renvoi l'objet (un objet)si il existe dans la Bd
    .catch(error => res.status(400).json({ message: `nous faisons face a cette: ${error}`}))
};
//-------------

//Recuperer les match
exports.getAllMatch = (req, res, next) => { //function de callback
    Match.findAll()
            .then(players => res.status(200).json(players)) // retourne la response 200 pour ok pour la methode http , revoi le tableaux des users recu
            .catch(error => res.status(400).json({ message: `nous faisons face a cette: ${error}` })); 
}
//-------------


//Recuperer les tour et les pieces
exports.getChessBoard = (req, res, next) => { //function de callback
    let id = req.params.id // avoir acces  dans l'objet req.pams.id
    Match.findOne({ where:{id: id},
        include: [
            {
                //recuperation du model user inclu avec des atttributs specifier (ex:evite de donné le Mdp)
                model:ChessPiece,
                as: "pieces",
                attributes:[
                    "id",
                    "type",
                    "color",
                    "x",
                    "y"
                ]
            },
        ]
    })
    .then(match => {
        //si le player n'existe pas renvoi le message d'erreur
        if (!match) {
        return res.status(404).json({message: `le match n'existe pas`}); //404 ressource non trouvé    
        } else {
        // retourne la response 200 pour ok pour la methode http , renvoi l'objet si il existe dans la Bd
        return res.status(200).json(match);    
        }
    })   
    .catch(error => res.status(400).json({ message: `nous faisons face a cette: ${error}` })); 
}
//-------------

//Recuperer le match
exports.getOneMatch = (req, res, next) => { //function de callback
    let id = req.params.id // avoir acces  dans l'objet req.pams.id
    Match.findOne({ where:{id: id}})
    .then(match => {
        //si le player n'existe pas renvoi le message d'erreur
        if (!match) {
        return res.status(404).json({message: `le match n'existe pas`}); //404 ressource non trouvé    
        } else {
        // retourne la response 200 pour ok pour la methode http , renvoi l'objet si il existe dans la Bd
        return res.status(200).json(match);    
        }
    }) // retourne la response 200 pour ok pour la methode http , renvoi l'objet (un objet)si il existe dans la Bd
    .catch(error => res.status(400).json({ message: `nous faisons face a cette: ${error}` }));
}
//-------------



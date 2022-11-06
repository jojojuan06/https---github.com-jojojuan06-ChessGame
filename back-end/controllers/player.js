// CREATE READ UPDATE DELTE POSTS AND LIKE 

//valide et nettoie uniquement les chaînes (validation de l'email)
const { Player} = require('../models')
const jwt = require('jsonwebtoken'); //crée des token et les verifier

//Creation d'un player
exports.createPlayer = (req, res, next) => { //function de callback
        // creation d'une nouvelle instance  de mon objet post (class) de le req
        const player = new Player({  //recupere mon objet de la req
        pseudo: req.body.pseudo,
        });
        player.save()//methode save enregistre l'objet dans la base de donnée renvoi une promise
        .then(() => res.status(201).json({ 
                message: 'Joueur enregistré !',
                // renvoi les infos du player
                player:player,
                //creation de token---------
                token: jwt.sign( //token crypter pour permettre la connection de l'utilisateur
                // cree un userid qui sera l'identifiant utilisateur du user
                { playerId : player.id},
                // payload les donnée que le veut encoder a l'interieure de ce token (cree un objet user id)
                process.env.SECRET_KEY,  // deuxieme argument clée secrete de l'encodage du .env qui est masqué
                { expiresIn: '12h'} //troisieme argument (de config) apliquer une expiration du token de 24h
                )
        })) //201 la requête a réussi avec le message
        .catch(error => res.status(400).json({ message: `⚠ Oops, une erreur s\'est produite !${error}`}));
};
//-------------

//Recuperer le Players GET
exports.getOnePlayer = (req, res, next) => { //function de callback
        let id = req.params.id // avoir acces  dans l'objet req.pams.id
        Player.findOne({ where:{id: id}})
        .then(player => {
                //si le player n'existe pas renvoi le message d'erreur
                if (!player) {
                return res.status(404).json({message: `le player n'existe pas`}); //404 ressource non trouvé    
                } else {
                // retourne la response 200 pour ok pour la methode http , renvoi l'objet si il existe dans la Bd
                return res.status(200).json(player);    
                }
        }) // retourne la response 200 pour ok pour la methode http , renvoi l'objet (un objet)si il existe dans la Bd
        .catch(error => res.status(400).json({ message: `nous faisons face a cette: ${error}` }));
}
//-------------


//Recuperer le Player GET
exports.getAllPlayer = (req, res, next) => { //function de callback
        Player.findAll()
        .then(players => res.status(200).json(players)) // retourne la response 200 pour ok pour la methode http , revoi le tableaux des users recu
        .catch(error => res.status(400).json({ message: `nous faisons face a cette: ${error}` })); 
}
//-------------





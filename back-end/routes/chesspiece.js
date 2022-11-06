//Imports
const express = require('express');
const router = express.Router();
const chesspieceController = require('../controllers/chesspiece');
const auth = require('../middleware/auth');


//Routage (crée ,lire , modifier ,supprimer un match)
router.get("/:chessPieceId/available-moves", chesspieceController.getAllAvailableMoves);//retourne les positions disponibles pour le prochain mouvement de la pièce
router.post("/:chessPieceId/move", auth, chesspieceController.updatePosition);//envoie la nouvelle position de la pièce


module.exports = router;



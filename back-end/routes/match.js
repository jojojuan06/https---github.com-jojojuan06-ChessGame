//Imports
const express = require('express');
const router = express.Router();
const matchController = require('../controllers/match');
const auth = require('../middleware/auth');


//Routage (crée ,lire , modifier ,supprimer un match)
router.post("/",auth , matchController.createMatch);//cree un player
router.get("/", matchController.getAllMatch);//recupere tout les match
router.get("/:id", matchController.getOneMatch);//recupere  le match
router.get("/:id/chessboard", matchController.getChessBoard);//envoie la nouvelle position de la pièce

module.exports = router;
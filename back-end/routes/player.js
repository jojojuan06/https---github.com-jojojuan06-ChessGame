//Imports
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/player');
//const auth = require('../middleware/auth');


//Routage (crée ,lire , modifier ,supprimer un player)
router.post("/", playerController.createPlayer);//cree un player
router.get("/", playerController.getAllPlayer);//recupere tout les players
router.get("/:id", playerController.getOnePlayer);//recupere  le player

module.exports = router;
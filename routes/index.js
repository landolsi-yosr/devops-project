

const express = require('express');
const router = express.Router();
const { showGame, checkGuess } = require('../controllers/gameController');

// Afficher la page de jeu
router.get('/', showGame);

// Vérifier la supposition de l'utilisateur
router.post('/guess', checkGuess);

module.exports = router;



let secretNumber = Math.floor(Math.random() * 100) + 1; // Nombre secret entre 1 et 100
let attempts = 0; // Nombre de tentatives

const showGame = (req, res) => {
  res.render('index', { message: '', attempts: attempts });
};

const checkGuess = (req, res) => {
  const userGuess = parseInt(req.body.guess);
  attempts++;

  if (userGuess === secretNumber) {
    res.render('index', { message: `Bravo ! Vous avez deviné le nombre ${secretNumber} en ${attempts} tentatives.`, attempts: attempts });
    secretNumber = Math.floor(Math.random() * 100) + 1; // Générer un nouveau nombre secret
    attempts = 0; // Réinitialiser les tentatives
  } else if (userGuess < secretNumber) {
    res.render('index', { message: 'Trop bas, essayez encore !', attempts: attempts });
  } else {
    res.render('index', { message: 'Trop haut, essayez encore !', attempts: attempts });
  }
};

module.exports = { showGame, checkGuess };

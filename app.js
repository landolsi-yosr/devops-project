

const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');

// Pour pouvoir utiliser les templates EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Utiliser les routes définies
app.use('/', indexRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


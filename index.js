// On fait appel a express
const express = require('express');
// On déclare express
const app = express();
// On configure le port sur 3001
const port = 3001;
// on configure le hostname
const hostname = 'localhost';
// On se connecte à la DB temporairement
require('./config/db.config');
// On import l'ensemble de nos routes
const routes = require('./routes');

// On associe nos routes avec Express
routes(app);




// On demarre le serveur Node via nodemon
app.listen(port, hostname, () => {
    console.log(`Server running on ${hostname}:${port}`);
});
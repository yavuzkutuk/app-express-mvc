// On appel le fichier avec l'ensemble des routes public
const publicRoutes = require('./public');
// On appel le fichier avec l'ensemble des routes users
const usersRoutes = require('./users');

// On configure via app d'express l'ensemble de nos routes pour qu'ils soient prises en charge
const setupRoutes = app => {
    app.use('/', publicRoutes);
    app.use('/users', usersRoutes);
};

// On export notre module
module.exports = setupRoutes;
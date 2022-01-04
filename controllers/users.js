// On appel mon model Users
const usersModel = require('../models/user');

// On declare une première methode
const users = (req, res) => {
    usersModel.selectAll((err, data) => {
        if(err) throw err;
        res.send(data);
    })
}

// On regroupe l'ensemble de nos methodes dans une méthode globale
const usersController = {
    users
}

// On export notre module
module.exports = usersController;
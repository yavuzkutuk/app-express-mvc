// On declare une première methode
const home = (req, res) => {
    res.json('Welcome to app');
}

// On regroupe l'ensemble de nos methodes dans une méthode globale
const publicController = {
    home
}

// On export notre module
module.exports = publicController;
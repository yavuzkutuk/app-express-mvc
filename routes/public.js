// On fait appel à la methode Router d'express
const router = require('express').Router();
// On fait appel à notre controller
const controller = require('../controllers/public');

// On crée la route accueil
router.get('/', controller.home);

module.exports = router;
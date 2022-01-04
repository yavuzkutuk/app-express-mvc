// On fait appel à la methode Router d'express
const router = require('express').Router();
// On fait appel à notre controller
const controller = require('../controllers/users');

// On crée la route users
router.get('/', controller.users);

module.exports = router;
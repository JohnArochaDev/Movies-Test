const express = require('express');
const router = express.Router();
const performersCtrl = require('../controllers/performers');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
router.get('/performers/new', ensureLoggedIn, performersCtrl.new);
// POST /performers (create functionality)
router.post('/performers', ensureLoggedIn, performersCtrl.create);
// POST /movies/:id/performers (associate a performer with a movie)
router.post('/movies/:id/performers', ensureLoggedIn, performersCtrl.addToCast);

module.exports = router;
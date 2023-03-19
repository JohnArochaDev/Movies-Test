const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const moviesCtrl = require('../controllers/movies');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET /movies
router.get('/', moviesCtrl.index);
// GET /movies/new
router.get('/new', ensureLoggedIn, moviesCtrl.new);
// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', moviesCtrl.show);
// POST /movies
router.post('/', ensureLoggedIn, moviesCtrl.create);
	
module.exports = router;

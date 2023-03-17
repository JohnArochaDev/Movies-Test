const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const moviesCtrl = require('../controllers/movies');
	
// GET /movies
router.get('/', moviesCtrl.index);
// GET /movies/new
router.get('/new', moviesCtrl.new);
// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', moviesCtrl.show);
// POST /movies
router.post('/', moviesCtrl.create);
	
module.exports = router;

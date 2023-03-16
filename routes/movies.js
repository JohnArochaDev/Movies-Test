const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const moviesCtrl = require('../controllers/movies');
	
// GET /movies/new
router.get('/new', moviesCtrl.new);
	
module.exports = router;

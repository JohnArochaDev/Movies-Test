const Movie = require('../models/movie');

module.exports = {
  create
};

async function create(req, res) {
  const movie = await Movie.findById(req.params.id);
  // We can push (or unshift) subdocs into Mongoose arrays
  movie.reviews.push(req.body);
  try {
    // Save any changes made to the movie doc
    await movie.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/movies/${movie._id}`);
}
module.exports = {
  new: newMovie
};

function newMovie(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('movies/new', { errorMsg: '' });
}

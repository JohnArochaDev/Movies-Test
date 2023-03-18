const Performer = require('../models/performer');
const Movie = require('../models/movie');

module.exports = {
  new: newPerformer,
  create,
  addToCast
};

async function addToCast(req, res) {
  const movie = await Movie.findById(req.params.id);
  // The cast array holds the performer's ObjectId (referencing)
  movie.cast.push(req.body.performerId);
  await movie.save();
  res.redirect(`/movies/${movie._id}`);
}

async function newPerformer(req, res) {
  //Sort performers by their name
  const performers = await Performer.find({}).sort('name');
  res.render('performers/new', { title: 'Add Performer', performers });
}

async function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // Fix by either reformatting to "MM-DD-YYYY" or by 
  // appending a "time" fragment like this... 
  req.body.born += 'T00:00';
  try {
    await Performer.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/performers/new');
}
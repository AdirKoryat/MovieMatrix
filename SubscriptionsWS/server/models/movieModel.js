const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genres: { type: [String], default: [] },
  image: { type: String },
  premiered: { type: Date }
});

const movie = mongoose.model('movie', movieSchema, 'movies');

module.exports = movie;
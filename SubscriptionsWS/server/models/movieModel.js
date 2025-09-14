const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    genres: { type: [String], default: [] },
    image: { type: String },
    premiered: { type: Date }
  },
  {
    versionKey: false
  }
);

const Movie = mongoose.model('movie', movieSchema, 'movies');

module.exports = Movie;
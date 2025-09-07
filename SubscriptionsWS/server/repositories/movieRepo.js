const axios = require('axios');

const Movie =  require('../models/movieModel');

const movies_URL = 'https://api.tvmaze.com/shows';

// load All movies
const loadAllMovies = (filters) => {
  return axios.get(movies_URL, { params: filters });
};

// Get All
const getAllMovies = (filters) => {
  return Movie.find(filters);
};

// Create
const addMovie = (movie) => {
  return Movie.create(movie);
};


module.exports = {
  loadAllMovies,
  getAllMovies,
  addMovie,
};
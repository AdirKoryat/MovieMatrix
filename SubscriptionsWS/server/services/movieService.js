const movieRepo = require('../repositories/movieRepo');

// Get All - Read
const loadAllMovies = async (filters) => {
  const { data: movies } = await movieRepo.loadAllMovies(filters);
  return movies;
};

// Get All
const getAllMovies = (filters) => {
  return movieRepo.getAllMovies(filters);
};

// Create
const addMovie = (movie) => {
  return movieRepo.addMovie(movie);
};

module.exports = {
  loadAllMovies,
  getAllMovies,
  addMovie,
};
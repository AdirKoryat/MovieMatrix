
const memberService = require('../services/memberService');

const movieService = require('../services/movieService');
const Member = require('../models/memberModel');

async function loadData() {
  //Check if data exists
  if (await Member.exists({})) { 
    return;
  }
  // Load initial data
  let [members, movies] = await Promise.all([
    memberService.loadAllMembers(),
    movieService.loadAllMovies()
  ]);
  members = members.map(member => ({
    name: member.name,
    email: member.email,
    city: member.address.city
  }));

  movies = movies.map(movie => ({
    name: movie.name,
    genres: movie.genres,
    image: movie.image.medium,
    premiered: new Date(movie.premiered)
  }));

  members.forEach(member => memberService.addMember(member));
  movies.forEach(movie => movieService.addMovie(movie));
  console.log('Initial data loaded');
}

module.exports = loadData;

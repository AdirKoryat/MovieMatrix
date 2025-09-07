const axios = require('axios');
const Member =  require('../models/memberModel');
const members_URL = 'https://jsonplaceholder.typicode.com/users';

// load All from jsonplaceholder
const loadAllMembers = (filters) => {
  return axios.get(members_URL, { params: filters });
};

// Get All
const getAllMembers = (filters) => {
  return Member.find(filters);
};

// Create
const addMember = (member) => {
  return Member.create(member);
};

module.exports = {
  loadAllMembers,
  getAllMembers,
  addMember,
};
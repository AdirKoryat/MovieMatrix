const userRepo = require('../repositories/userRepo');

// Get By ID
const getUserById = (id) => {
  return userRepo.getUserById(id);
};

// Get All
const getAllUsers = (filters) => {
  return userRepo.getAllUsers(filters);
};

// Create
const addUser = (user) => {
  return userRepo.addUser(user);
};

// Update
const updateUser = (id, user) => {
  return userRepo.updateUser(id, user);
};

// Delete
const deleteUser = (id) => {
  return userRepo.deleteUser(id);
};  

module.exports = {
  getUserById,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,   
};
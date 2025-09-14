const User =  require('../models/userModel');

// Get By ID
const getUserById = (id) => {
  return User.findById(id);
};

// Get All
const getAllUsers = (filters) => {
  return User.find(filters);
};

// Create
const addUser = (user) => {
  return User.create(user);
};

// Update
const updateUser = (id, user) => {
  return User.findByIdAndUpdate(id, user);
};

// Delete
const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getUserById,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser
};
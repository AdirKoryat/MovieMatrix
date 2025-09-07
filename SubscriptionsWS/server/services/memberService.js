const memberRepo = require('../repositories/memberRepo');

// Get All - Read
const loadAllMembers = async (filters) => {
  const { data: members } = await memberRepo.loadAllMembers(filters);
  return members;
};

// Get All
const getAllMembers = (filters) => {
  return memberRepo.getAllMembers(filters);
};

// Create
const addMember = (member) => {
  return memberRepo.addMember(member);
};

module.exports = {
  loadAllMembers,
  getAllMembers,
  addMember,
};
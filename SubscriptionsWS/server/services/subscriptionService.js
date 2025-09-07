const subscriptionRepo = require('../repositories/subscriptionRepo');

// Get By ID
const getSubscriptionById = (id) => {
  return subscriptionRepo.getSubscriptionById(id);
};

// Get All
const getAllSubscriptions = (filters) => {
  return subscriptionRepo.getAllSubscriptions(filters);
};

// Create
const addSubscription = (subscription) => {
  return subscriptionRepo.addSubscription(subscription);
};

// Update
const updateSubscription = (id, subscription) => {
  return subscriptionRepo.updateSubscription(id, subscription);
};

// Delete
const deleteSubscription = (id) => {
  return subscriptionRepo.deleteSubscription(id);
};

module.exports = {
  getSubscriptionById,
  getAllSubscriptions,
  addSubscription,
  updateSubscription,
  deleteSubscription
};
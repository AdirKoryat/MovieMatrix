
const Subscription =  require('../models/subscriptionModel');


// Get By ID
const getSubscriptionById = (id) => {
  return Subscription.findById(id);
};

// Get All
const getAllSubscriptions = (filters) => {
  return Subscription.find(filters);
};

// Create
const addSubscription = (subscription) => {
  return Subscription.create(subscription);
};

// Update
const updateSubscription = (id, subscription) => {
  return Subscription.findByIdAndUpdate(id, subscription);
};

// Delete
const deleteSubscription = (id) => {
  return Subscription.findByIdAndDelete(id);
};

module.exports = {
  getSubscriptionById,
  getAllSubscriptions,
  addSubscription,
  updateSubscription,
  deleteSubscription
};
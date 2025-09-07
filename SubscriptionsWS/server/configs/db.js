const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/SubscriptionsDB')
    .then(() => console.log('Connected to SubscriptionsDB'))
    .catch(console.log);
};

module.exports = connectDB;
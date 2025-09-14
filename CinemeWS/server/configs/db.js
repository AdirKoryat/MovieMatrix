const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/UsersDB')
    .then(() => console.log('Connected to UsersDB'))
    .catch(console.log);
};

module.exports = connectDB;
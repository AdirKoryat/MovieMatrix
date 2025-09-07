const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriptionSchema = new mongoose.Schema({
  memberId: { type: Schema.Types.ObjectId, ref: "member", required: true },
  movies: [
    {
      movieId: { type: Schema.Types.ObjectId, ref: "movie", required: true },
      date: { type: Date, required: true }
    }
  ]
});

const subscription = mongoose.model('subscription', subscriptionSchema, 'subscriptions');

module.exports = subscription;
const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    city: { type: String }
  },
  {
    versionKey: false
  }
);

const Member = mongoose.model('member', memberSchema, 'members');

module.exports = Member;
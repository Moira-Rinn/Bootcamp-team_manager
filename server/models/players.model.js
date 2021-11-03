const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: [true],
    minLength: [3, "First name must be 3 or more characters"]
  },
  lastName: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  },
  height: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  },
  weight: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  },
  throws: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  },
  bats: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  },
  dob: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  },
  number: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  },
  position: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  },
}, { timestamps: true })

const Player = mongoose.model("player", PlayerSchema);

module.exports = Player;
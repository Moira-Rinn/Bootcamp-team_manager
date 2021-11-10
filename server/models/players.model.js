const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: [true],
    minLength: [2, "First name must be 2 or more characters"]
  },
  lastName: {
    type: String,
    required: [true],
    minLength: [2, "Last name must be 2 or more characters"]
  },
  height: { //number
    type: Number,
    required: [true],
  },
  weight: { //number
    type: Number,
    required: [true],
  },
  throws: { //check box right, left, both
    type: String,
    required: [true],
  },
  bats: { //check box right, left, both
    type: String,
    required: [true],
  },
  dob: { //date
    type: Date,
    required: [true]
  },
  number: { //number
    type: Number,
    required: [true]
  },
  position: {
    type: String,
    required: [true],
    minLength: [3, "Last name must be 3 or more characters"]
  },
  isPlaying: {
    type: Object,
    required: [false]
  },
}, { timestamps: true })

const Player = mongoose.model("player", PlayerSchema);

module.exports = Player;
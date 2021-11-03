const Player = require('../models/players.model');

module.exports = {

  findAllPlayers: (req, res) => {
    Player.find({})
      .then((allPlayers) => {
        console.log(allPlayers);
        res.json({ thePlayers: allPlayers });
      })
      .catch((err) => console.log(err))
  },

  findOnePlayer: (req, res) => {
    Player.findOne({ _id: req.params.id })
      .then((onePlayer) => {
        console.log(onePlayer);
        res.json(onePlayer);
      })
      .catch((err) => console.log(err))
  },

  createNewPlayer: (req, res) => {
    console.log("req:", req, "res:", res);
    Player.create(req.body)
      .then((newPlayer) => {
        console.log("This is newPlayer:", newPlayer);
        res.json(newPlayer);
      })
      .catch(err => res.status(400).json(err))
    // .catch(err => console.log("err:", err))
  },

  deletePlayer: (req, res) => {
    Player.deleteOne({ _id: req.params.id })
      .then((deletedPlayer) => {
        console.log(deletedPlayer);
        res.json(deletedPlayer);
      })
      .catch((err) => console.log(err))
  },

  updatePlayer: (req, res) => {
    Player.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
      .then((updatedPlayer) => res.json(updatedPlayer))
      .catch(err => res.status(400).json(err))
  }
}
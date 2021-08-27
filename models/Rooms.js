const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  room: {
    type: String,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
});

module.exports = Rooms = mongoose.model("Rooms", roomSchema);
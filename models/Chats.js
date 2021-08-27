const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  msg: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = Chats = mongoose.model("Chats", chatSchema);



const express = require("express");
const router = express.Router();

const Chat = require("../models/Chats");

// add Chat
router.post("/add", (req, res) => {
    const {
        msg,
        author,
        room
    } = req.body;
    const newChat = new Chat({
        msg,
        author,
        room
    });
    newChat
        .save()
        .then((chat) => res.send(chat))
        .catch((err) => console.log(err));
});

// get All Chats
router.get("/", (req, res) => {
    Chat.find()
        .then((chat) => res.send(chat))
        .catch((err) => console.log(err));
});

// get Chat by id
router.get("/:_id", (req, res) => {
    const { _id } = req.params;
    Chat.findOne({ _id })
        .then((chat) => res.send(chat))
        .catch((err) => console.log(err));
});

// delete Chat by id
router.delete("/:_id", (req, res) => {
    const { _id } = req.params;
    Chat.findOneAndDelete({ _id: _id })
        .then((chat) => res.send("success"))
        .catch((err) => console.log(err));
});

// get chat by room
router.get("/:room", (req, res) => {
    const { room } = req.params;
    Chat.findOne({ room })
        .then((chat) => res.send(chat))
        .catch((err) => console.log(err));
});

module.exports = router;
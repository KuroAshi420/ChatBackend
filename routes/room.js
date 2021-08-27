const express = require("express");
const router = express.Router();

const Room = require("../models/Rooms");

// add Room
router.post("/add", (req, res) => {
    const {
        room,
        users
    } = req.body;
    const newRoom = new Room({
        room,
        users
    });
    newRoom
        .save()
        .then((room) => res.send(room))
        .catch((err) => console.log(err));
});

// get All Rooms
router.get("/", (req, res) => {
    Room.find()
        .then((room) => res.send(room))
        .catch((err) => console.log(err));
});

// get rooms by id
router.get("/:_id", (req, res) => {
    const { _id } = req.params;
    Rooms.findOne({ _id })
        .then((romm) => res.send(room))
        .catch((err) => console.log(err));
});

// delete room by id
router.delete("/:_id", (req, res) => {
    const { _id } = req.params;
    Rooms.findOneAndDelete({ _id: _id })
        .then((room) => res.send("success"))
        .catch((err) => console.log(err));
});



module.exports = router;
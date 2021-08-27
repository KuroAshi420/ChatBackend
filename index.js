const express = require("express");
const cors = require("cors");
const passport = require("passport");

const app = express();
const connectDB=require('./config/connectDB')

// Middlewares
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// Passport Configuration
require("./middleware/passport")(passport);

//connectDB (config)
connectDB();

app.use("/users", require("./routes/user"));
app.use("/room", require("./routes/room"));
app.use("/chat", require("./routes/chat"));
// socket
const ChatMessages = require ('./models/Chats')
const io = require('socket.io')(http)
io.on('connection', socket => {
  socket.on('chat', (post) => {
      try {
        ChatMessages.findOneAndUpdate({ _id: post._id }, post, { new: true })
          .populate("author")
          .exec((err, post) => {
            return io.emit('chat', post)
          })
      } catch (error) {
        console.error(error);
      }
  })
})
http.listen(5005, function () {
  console.log('listening on port 5005')
})
//run server
const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`Server connected on port ${port} ...`)
);
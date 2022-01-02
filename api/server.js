require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);


app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false })
]);
// Routes
app.use("/api", require("./src/users/routers/listeningRouters"));
app.use("/api", require("./src/users/routers/readingRouters"));
app.use("/api", require("./src/users/routers/ggMeetRouters"));

//socket.io for ggmeeting
const io = (module.exports.io = require('socket.io')(server, {
  cors: {
      origin: '*',
  }
}));
const socketManager = require("./src/users/config/socketManager");
io.on("connection", socketManager); 

// connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!");
  }
);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
server.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})
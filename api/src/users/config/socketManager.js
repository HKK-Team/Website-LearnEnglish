const io = require("../../../server").io;

module.exports = (socket) => {
  try {
    // console.log("Connected to socket!");
    socket.on("code", (data, callback) => { 
      socket.broadcast.emit("code", data);
    });
  } catch (ex) {
    console.log(ex.message);
  }
};

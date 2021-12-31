let redis = require("redis");
// var options = {
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT
// };

let client = redis.createClient(6379, '127.0.0.1');

client.on("error", (error) => {
  console.log(error);
});

module.exports = client;
const mongoose = require("mongoose");

const paymentsSchema = new mongoose.Schema({
  email: String,
  nameLectures: String,
  nameSkills: String,
  levelSkill: String,
  nameTopic: String,
  dayCreate: String,
  hourCreate: String,
  costTopic: String,
  scoreMeeting:Number
});

module.exports = mongoose.model("Payments", paymentsSchema);

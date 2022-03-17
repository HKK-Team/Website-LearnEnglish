const mongoose = require("mongoose");

const bookmeetingsSchema = new mongoose.Schema({
  email: String,
  nameLectures: String,
  nameSkills: String,
  levelSkill: String,
  nameTopic: String,
  dayCreate: String,
  hourCreate: String,
  message: String,
  costTopic: String,
});

module.exports = mongoose.model("Bookmeetings", bookmeetingsSchema);

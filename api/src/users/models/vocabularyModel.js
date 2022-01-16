const mongoose = require("mongoose");

const vocabularySchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  level: {
    nameLevel: String,
    slugLevel: String,
    images: String,
    contentLevel: String,
    topic: {
      topicCode: String,
      nameTopic: String,
      slugTopic: String,
      imageTopic: String,
      contentTopic: String,
      task: {
        type: Array,
        default: [],
      },
    },
  },
});

module.exports = mongoose.model("Vocabularys", vocabularySchema);

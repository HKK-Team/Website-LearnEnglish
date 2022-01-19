const mongoose = require("mongoose");

const readingSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  imageType: String,
  dateCreate: { type: Date, default: Date.now },
  contentType: String,
  type: String,
  slug: String,
  level: {
    nameLevel: String,
    slugLevel:String,
    images: String,
    contentLevel: String,
    topic: {
      topicCode: String,
      nameTopic: String,
      slugTopic:String,
      imageTopic: String,
      contentTopic: String,
      task: {
        type: Array,
        default: [],
      },
    },
  },
});

module.exports = mongoose.model("Readings", readingSchema);

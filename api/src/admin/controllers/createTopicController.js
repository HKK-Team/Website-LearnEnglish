const Listenings = require("../../users/models/listeningsModel");
const Readings = require("../../users/models/readingModel");
const Writings = require("../../users/models/writingModels");
const Speakings = require("../../users/models/speakingModels");


const createTopicCtrl = {
  createTopicListening: async (req, res) => {
    try {
      const {
        contentType,
        imageType,
        type,
        slug,
        dateCreate,
        nameLevel,
        slugLevel,
        contentLevel,
        images,
        topicCode,
        nameTopic,
        slugTopic,
        contentTopic,
        imageTopic,
        radio,
        tranScript,
        dataTask1,
        taskName1,
        text1,
        text2,
        text3,
        text4,
        text5,
        text6,
        dataTask3,
        taskName3,
      } = req.body;
      if (!imageType) return res.status(400).json({ msg: "No image upload" });
      const topic = await Listenings.findOne({
        level: {
          topic: {
            topicCode: {
              $eq: topicCode,
            },
          },
        },
      });
      if (topic)
        return res.status(400).json({ msg: "This topic already exists." });

      const newTopic = new Listenings({
        contentType,
        imageType,
        type,
        slug,
        dateCreate,
        level: {
          nameLevel,
          slugLevel,
          contentLevel,
          images,
          topic: {
            topicCode,
            nameTopic,
            slugTopic,
            contentTopic,
            imageTopic,
            radio,
            tranScript,
            task: [
              {
                task1: {
                  data: dataTask1,
                  taskName: taskName1,
                },
              },
              {
                task2: {
                  text1,
                  text2,
                  text3,
                  text4,
                  text5,
                  text6,
                },
              },
              {
                task3: {
                  data: dataTask3,
                  taskName: taskName3,
                },
              },
            ],
          },
        },
      });
      // save mongodb
      await newTopic.save();
      res.json({ msg: "Created a topic" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createTopicReading: async (req, res) => {
    try {
      const {
        contentType,
        imageType,
        type,
        slug,
        dateCreate,
        nameLevel,
        slugLevel,
        contentLevel,
        images,
        topicCode,
        nameTopic,
        slugTopic,
        contentTopic,
        imageTopic,
        readingText,
        dataTask1,
        taskName1,
        text1,
        text2,
        text3,
        text4,
        text5,
        text6,
        dataTask3,
        taskName3,
      } = req.body;
      if (!imageType) return res.status(400).json({ msg: "No image upload" });
      const topic = await Readings.findOne({
        level: {
          topic: {
            topicCode: {
              $eq: topicCode,
            },
          },
        },
      });
      if (topic)
        return res.status(400).json({ msg: "This topic already exists." });

      const newTopic = new Readings({
        contentType,
        imageType,
        type,
        slug,
        dateCreate,
        level: {
          nameLevel,
          slugLevel,
          contentLevel,
          images,
          topic: {
            topicCode,
            nameTopic,
            slugTopic,
            contentTopic,
            imageTopic,
            readingText,
            task: [
              {
                task1: {
                  data: dataTask1,
                  taskName: taskName1,
                },
              },
              {
                task2: {
                  text1,
                  text2,
                  text3,
                  text4,
                  text5,
                  text6,
                },
              },
              {
                task3: { data: dataTask3, taskName: taskName3 },
              },
            ],
          },
        },
      });
      // save mongodb
      await newTopic.save();
      res.json({ msg: "Created a topic" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createTopicWriting: async (req, res) => {
    try {
      const {
        contentType,
        imageType,
        type,
        slug,
        dateCreate,
        nameLevel,
        slugLevel,
        contentLevel,
        images,
        topicCode,
        nameTopic,
        slugTopic,
        contentTopic,
        imageTopic,
        readingText,
        tips,
        dataTask1,
        taskName1,
        text1,
        text2,
        text3,
        text4,
        text5,
        text6,
        dataTask3,
        taskName3,
      } = req.body;
      if (!imageType) return res.status(400).json({ msg: "No image upload" });
      const topic = await Writings.findOne({
        level: {
          topic: {
            topicCode: {
              $eq: topicCode,
            },
          },
        },
      });
      if (topic)
        return res.status(400).json({ msg: "This topic already exists." });

      const newTopic = new Writings({
        contentType,
        imageType,
        type,
        slug,
        dateCreate,
        level: {
          nameLevel,
          slugLevel,
          contentLevel,
          images,
          topic: {
            topicCode,
            nameTopic,
            slugTopic,
            contentTopic,
            imageTopic,
            readingText,
            tips,
            task: [
              {
                task1: {
                  data: dataTask1,
                  taskName: taskName1,
                },
              },
              {
                task2: {
                  text1,
                  text2,
                  text3,
                  text4,
                  text5,
                  text6,
                },
              },
              {
                task3: { data: dataTask3, taskName: taskName3 },
              },
            ],
          },
        },
      });
      // save mongodbs
      await newTopic.save();
      res.json({ msg: "Created a topic" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createTopicSpeaking: async (req, res) => {
    try {
      const {
        contentType,
        imageType,
        type,
        slug,
        dateCreate,
        nameLevel,
        slugLevel,
        contentLevel,
        images,
        topicCode,
        nameTopic,
        slugTopic,
        contentTopic,
        imageTopic,
        videoTopic,
        tranScript,
        dataTask1,
        taskName1,
        text1,
        text2,
        text3,
        text4,
        text5,
        text6,
        dataTask3,
        taskName3,
      } = req.body;
      if (!imageType) return res.status(400).json({ msg: "No image upload" });
      const topic = await Speakings.findOne({
        level: {
          topic: {
            topicCode: {
              $eq: topicCode,
            },
          },
        },
      });
      if (topic)
        return res.status(400).json({ msg: "This topic already exists." });

      const newTopic = new Speakings({
        contentType,
        imageType,
        type,
        slug,
        dateCreate,
        level: {
          nameLevel,
          slugLevel,
          contentLevel,
          images,
          topic: {
            topicCode,
            nameTopic,
            slugTopic,
            contentTopic,
            imageTopic,
            videoTopic,
            tranScript,
            task: [
              {
                task1: {
                  data: dataTask1,
                  taskName: taskName1,
                },
              },
              {
                task2: {
                  text1,
                  text2,
                  text3,
                  text4,
                  text5,
                  text6,
                },
              },
              {
                task3: {
                  data: dataTask3,
                  taskName: taskName3,
                },
              },
            ],
          },
        },
      });
      // save mongodb
      await newTopic.save();
      res.json({ msg: "Created a topic" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = createTopicCtrl;

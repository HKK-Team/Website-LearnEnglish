const Listenings = require("../../users/models/listeningsModel");
const Readings = require("../../users/models/readingModel");
const Writings = require("../../users/models/writingModels");
const Speakings = require("../../users/models/speakingModels");
const Vocabularys = require("../../users/models/vocabularyModel");
const Grammars = require("../../users/models/grammarModels");

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
  createTopicVocabularys: async (req, res) => {
    try {
      const {
        type,
        dateCreate,
        nameLevel,
        slugLevel,
        contentLevel,
        images,
        topicCode,
        nameTopic,
        slug,
        contentTopic,
        imageTopic,
        dataTask1,
        taskName1,
        dataTask2,
        taskName2,
        dataTask3,
        taskName3,
      } = req.body;
      if (!images) return res.status(400).json({ msg: "No image upload" });
      const topic = await Vocabularys.findOne({
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
      const newTopic = new Vocabularys({
        type,
        dateCreate,
        level: {
          nameLevel,
          slugLevel,
          contentLevel,
          images,
          topic: {
            topicCode,
            nameTopic,
            slug,
            contentTopic,
            imageTopic,
            task: [
              {
                data: dataTask1,
                taskName: taskName1,
              },
              {
                data: dataTask2,
                taskName: taskName2,
              },
              {
                data: dataTask3,
                taskName: taskName3,
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
  createTopicGrammars: async (req, res) => {
    try {
      const {
        type,
        dateCreate,
        nameLevel,
        slugLevel,
        contentLevel,
        images,
        topicCode,
        nameTopic,
        slug,
        contentTopic,
        imageTopic,
        intro,
        title1A,
        explanation1A,
        example1A,
        title1B,
        explanation1B,
        example1B,
        title1C,
        explanation1C,
        example1C,
        title2A,
        explanation2A,
        example2A,
        title2B,
        explanation2B,
        example2B,
        title2C,
        explanation2C,
        example2C,
        title3A,
        explanation3A,
        example3A,
        title3B,
        explanation3B,
        example3B,
        title3C,
        explanation3C,
        example3C,
        title4A,
        explanation4A,
        example4A,
        title4B,
        explanation4B,
        example4B,
        title4C,
        explanation4C,
        example4C,
        title5A,
        explanation5A,
        example5A,
        title5B,
        explanation5B,
        example5B,
        title5C,
        explanation5C,
        example5C,
        dataTask1,
        taskName1,
        dataTask2,
        taskName2,
      } = req.body;
      if (!images) return res.status(400).json({ msg: "No image upload" });
      const topic = await Grammars.findOne({
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
      const newTopic = new Grammars({
        type,
        dateCreate,
        level: {
          nameLevel,
          slugLevel,
          contentLevel,
          images,
          topic: {
            topicCode,
            nameTopic,
            slug,
            contentTopic,
            imageTopic,
            grammarExplanation: {
              intro,
              element_1: [
                {
                  title: title1A,
                  explanation: explanation1A,
                  example: example1A,
                },
                {
                  title: title1B,
                  explanation: explanation1B,
                  example: example1B,
                },
                {
                  title: title1C,
                  explanation: explanation1C,
                  example: example1C,
                },
              ],
              element_2: [
                {
                  title: title2A,
                  explanation: explanation2A,
                  example: example2A,
                },
                {
                  title: title2B,
                  explanation: explanation2B,
                  example: example2B,
                },
                {
                  title: title2C,
                  explanation: explanation2C,
                  example: example2C,
                },
              ],
              element_3: [
                {
                  title: title3A,
                  explanation: explanation3A,
                  example: example3A,
                },
                {
                  title: title3B,
                  explanation: explanation3B,
                  example: example3B,
                },
                {
                  title: title3C,
                  explanation: explanation3C,
                  example: example3C,
                },
              ],
              element_4: [
                {
                  title: title4A,
                  explanation: explanation4A,
                  example: example4A,
                },
                {
                  title: title4B,
                  explanation: explanation4B,
                  example: example4B,
                },
                {
                  title: title4C,
                  explanation: explanation4C,
                  example: example4C,
                },
              ],
              element_5: [
                {
                  title: title5A,
                  explanation: explanation5A,
                  example: example5A,
                },
                {
                  title: title5B,
                  explanation: explanation5B,
                  example: example5B,
                },
                {
                  title: title5C,
                  explanation: explanation5C,
                  example: example5C,
                },
              ],
            },
            task: [
              {
                data: dataTask1,
                taskName: taskName1,
              },
              {
                data: dataTask2,
                taskName: taskName2,
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

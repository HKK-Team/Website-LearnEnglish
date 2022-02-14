const Listenings = require("../../users/models/listeningsModel");

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
                  data:dataTask1,
                  taskName:taskName1,
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
                  dataTask3,
                  taskName3,
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

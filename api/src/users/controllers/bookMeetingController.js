const Bookmeetings = require("../models/bookmeetingModel");

const bookCtrl = {
  saveData: async (req, res) => {
    try {
      const {
        email,
        nameLectures,
        nameSkills,
        levelSkill,
        nameTopic,
        dayCreate,
        hourCreate,
        message,
        costTopic,
        emailStudent,
        linkMeeting,
      } = req.body;

      if (
        !nameLectures ||
        !email ||
        !nameSkills ||
        !nameTopic ||
        !levelSkill ||
        !dayCreate ||
        !hourCreate ||
        !emailStudent ||
        !linkMeeting
      )
        return res.status(400).json({ msg: "Please fill in all fields." });

      const newTopic = new Bookmeetings({
        email,
        nameLectures,
        nameSkills,
        levelSkill,
        nameTopic,
        dayCreate,
        hourCreate,
        message,
        costTopic,
        emailStudent,
        linkMeeting,
      });
      // save mongodb
      await newTopic.save();
      res.json({ msg: "Created a topic" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getData: async (req, res) => {
    try {
      const data = await Bookmeetings.find().lean();
      res.json(data);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = bookCtrl;

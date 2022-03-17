const Payments = require("../models/paymentModel");

const paymentCtrl = {
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
        costTopic,
        scoreMeeting
      } = req.body;

      const newTopic = new Payments({
        email,
        nameLectures,
        nameSkills,
        levelSkill,
        nameTopic,
        dayCreate,
        hourCreate,
        costTopic,
        scoreMeeting
      });
      // save mongodb
      await newTopic.save();
      res.json({ msg: "Success" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getData: async (req, res) => {
    try {
      const data = await Payments.find().lean();
      res.json(data);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = paymentCtrl;

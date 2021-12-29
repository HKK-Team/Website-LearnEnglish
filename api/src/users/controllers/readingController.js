const Readings = require('../models/readingModel')

const readingsCtrl = {
    getdata: async(req, res) => {
        try {
            const reading = await Readings.find()
            res.json(reading)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}
module.exports = readingsCtrl
const Listenings = require('../models/listeningsModel')

const listeningCtrl = {
    getdata: async(req, res) => {
        try {
            const listening = await Listenings.find()
            res.json(listening)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}
module.exports = listeningCtrl
const mongoose = require('mongoose')

const listeningSchema = new mongoose.Schema({
    thumnailMain: {
        thumnailMain_1: String,
        thumnailMain_2: String,
    },
    key: String,
    content: String,
    dateCreate: { type: Date, default: Date.now },
    intro: String,
    topicName: String,
    task:{
        type: Array,
        default: []
    },
    level: String,
    thumnail: {
        thumnail_1: String,
        thumnail_2: String,
    },
    radio: String,
    introTopic: String,
    tranScripts: String,
})

module.exports = mongoose.model('Listenings', listeningSchema)
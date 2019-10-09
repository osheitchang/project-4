const mongoose = require('mongoose')

const emotionSchema = new mongoose.Schema({
  emotion: String,
})

const Emotion = mongoose.model('Emotion', emotionSchema)

module.exports = Emotion

const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
  icon: String,
  activity: String,
  description: String,
})

const Activity = mongoose.model('Activity', activitySchema)

module.exports = Activity

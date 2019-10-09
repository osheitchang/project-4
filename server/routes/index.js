const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
const Emotion = require('../models/Emotion')
router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user,
  })
})

//EMOTIONS

router.post('/add-emotion', (req, res, next) => {
  console.log('Hello', req.body)

  Emotion.create(req.body).then(
    res.json({
      hello: true,
    })
  )
})

router.get('/emotions', (req, res, next) => {
  //4 You listened to the front
  //5 Get emotions from Database
  Emotion.find({}).then(allEmotionsFromDb => {
    res.json({ easy: allEmotionsFromDb }) //6 You send data back to the front
  })
})

module.exports = router

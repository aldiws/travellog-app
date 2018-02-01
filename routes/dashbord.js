const express = require('express')
const router = express.Router()
const models = require('../models')
const User = models.User

router.get('/', (req, res) => {
  console.log(req.session.userId, 'ini id user')
  User.findById(req.session.userId)
    .then((user) => {
      res.render('dashbord', {
        user: user,
        title: 'Login',
        section: 'users',
        error: null,
      })
    })
})

router.get('/destination', (req, res) => {
  Destination.findAll()
    .then((result) => {
      res.render('destination/destination', {
        result: result,
        title: 'Destination',
      })
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router
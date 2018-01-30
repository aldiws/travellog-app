const express = require('express')
const router = express.Router()
const Models = require('../models')
const User = Models.User
const Op = require('sequelize').Op

router.get('/', (req, res, next) => {
  res.render('auth/login', {
    title: 'TravelLog',    
    section: 'auth',
    error: null,
  })
})

router.post('/', (req, res, next) => {
  let input = req.body.login
  User.findOne({
      where: {
        [Op.or]: [{
          email: input
        }, {
          username: input
        }]
      }
    })
    .then(user => {
      if (user) {
        user.check_password(req.body.password, (success) => {
          if (success) {
            req.session.userId = user.id            
            req.session.user = user
            req.session.isLogin = true
            res.flash('Login success')
            res.redirect('/dashbord')
          } else {
            res.flash('Wrong Password')
            res.redirect('/')
          }
        })
      } else {
        res.flash('Username or Email not register, please register before login')
        res.redirect('/')
      }
    })
    .catch(next)
})

router.get('/logout', (req, res, next) => {
  req.session.isLogin = false
  req.session.destroy((err) => {
    if (!err) {
      res.locals.user = undefined
      res.clearCookie('userId');
      res.flash('You Logged Out')
      res.redirect('/')
    } else {
      res.redirect('/');
    }
  })
})


router.post('/signup', (req, res, next) => {
  let newUser = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password,
  }
  User.create(newUser).then(user => {
      res.flash('Registration successfully. Plase Login')
      res.redirect('/')
    })
    .catch(error => {            
      res.render('auth/login', {
        title: 'Sign Up',        
        section: 'auth',
        error: error,
      })
    });
})

module.exports = router
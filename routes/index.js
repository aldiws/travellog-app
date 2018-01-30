const express = require('express');
const router = express.Router()

const Models = require('../models')

const TravelingPlan = Models.TravelingPlan
const Destination = Models.Destination
const User = Models.User

router.get('/',(req,res)=>{
  User.findById(1).then((data)=>{
    res.render('home', {userData:data})    
  })
  
})


module.exports = router
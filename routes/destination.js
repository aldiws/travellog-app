const express = require('express')
const router = express.Router()
const Models = require('../models')

const Plan = Models.Plan
const Destination = Models.Destination
const User = Models.User
const PlanDestinations = Models.PlanDestinations

router.get('/', (req,res)=>{
    Destination.findAll().then((result)=>{
        User.findById(2).then((resultUser)=>{
            User.findById(2,{
                include:[{
                    model: Plan
                }]
            }).then((hasil)=>{
                res.render('destination', {showData:result, userData:resultUser, showUserPlan: hasil.Plans, err:null})
            })
            
        })
    })
    
})

module.exports = router
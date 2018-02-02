const express = require('express');
const router = express.Router()

const Models = require('../models')
const Plan = Models.Plan
const Destination = Models.Destination
const User = Models.User
const PlanDestination = Models.Plan_Destination


router.get('/:id', (req,res)=>{
    let userId = +req.params.id
    User.findById(userId,{
        include:[{
            model: Plan,
        }]
    }).then(project => {
        for(let i = 0; i < project.Plans.length; i++){
            let departureString = project.Plans[i].departureDate + ''
            let departureSubString = departureString.substr(4, 11)

            let endsDateString = project.Plans[i].departureDate + ''
            let endsDateSubString = endsDateString.substr(4,11)
 
            project.Plans[i].departureDate = departureSubString
            project.Plans[i].endsDate = endsDateSubString
        }

        PlanDestination.findAll({
            attributes:[
                'PlanId',
                'DestinationId',
                'id'
            ],
            Where:{
                UserId: userId
            },
            include: [Destination, Plan]
        }).then((hasil)=>{
            res.render('/users/profile', {userPlanData: project.Plans, userData: project, planDestination: hasil, err:null})
        })
      })
})

module.exports = router
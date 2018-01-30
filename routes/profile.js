const express = require('express');
const router = express.Router()

const Models = require('../models')

const Plan = Models.Plan
const Destination = Models.Destination
const User = Models.User

// User.findAll({
//     include: [{
//       model: Project,
//       through: {
//         attributes: ['createdAt', 'startedAt', 'finishedAt'],
//         where: {completed: true}
//       }
//     }]
//   });

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

        res.render('profile', {userPlanData: project.Plans, userData: project})
      })
})


module.exports = router
const express = require('express');
const router = express.Router()

const Models = require('../models')

const Plan = Models.Plan
const Destination = Models.Destination
const User = Models.User
const PlanDestination = Models.Plan_Destination

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

        // for(let j = 0;j < project.Plans.length;j++){
        //     console.log(project.Plans[j])

        // }

        PlanDestination.findAll({
            attributes:[
                'PlanId',
                'DestinationId'
            ],
            Where:{
                UserId: userId
            },
            include: [Destination, Plan]
        }).then((hasil)=>{
            // console.log(project.Plans)
            console.log(hasil)
            // console.log(hasil[0].Destination)
            res.render('profile', {userPlanData: project.Plans, userData: project, planDestination: hasil})
        })
      })
})


// Project
//   .findAndCountAll({
//      where: {
//         title: {
//           [Op.like]: 'foo%'
//         }
//      },
//      offset: 10,
//      limit: 2
//   })
//   .then(result => {
//     console.log(result.count);
//     console.log(result.rows);
//   });

module.exports = router
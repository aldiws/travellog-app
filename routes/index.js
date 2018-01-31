const express = require('express');
const router = express.Router()

const Models = require('../models')

const Plan = Models.Plan
const Destination = Models.Destination
const User = Models.User
const PlanDestination = Models.Plan_Destination
const Joiners_Plan = Models.Joiners_Plan

const Op = require('sequelize').Op;
let namaUsers = []
router.get('/',(req,res)=>{
  User.findById(1).then((data)=>{
    Joiners_Plan.findAll({
        where:{
          JoinId: 1
        }
      }).then((hasilDariJoinersPlan)=>{
        let kumpulanDariJoinersPlan = []
        for(let j = 0; j < hasilDariJoinersPlan.length; j++){
          kumpulanDariJoinersPlan.push(hasilDariJoinersPlan[j].Plan_DestinationsId)
        }
        Plan.findAll({
          where:{
            UserId:1
          }
        }).then((hasilDariPlan)=>{
          
          let kumpulanDariPlan = []
          for(let i =0; i < hasilDariPlan.length; i++){
            kumpulanDariPlan.push(hasilDariPlan[i].id)
          }

          PlanDestination.findAll({
            where:{
              PlanId : {
                [Op.notIn]: kumpulanDariPlan
              },
              id:{
                [Op.notIn]: kumpulanDariJoinersPlan
              }
            },
            include:[Destination, Plan]
          }).then((hasilAkhir)=>{
            res.render('home', {userData:data, userOtherData:hasilAkhir})
            
            // hasilAkhir.forEach(travelplan => {
            //   User.findAll({
            //     where:{
            //       id:travelplan.Plan.UserId
            //     },
            //     order:[
            //       ['userName', 'ASC']
            //     ]
            //   }).then((hasil_namaUser)=>{
            //     console.log(hasil_namaUser)
            //   })
            // });
          })
          
        })
    })
  })
  console.log(namaUsers)
})


module.exports = router
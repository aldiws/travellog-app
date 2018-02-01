const express = require('express');
const router = express.Router()

const Op = require('sequelize').Op;
const Models = require('../models')

const Plan = Models.Plan
const Destination = Models.Destination
const User = Models.User
const PlanDestination = Models.Plan_Destination
const Joiners_Plan = Models.Joiners_Plan


let namaUsers = []
router.get('/', (req, res) => {
  let id = req.session.userId
  if (id === 1) {
    res.redirect('/destination')
  } else {
    User.findById(id).then((data) => {
      Joiners_Plan.findAll({
        where: {
          JoinId: id
        }
      }).then((hasilDariJoinersPlan) => {
        let kumpulanDariJoinersPlan = []
        for (let j = 0; j < hasilDariJoinersPlan.length; j++) {
          kumpulanDariJoinersPlan.push(hasilDariJoinersPlan[j].Plan_DestinationsId)
        }
        Plan.findAll({
          where: {
            UserId: id
          }
        }).then((hasilDariPlan) => {

          let kumpulanDariPlan = []
          for (let i = 0; i < hasilDariPlan.length; i++) {
            kumpulanDariPlan.push(hasilDariPlan[i].id)
          }
          PlanDestination.findAll({
            attributes: {
              include: ['id']
            },
            where: {
              PlanId: {
                [Op.notIn]: kumpulanDariPlan
              },
              id: {
                [Op.notIn]: kumpulanDariJoinersPlan
              }
            },
            include: [Destination, Plan, User, Joiners_Plan]
          }).then((hasilAkhir) => {
            let newHasil = hasilAkhir.map(hasil => {
              return new Promise((resolve, reject) => {
                User.findOne({
                  where: {
                    id: hasil.Plan.UserId
                  }
                }).then((hasil_namaUser) => {
                  hasil.User = hasil_namaUser
                  Joiners_Plan.findAndCountAll({
                    where: {
                      JoinId: hasil.id
                    }
                  }).then((hasilCountJoin) => {
                    hasil.Count = hasilCountJoin.count + 1
                    resolve(hasil)
                  })
                }).catch((err) => {
                  reject(err)
                })
              })
            })
            Promise.all(newHasil).then(function (values) {
              res.render('dashbord', {
                userData: data,
                userOtherData: values,
                err: null
              })
            })
          })

        })
      })
    })
  }
  console.log(namaUsers)
})


module.exports = router
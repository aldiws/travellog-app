const express = require('express')
const router = express.Router()

const models = require('../models')
const Plan = models.Plan
const Destination = models.Destination
const User = models.User
const PlanDestination = models.Plan_Destination
const Joiners_Plan = models.Joiners_Plan

const api_key = 'key-1bc10d31bcdaa98a4f7b7f1cf00733b7';
const domain = 'sandboxddb3930928a540688e9edd22a3e7d2a7.mailgun.org';
const mailgun = require('mailgun-js')({
  apiKey: api_key,
  domain: domain
});

router.post('/add', (req, res) => {
  let objTravelingStyle = {
    title: req.body.title,
    planDescription: req.body.planDescription,
    departureDate: req.body.departureDate,
    endsDate: req.body.endsDate,
    UserId: req.session.userId
  }
  Plan.create(objTravelingStyle)
    .then(() => {
      res.redirect('/destination')
    })
    .catch((err) => {
      Plan.findAll()
        .then((result) => {
          res.send(err.message)
        })
    })
})

router.post('/addDestination/:planId/:userId/:destinationId', (req, res) => {
  let addDestination = {
    PlanId: req.params.planId,
    DestinationId: req.params.destinationId,
    UserId: req.params.userId,
    JoinId: req.params.userId,
    departureDate: req.body.departureDate,
    endsDate: req.body.endsDate
  }
  PlanDestination.create(addDestination).then(() => {
    res.redirect('/destination')
  }).catch((err) => {
    res.send(err)
  })
})

router.get('/joinDestination/:userId/:planId/:plan_destinationId/:departureDate/:endsDate', (req, res) => {
  // get from Data
  let fromId = +req.params.userId
  let toId = +req.params.planId
  let planDestinationId = +req.params.plan_destinationId
  let departureDate = req.params.departureDate
  let endsDate = req.params.endsDate

  User.findById(fromId).then((from) => {
    Plan.findById(toId, {
      include: [User]
    }).then((to) => {
      PlanDestination.findAll({
        where: {
          id: planDestinationId
        },
        include: [Destination]
      }).then((locationName) => {
        let data = {
          from: `<postmaster@sandboxddb3930928a540688e9edd22a3e7d2a7.mailgun.org>`,
          to: `${to.User.email}`,
          subject: 'TravelLog notification, somebody wants to join your plan',
          text: `Hey ${to.User.first_name}, ${from.first_name} ${from.email} want to join to go to ${locationName[0].Destination.name} on your ${to.title} plan
          Departure date ${departureDate} and Ends date ${endsDate}
          `
        };
        mailgun.messages().send(data, function (error, body) {
          if (error) {
            console.log(error)
          } else {
            Joiners_Plan.findOrCreate({
              where: {
                Plan_DestinationsId: +req.params.plan_destinationId,
                JoinId: +req.params.userId,
              },
              defaults: {
                departureDate: req.params.departureDate,
                endsDate: req.params.endsDate
              }
            }).spread((userResult, created) => {
              res.redirect('/dashboard')
            }).catch((err) => {})
          }
        });
      })
    })
  })
})

module.exports = router
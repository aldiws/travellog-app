const express = require('express')
const router = express.Router()
const Models = require('../models')

const Plan = Models.Plan
const Destination = Models.Destination
const User = Models.User
const PlanDestination = Models.Plan_Destination
const Joiners_Plan = Models.Joiners_Plan

router.get('/', (req, res) => {
  TravelingPlan.findAll()
    .then((result) => {
      res.send(result)
      
    })
    .catch(err => {
      res.send(err)
    })
})


router.post('/add', (req, res) => {
  let objTravelingStyle = {
    title: req.body.title,
    planDescription: req.body.planDescription,
    departureDate: req.body.departureDate,
    endsDate: req.body.endsDate,
    UserId: 2
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

router.post('/addDestination/:planId/:userId/:destinationId',(req,res)=>{
    let addDestination = {
      PlanId: req.params.planId,
      DestinationId: req.params.destinationId,
      UserId: req.params.userId,
      JoinId: req.params.userId,
      departureDate: req.body.departureDate,
      endsDate: req.body.endsDate
    }

    PlanDestination.create(addDestination).then(()=>{
      res.redirect('/destination')
    }).catch((err)=>{
      res.render('destination')
    })
})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  TravelingPlan.findById(id)
    .then((result) => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/edit/:id', (req, res) => {
  let objTravelingStyle = {
    id: req.params.id,
    title: req.body.title,
    plan_description: req.body.plan_description,
    depature_date: req.body.depature_date,
    end_date: req.body.end_date,
    destination_number: req.body.destination_number,
    UserId: req.session.userId
  }
  TravelingPlan.update(objTravelingStyle, {
      where: {
        id: objTravelingStyle.id
      }
    })
    .then(() => {
      res.redirect('/traveling_plan')
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/delete/:id', (req, res) => {
  let id = req.params.id
  TravelingPlan.destroy({
      where: {
        id: id
      }
    })
    .then(() => {
      res.redirect('/traveling_plan')
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/joinDestination/:userId/:planId/:plan_destinationId/:departureDate/:endsDate', (req,res)=>{
  console.log(req.params)
  Joiners_Plan.findOrCreate({
    where:{
      Plan_DestinationsId: +req.params.plan_destinationId,
      JoinId: +req.params.userId,
    
    },defaults:{
      departureDate: req.params.departureDate,
      endsDate: req.params.endsDate
    }
  }).spread((userResult,created)=>{
    res.redirect('/')
    }).catch((err)=>{
  })
})

router.get('/:id/addDestination', (req, res) => {
  let id = req.params.id
  Promise.all([TravelingPlan.findById(id), Destination.findAll()])  
    .then(([resultPlan,resultDestination]) => {
          res.render('', {
            resultPlan: resultPlan,
            resultDestination: resultDestination
          })
        })    
    .catch((err) => {
      res.send(err)
    })
})

router.post('/:id/addDestination', (req, res) => {
  let objPlanDestination = {
    PlanId: req.params.id,
    DestinatinId: req.body.DestinatinId,
    UserId: DataTypes.INTEGER
  }
  PlanDestinations.update(objPlanDestination, {
      where: {
        id: objPlanDestination.PlanId
      }
    })
    .then(result => {
      res.redirect('')
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
const Models = require('../models')

const Plan = Models.Plan
const Destination = Models.Destination
const User = Models.User
const PlanDestinations = Models.PlanDestinations

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
    UserId: 1
  }
  
  Plan.create(objTravelingStyle)
    .then(() => {
      res.redirect('/destination')
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/addDestination/:destinationId/:userId',(req,res)=>{
    console.log(req.params)  
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
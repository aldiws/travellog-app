const express = require('express')
const router = express.Router()
const Models = require('../models')
const TravelingPlan = Models.TravelingPlan
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

router.get('/add', (req, res) => {
  res.render('')
})

router.post('/add', (req, res) => {
  let objTravelingStyle = {
    title: req.body.title,
    plan_description: req.body.plan_description,
    depature_date: req.body.depature_date,
    end_date: req.body.end_date,
    destination_number: req.body.destination_number,
    UserId: req.session.userId
  }
  TravelingPlan.create(objTravelingStyle)
    .then((result) => {
      Destination.findAll()
      res.redirect('/traveling_plan/destination')
    })
    .catch((err) => {
      res.send(err)
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

app.post('/edit/:id', (req, res) => {
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

app.get('/delete/:id', (req, res) => {
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

app.get('/:id/addDestination', (req, res) => {
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

app.post('/:id/addDestination', (req, res) => {
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
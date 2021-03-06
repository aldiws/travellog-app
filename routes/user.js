const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const fileName = 'img_' + Date.now() + '_';
const Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads/img/');
  },
  filename: function (req, file, callback) {
    callback(null, fileName + file.originalname.split(' ').join('_').toLowerCase());
  },
});

const models = require('../models')
const Plan = models.Plan
const Destination = models.Destination
const User = models.User
const PlanDestination = models.Plan_Destination

router.get('/', (req, res) => {
  let id = req.session.userId
  User.findById(id, {
      include: [{
        model: Plan,
      }]
    })
    .then(project => {
      for (let i = 0; i < project.Plans.length; i++) {
        let departureString = project.Plans[i].departureDate + ''
        let departureSubString = departureString.substr(4, 11)

        let endsDateString = project.Plans[i].departureDate + ''
        let endsDateSubString = endsDateString.substr(4, 11)

        project.Plans[i].departureDate = departureSubString
        project.Plans[i].endsDate = endsDateSubString
      }

      PlanDestination.findAll({
          attributes: [
            'PlanId',
            'DestinationId',
            'id'
          ],
          Where: {
            UserId: id
          },
          include: [Destination, Plan]
        })
        .then((hasil) => {
          console.log(hasil)
          res.render('users/profile', {
            userPlanData: project.Plans,
            userData: project,
            planDestination: hasil,
            title: 'My Profile',
            err: null
          })
        })
    })
})


router.get('/:username', (req, res, ) => {
  let id = req.session.userId
  User.findById(id)
    .then((user) => {
      res.render('users/user_edit', {
        user: user,
        title: 'Update Profile ',
        section: 'users',
        error: null,
      })
    })
})

router.post('/:username', (req, res) => {
  let id = req.session.userId
  User.findOne({
      where: {
        id: id
      },
    })
    .then(function (user) {
      const upload = multer({
        storage: Storage,
        limits: {
          fileSize: 1000000
        },
        fileFilter: function (req, file, callback) {
          const ext = path.extname(file.originalname)
          if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            req.fileValidationError = "Forbidden extension";
            return callback(null, false, req.fileValidationError);
          }
          callback(null, true)
        }
      }).single('photo_profile');
      upload(req, res, function (err) {
        if (!err) {
          let objProfile = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            about_me: req.body.about_me,
            travel_style: req.body.travel_style,
            photo_profile: fileName + req.file.originalname.split(' ').join('_').toLowerCase()
          }
          User.update(objProfile, {
              where: {
                id: user.id,
              }
            })
            .then(function () {
              res.flash('Upload success')
              res.redirect('/profile')
            })
            .catch(function (err) {
              res.flash('Upload failed')
              res.redirect('/profile')
            })
        } else {
          res.redirect('/profile')
          res.flash('Error uploading file max size 1MB')
        }
        if (req.fileValidationError) {
          let id = req.session.userId
          res.flash('Upload failed forbidden extension')
          User.findById(id)
            .then((user) => {
              res.render('users/user_edit', {
                user: user,
                title: 'Update Profile ',
                section: 'users',
              })
            })
        }
      })
    })
})

module.exports = router
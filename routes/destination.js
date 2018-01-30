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
const Models = require('../models')
const Destination = Models.Destination
const User = Models.User


router.get('/', (req, res) => {
  Destination.findAll()
    .then((result) => {
      User.findById(req.session.userId)
        .then((user) => {
          res.render('destination/destination', {
            result: result,
            user: user,
            title: 'Destination',
          })
        })
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/add', (req, res) => {
  res.render('destination/add_destination', {
    title: 'Add Destination',
  })
})

router.post('/add', (req, res) => {

  const upload = multer({
    storage: Storage,
    limits: {
      fileSize: 10000000
    },
    fileFilter: function (req, file, callback) {
      const ext = path.extname(file.originalname)
      if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        req.fileValidationError = "Forbidden extension";
        return callback(null, false, req.fileValidationError);
      }
      callback(null, true)
    }
  }).single('photo');
  upload(req, res, function (err) {
    if (!err) {
      let objDestination = {
        name: req.body.name,
        category: req.body.category,
        country: req.body.country,
        province: req.body.province,
        specificLocation: req.body.specificLocation,
        description: req.body.description,
        photo: fileName + req.file.originalname.split(' ').join('_').toLowerCase()
      }
      Destination.create(objDestination)
        .then(function () {
          res.flash('Success')
          res.redirect('/destination')
        })
        .catch(function (err) {
          res.flash('Upload failed')
          res.redirect('/destination')
        })
    } else {
      res.flash('Error uploading file max size 10MB')
      res.redirect('/destination')
    }
    if (req.fileValidationError) {
      res.flash('Error uploading file')
      console.log('req.fileValidationError')
      res.render('destination/add_destination', {
        title: 'Add Destination',
        title: 'Add Destination',
        section: 'destination'
      })
    }
  })
})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  Destination.findById(id)
    .then((row) => {
      res.render('destination/edit_destination', {
        row: row,
        title: 'Edit Destination',
        section: 'destination',
        error: null,
      })
    })
})

router.post('/edit/:id', (req, res) => {
  const upload = multer({
    storage: Storage,
    limits: {
      fileSize: 10000000
    },
    fileFilter: function (req, file, callback) {
      const ext = path.extname(file.originalname)
      if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        req.fileValidationError = "Forbidden extension";
        return callback(null, false, req.fileValidationError);
      }
      callback(null, true)
    }
  }).single('photo');
  upload(req, res, function (err) {
    if (!err) {
      let objDestination = {
        id: req.params.id,
        name: req.body.name,
        category: req.body.category,
        country: req.body.country,
        province: req.body.province,
        specificLocation: req.body.specificLocation,
        description: req.body.description,
        photo: fileName + req.file.originalname.split(' ').join('_').toLowerCase()
      }
      Destination.update(objDestination, {
          where: {
            id: objDestination.id,
          }
        })
        .then(function () {
          res.flash('Success')
          res.redirect('/destination')
        })
        .catch(function (err) {
          res.flash('Upload failed')
          res.redirect('/destination')
        })
    } else {
      res.flash('Error uploading file max size 10MB')
      res.redirect('/destination')
    }
    if (req.fileValidationError) {
      console.log('req.fileValidationError')
      let id = req.params.id
      Destination.findById(id)
        .then((result) => {
          res.render('', {
            result: result,
            title: 'Edit Destination',
            section: 'destination',
            error: null,
          })
        })
    }
  })
})

router.get('/delete/:id', (req, res) => {
  let id = req.params.id
  Destination.destroy({
      where: {
        id: id
      }
    })
    .then(() => {
      res.redirect('/destination')
    })
    .catch((err) => {
      res.send(err)
    })
})


module.exports = router
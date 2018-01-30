const express = require('express')
const router = express.Router()
const Models = require('../models')
const User = Models.User

router.get('/', (req, res, next) => {
  let id = req.session.userId
  User.findById(id)
    .then((user) => {
      res.render('users/setting', {
        user: user,
        title: 'Account Setting',
        section: 'users',
        error: null,
      })
    })
})

router.get('/:username', (req, res, next) => {
  let id = req.session.userId
  User.findById(id)
    .then((user) => {
      res.render('users/setting_edit', {
        user: user,
        title: 'Account Setting',
        section: 'users',
        error: null,
      })
    })
})

router.post('/:username', (req, res, next) => {
  let id = req.session.userId
  User.findOne({
      where: {
        id: id
      },
    })
    .then((user) => {
      user.check_password(req.body.password, (result) => {
        let objProfile = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        }
        User.update(objProfile, {
            where: {
              id: user.id
            },
            individualHooks: true,
          })
          .then(function () {
            res.redirect('/setting')
          })
          .catch(error => {
            res.render('users/setting_edit', {
              user: user,
              title: 'Account Setting',
              section: 'users',
              error: error,
            })
          })
      })
    })
    .catch(error => {
      res.render('users/setting_edit', {
        user: user,
        title: 'Account Setting',
        section: 'users',
        error: error,
      })
    })
})


router.get('/:username/delete', (req, res, next) => {
  let id = req.session.userId
  User.destroy({
    where : {id:id}
  })
  .then(result =>{
    res.redirect('/')
  })
  .catch((err)=>{
    res.send(err)
  })    
})

// router.post('/settings', (req, res, next) => {
//   let id = req.session.userId
//   User.find({
//       where: {
//         id: id
//       }
//     })
//     .then((user) => {
//       if (req.body.newpassword == req.body.verifypassword) {
//         user.check_password(req.body.oldpassword, (result) => {
//           if (result) {
//             User.update({
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: req.body.newpassword
//               }, {
//                 where: {
//                   id: req.session.UserId
//                 }
//               })
//               .then(() => {
//                 res.send('Success')
//               })
//               .catch(error => {
//                 res.render('users/setting', {
//                   user: user,
//                   title: 'Account Setting',
//                   section: 'users',
//                   error: error,
//                 })
//               })
//           } else {
//             res.render('users/setting', {
//               user: user,
//               title: 'Account Setting',
//               section: 'users',
//               error: "Wrong old password",
//             })
//           }
//         })
//       } else {
//         res.render('users/setting', {
//           user: user,
//           title: 'Account Setting',
//           section: 'users',
//           error: "Please make sure you verify new password",
//         })
//       }
//     })
//     .catch(next)
// })

module.exports = router
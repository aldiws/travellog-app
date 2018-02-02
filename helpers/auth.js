function check_login(req, res, next) {
  console.log('------->', req.url)
  let login = req.session.isLogin
  if (login) {
    next()
  } else {
    res.redirect('/')
  }
}

module.exports = {
  check_login: check_login
}
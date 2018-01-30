function checkLoginHandler(req, res, next) {
  console.log('------->', req.url)
  let login = req.session.isLogin
  if (login) {
    next(res.path)
  } else {
    res.redirect('/auth/login')
  }  
}

module.exports = {
  checkLoginHandler: checkLoginHandler
}


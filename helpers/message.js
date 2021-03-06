function flash_message(req, res, next) {
  res.flash = function (text) {
    res.cookie('flash_message', text, {
      httpOnly: true
    })
  }
  if (req.cookies.flash_message) {
    res.locals.flashMessage = req.cookies.flash_message
    res.clearCookie('flash_message')
  }
  next()
}

module.exports = {
  flash_message: flash_message
}
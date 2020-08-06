const User = require('../models/User')
const HttpStatus = require('http-status-codes')
const passport = require('passport')
module.exports = {
  authenticateUser: async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    try {
      const user = await User.findByCredentials(email, password)
      const token = await user.generateAuthToken()
      res.send({ user: user, token: token })
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message })
    }
  },
  logout: (req, res, next) => {
    res.status(HttpStatus.OK).json({ success: 'ok' })
  },
  logoutAll: (req, res, next) => {
    res.status(HttpStatus.OK).json({ success: 'ok' })
  },
  googleAuth: passport.authenticate('google', {
     scope: ['profile', 'email'] 
  }),
  googleAuthCallback: passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log(req.user.emails[0].value);
    res.status(HttpStatus.OK).json({ success: 'ok' });
  }
}

const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
// const isActivated = require('../middleware/activate')
const isUnderMaintenance = require('../middleware/maintenance')

// user login
router.post(
  '/login',
  isUnderMaintenance,
  authController.authenticateUser
)

// user logout
router.post(
  '/logout',
  authController.logout
)

// logout all sessions
router.post(
  '/logoutAll',
  authController.logoutAll
)

// google auth login
router.get(
  '/google',
  authController.googleAuth
)

// google auth callback
router.get(
  '/google/callback',
  authController.googleAuthCallback
)

module.exports = router

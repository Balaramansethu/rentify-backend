const express = require('express')
const router = express.Router()
const {registerNewUser} = require('../controller/signupController')

router.route('/').post(registerNewUser)

module.exports = router
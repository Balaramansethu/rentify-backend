const express = require('express')
const router = express.Router()
const {displayUserData} = require('../controller/userDataController')

router.route('/').post(displayUserData)

module.exports = router
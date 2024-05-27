const express = require('express')
const router = express.Router()
const { viewAllProperties, buyerInterested, filter } = require('../controller/buyerController')


router.post('/buyerRoute', viewAllProperties).post('/buyerInterest', buyerInterested).get('/filter',filter)

module.exports = router 
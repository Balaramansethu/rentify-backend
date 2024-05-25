const express = require('express')
const router = express.Router()
const getAllHouseDetails = require('../controller/sellerController')
router.route('/seller').get(getAllHouseDetails)
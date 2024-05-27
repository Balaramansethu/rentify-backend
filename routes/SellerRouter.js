const express = require('express')
const router = express.Router()

const { addANewProperty, getAllProperties, deleteProperty } = require('../controller/sellerController')

router.post('/new', addANewProperty).get('/get', getAllProperties).delete('/delete/:id', deleteProperty)  

module.exports = router
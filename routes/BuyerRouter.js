const express = require('express')
const router = express.Router()
const data = require('../data/houseData')


router.route('/:id')

router.get('/', (request,response)=>{
    response.send("home page")
})

router.get('/favourite', (request,response)=>{
    response.header("content-type", 'application/json')
    response.send(JSON.stringify(data))
})

router.get('/:id',(request,response)=>{
    request.params.id
    response.send(`the user id is ${request.params.id}`)
})
module.exports = router
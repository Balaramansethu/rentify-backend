const houseDtailsModel = require('../models/houseDetailsModel')
const initialData = require('../data/houseData')
const houseDetailsModel = require('../models/houseDetailsModel')

const getAllDetails =async(request,response)=>{
try{
    const details = await houseDtailsModel.find()
    {
        const details = await houseDtailsModel.insertMany(initialData)
     }
     response.status(200).json(details)
     }
     catch(error)
     {
         response.status(500).json({message:error.message})
     }
}

const addNewDetails = async(request, response) => {
    const newDetails = request.body
    try{
        const existingDetails= await houseDetailsModel.findOne({buildingLife:request.body.buildingLife})
        if (existingDetails)
        {
            return response.status(409).json({message:'House details already exsists.'})
        }
        const details = await houseDetailsModel.create(newDetails)
        response.status(201).json(details)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

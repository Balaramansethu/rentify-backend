const houseDetailsModel = require('../models/houseDetailsModel');

const addANewProperty = async (request, response) => {
    const { place, area, bhk, buildingLife, bathroom, hospitalNearby, collegeNearby, mobile } = request.body;

    try {
        const existingDetails = await houseDetailsModel.findOne({ place, area, bhk, buildingLife, bathroom, hospitalNearby, collegeNearby, mobile });
        if (existingDetails) {
            return response.status(409).json({ message: 'House details already exist.' })
        }

        const data = new houseDetailsModel({
            place,
            area,
            bhk,
            buildingLife,
            bathroom,
            hospitalNearby,
            collegeNearby,
            mobile
        });

        await data.save();
        const responseData = await houseDetailsModel.find({});
        return response.status(201).json({ message: "Property added successfully.", data: responseData });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: error.message });
    }
};

const getAllProperties= async(request, response) => {
    try{
        const propertyData = await houseDetailsModel.find()
        response.status(200).send(propertyData)
    }
    catch(error)
    {
        response.status(500).json({ErrorMessage:error.message})
    }  
}

const deleteProperty = async(request,response) =>{
    try {
        const { id } = request.params;
        await houseDetailsModel.findByIdAndDelete(id);
        response.json({ message: 'Property deleted successfully' });
      } catch (error) {
        response.status(500).json({ message: error.message });
      }
}





module.exports = {
    addANewProperty,
    getAllProperties,
    deleteProperty,
};

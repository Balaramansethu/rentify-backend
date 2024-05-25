const mongoose = require('mongoose')

const HouseDetailsSchema = new mongoose.Schema(
    {
        bhk : {
            type:String,
            required:true
        },
        buildingLife : {
            type:String,
            required:true
        },
        owners : {
            type:String,
            required:true
        },
        rent : {
            type:String,
            required:true
        }
    },
    {
        collection : 'houseDetails'
    }
)
module.exports = mongoose.model('housDetails', HouseDetailsSchema)
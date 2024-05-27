const mongoose = require('mongoose')

const houseDetailsSchema = new mongoose.Schema(
    {
      
        place : {
            type:String,
            required:true
        },
        area : {
            type:String,
            required:true
        },
        bhk : {
            type:String,
            required:true
        },
        buildingLife : {
            type:String,
            required:true
        },
        bathroom : {
            type:String,
            required:true
        },
        hospitalNearby : {
            type:String,
            required:true
        },
        collegeNearby : {
            type:String,
            required:true
        },
        mobile : {
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    },
    {
        collection : 'houseDetails'
    }
)
module.exports = mongoose.model('housDetails', houseDetailsSchema)
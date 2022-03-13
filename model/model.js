const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
  
    schoolname:{
        type: String,
        required: true
    },
    schoollocation:{
        type: String,
        required: true
    },
    cloud_url:{
        type: String,
    },
    cloud_id:{
        type:String
    },
    image:{
        type: String
    },
    Date:{
        type: Date,
        default:new Date
    }
})

module.exports = mongoose.model('user', userSchema)
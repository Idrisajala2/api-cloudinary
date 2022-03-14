require("dotenv").config();
const mongoose = require("mongoose")
const url= process.env.MONGO_ATLAS
mongoose.connect(url).then(()=>{
    console.log("database connected")
}).catch((error)=>{
    console.log(error)
})
module.exports=mongoose
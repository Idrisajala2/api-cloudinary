const mongoose = require("mongoose")
const url="mongodb://localhost/schooldb"
mongoose.connect(url).then(()=>{
    console.log("database connected")
}).catch((error)=>{
    console.log(error)
})
module.exports=mongoose
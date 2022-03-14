const model = require('../model/model')
const fs = require ("fs")
const cloudinary = require("../config/cloudinary")
const Create = async(req, res)=>{
    try {
        
        const result = await cloudinary.uploader.upload(req.file.path)
        const createNew = await model.create({
             schoolname: req.body.schoolname,
             schoollocation: req.body.schoollocation ,                
             cloud_url: result.secure_url,
             cloud_id: result.public_id,
             image: req.file.path
        })
        res.status(201).json({
            status:"successful",
            data: createNew
        })
    } catch (error) {
        res.status(404).json({
            status:"fail",
            message: error
        })
    }
}


const ReadAll = async (req,res)=>{
     try{
       const students = await model.find()
       res.status(201).json({
           status:"succesfully seen All",
           data:students
       })
     }catch(error){
          res.status(204).json({
              status:"fail",
              message:"cannot fetch any data "
          })
     }
}
const  getOne = async (req,res)=>{
    try{
      id= req.params.id
      if(!id){
          res.status(401).json({
              status:"fail"
          })
      }
      const Studentsid = await model.findById(id)
      res.status(200).json({
          status:"succes",
          data:Studentsid
      })
    }catch(error){
        console.log(error.message)
    }
}
const updates =async (req,res)=>{
    try{
        const cloud = await cloudinary.uploader.upload(req.file.path);
        const stdUptd = await model.findByIdAndUpdate(req.params.id,{
                 schoolname: req.body.schoolname,
                 schoollocation: req.body.schoollocation,
                 cloud_url: cloud.secure_url,
                 cloud_id: cloud.public_id,
                 image: req.file.path
        }, {new:true})  
        // id=req.params.id
        // let school = await model.findById(id)
        // if(!school){
        //     res.status(404).json({message:"the identity passed not"})

        // }
       
    res.status(201).json({
        status:"updated succefully",
        data:stdUptd})
    }catch(error){
        console.log(error.message)
    }
}
const deletes = async (req,res)=>{
    try{
      id= req.params.id
      const std= await model.findById(req.params.id)
      await cloudinary.uploader.destroy(id)
      await fs.unlinkSync(std.image)
      if(!std){
          res.status(400).json({
              status:"fail",
              message:"this student is not in db"

          })
      }
      const stdrev = await model.findByIdAndDelete(req.params.id)
      res.status(204).json({
          status:"successfully students in db",
          data:stdrev
      })
    }catch(error){
        console.log(error.message)
    }
}
module.exports={
    Create,
    ReadAll,
    getOne,
    updates,
    deletes
}

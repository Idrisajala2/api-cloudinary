const express = require("express")
const route = express.Router()
const {Create, ReadAll,getOne,deletes} = require("../controller/controller")
const imageUploader = require('../multer/multer')

route.post("/post", imageUploader, Create)
route.get("/get",ReadAll)
route.get("/get/:id",getOne)
// route.patch("/patch/:id", imageUploader, updates)
route.delete("/delete/:id",deletes)


module.exports = route
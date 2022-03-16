const multer = require("multer")
const path = require("path")


//diskstorage returns a StorageEngine implementation configured to store files on the local file system.
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const filterFile = (req, file, cb) => {
    //extname and originalname Return the extension of the path, from the last '.' to end of string in
    const ext = path.extname(file.originalname);
    if(ext !== ".jpg" || ext !== ".svg" || ext !== ".png" ) {
        cb(null, new Error("File format not supported"), false);

    } else {
        cb(null, true);
    }
}

const imageUploader = multer({
    storage: storage,
    filterFile: filterFile,
    limits: {
        fileSize: 1024 * 1024 * 20
    }
}).single("image");

module.exports = imageUploader;

const multer = require ("multer")
const path = require ("path")


const storage = multer.diskStorage({
       destination:(req, file, cb)=>{
           cb(null)
       },
       filename:(req, file, cb)=>{
           cb(null, file.originalname)
       }
})

const filterFile = (req, file, cb)=>{
    const ext= path.extname(file.originalname);
    if(ext! == ".jpg" || ext! == ".png"){
        cb(null, new Error("new err"),error)
    }else{

    }
}


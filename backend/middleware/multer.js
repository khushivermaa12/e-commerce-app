const multer = require('multer');
//to send multiple images
const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})
module.exports = upload;
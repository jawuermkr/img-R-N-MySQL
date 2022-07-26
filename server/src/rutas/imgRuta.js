const express = require("express")
const router = express.Router();
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination:"./src/img",
    filename:(req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

const {create} = require("../controladores/imgControl")

router.post("/insert/:tabla",upload.single("image"), create)

module.exports = router; 
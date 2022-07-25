const express = require("express")
const router = express.Router();

const {create} = require("../controladores/imgControl")

router.post("/insert/:tabla", create)

module.exports = router;
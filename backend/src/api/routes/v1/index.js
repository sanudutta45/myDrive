const express = require("express");
const authRoutes = require("./auth.route");
const folderRoutes = require("./folder.route");

const router = express.Router();

router.get("/status",(req,res)=>res.send("OK"));


//auth routes
router.use("/auth",authRoutes);
router.use("/folder",folderRoutes)

module.exports = router;
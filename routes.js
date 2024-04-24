const express = require("express");
const fs = require("fs");
const path = require("path");


const router = express.Router();

const loginPath = path.join(__dirname, "../");
router.use(express.static(loginPath))
// router.get("/", function(req, res){
//     res.sendFile(path.join( loginPath, "index.html"));
// })

router.get("/login", function(req, res){
    res.sendFile(path.join( loginPath, "login.html"));
})
router.get("/register", function(req, res){
    res.sendFile(path.join( loginPath, "sign.html"));
})




module.exports = router;
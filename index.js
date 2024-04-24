
const express = require("express");
const path = require("path");

const app = express();

const loginData = require("../resortwebsite-master/routes/routes");
const routeRouter = require("../resortwebsite-master/routes/app");
const contactData = require("../resortwebsite-master/routes/contact")


app.use(loginData);
app.use(routeRouter);
app.use(contactData);

app.listen(4000, ()=>{
    console.log("Server Started in 4000");
})
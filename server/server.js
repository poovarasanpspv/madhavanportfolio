const app = require("./app");
const express = require("express");
//const dotenv = require("dotenv");
const path = require("path");
const connectdatabase = require("./config/database");
// dotenv.config({path:path.join(__dirname,"config/config.env")});
connectdatabase();
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

app.listen(process.env.PORT, ()=>{
     console.log(`Server started on port 5000`);
});

const express = require("express");
var cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
dotenv.config({path:path.join(__dirname,"/config/config.env")});
app.use('/uploads', express.static(path.join(__dirname,'uploads') ) )
const product = require('./routes/product');
const auth = require('./routes/auth');
const errorMiddleware = require('./Middlewares/error');
app.use("/api/v1", product);
app.use("/api/v1/",auth);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

app.use(errorMiddleware);

module.exports = app;

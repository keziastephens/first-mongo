const express = require("express"); //includes express js
const app = express(); // variable for express
const bodyParser = require("body-parser"); // includes  body parser
const mongoose = require("mongoose"); // includes mongoose
const bcrypt = require("bcryptjs");
const cors = require("cors");
const config = require("./config.json");

const port = 5000;

app.use((req, res, next)=>{
    console.log(`${req.method} request ${req.url}`);
    next();
})

app.use(bodyParser.json()); // calling body parser method
app.use(bodyParser.urlencoded({extended:false})); // preventing url from being parsed

app.use(cors()); // calling cors method with express

app.get("/", (req,res)=> res.send("Hello! I am from the backend!"))

mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.${config.MONGO_CLUSTER_NAME}.mongodb.net/${config.MONGO_DBNAME}?retryWrites=true&w=majority`, {useNewUrlParser:true,useUnifiedTopology: true}).then(()=>console.log('DB Connected!'))
.catch(err=>{
  console.log(`DB Connection Error:${err.message}`);
});


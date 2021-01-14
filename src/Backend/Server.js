const temp="Abhijeet Marathe"
const http= require("http");
const BaseRoutes=require('./Routes/BasicRoutes')
const express= require("express");

const bodyParser=require('body-parser');

const app= express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });
app.use(BaseRoutes)



app.listen(5500);

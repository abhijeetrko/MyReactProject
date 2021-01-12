const temp="Abhijeet Marathe"
const http= require("http");
const BaseRoutes=require('./Routes/BasicRoutes')
const express= require("express");

const bodyParser=require('body-parser');

const app= express();
app.use(bodyParser.json());
app.use(BaseRoutes)



app.listen(5500);

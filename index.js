const express = require ('express')

const app= express();
require('dotenv').config();
const port = 4000

app.get('/',(req,res)=>{
res.send("Hellooooo");
})

app.get('/login',(req,res)=>{
    res.send("Login here");
})

app.listen(process.env.port , ()=>{
    console.log("Listening to port : " + port);
    console.log("Listening to port : " + process.env.port);
})
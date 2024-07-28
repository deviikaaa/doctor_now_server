const express=require('express')
const dbconnect = require('./config/mongo')
const app=express()
require('dotenv').config()



//mongoose connect
dbconnect()



//port setting
const PORT=process.env.PORT || 9001
app.listen(PORT,function(req,res){
    console.log(`Server running on ${PORT}`)
})

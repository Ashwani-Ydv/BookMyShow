const mongoose = require('mongoose')

require('dotenv').config()
mongoose.connect(process.env.mongo_url)
console.log("db connected")
const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Connection Succesful')
})
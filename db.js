//Databse coonnetion file
const mongoose = require('mongoose');

//mongodb url
const mongoURL = 'mongodb://127.0.0.1:27017/Voting';

//mongodb connection setup
mongoose.connect(mongoURL,{
     useNewUrlParser:true,
    //useNewUrlParser: true,
    useUnifiedTopology: true,

})

//set default connection
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connectd to mongodb server')
})

db.on('disconnectd',()=>{
    console.error('disconnectd to mongodb server')
})

db.on('error',(err)=>{
    console.log('Mongodb connection error: ',err)
})

module.exports = db;   //db represent mongodb connection



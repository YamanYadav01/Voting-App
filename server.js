const express = require('express');
const app = express();
const db = require('./db')

const User = require('./model/user')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT||3000;



app.get('/',(req,res)=>{
    res.send('Welcome to Triggerpoint')
})



//Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

//use the router
app.use('/user', userRoutes);
app.use('/candidate',candidateRoutes);

app.listen(PORT, ()=>{
    console.log('listening on port 3000')
})
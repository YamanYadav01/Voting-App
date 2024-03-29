const jwt = require('jsonwebtoken');
require('dotenv').config();
JWT_SECRET = 12345;


//verification

const jwtAuthMiddleware = (req,res,next)=>{

     const authorization = req.headers.authorization
     if(!authorization) return res.status(401).json({error: 'Token not found'})


        ////extract the jwt tocken in header
        const token = req.headers.authorization.split(' ')[1];
        if(!token)return res.status(401).json({error:'Unauthorized'});

        try{
            //verify
           const decoded=  jwt.verify(token, process.env.JWT_SECRET);

           //Attech user information request object
           req.user = decoded;
           next();
        }
        catch(err){
            console.log(err);
            res.status(401).json({error: 'Invalid token'});
        }

}


//token generate
const generateToken  = (userData)=>{
    //generate a new jwt token using user data
    return jwt.sign(userData, process.env.JWT_SECRET);

}



module.exports = {jwtAuthMiddleware,generateToken}; 

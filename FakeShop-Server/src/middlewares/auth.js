const jwt=require("jsonwebtoken");
const User = require("../models/User");


const userAuth=async(req,res,next)=>{
    try{

        // Get the token from cookies
        const {token}=req.cookies;

        // if token not found login again
        if(!token){
            throw new Error("Token not found");
        }

        // when we use jwt.verfiy the token sent by client and it will give id of user in response whose jwt token is
        const decodedMessage=await jwt.verify(token,"Hello123");

        // Then we can take out id from that jwt verfiy and find the user in database in it with that id
        const{_id}=decodedMessage;

        const user= await User.findById(_id);

        // If user not found throw error, else attach the user to req body.
        if(!user){
            throw new Error("User not found");
        }

        req.user=user;

        // pass to the next middleware
        next();

        // validate the token

    }
    catch(err){
        res.status(400).send("Authorization failed "+err.message);
    }
}

module.exports=userAuth;
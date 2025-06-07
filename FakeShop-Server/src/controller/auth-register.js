const bcrypt=require("bcrypt");
const { validateSignUpData } = require("../utils/validate");
const User = require("../models/User");


const authRegister=async(req,res)=>{
    try{

        // Validation of data
        validateSignUpData(req);

        const {name,email,password,mobile}=req.body;

        // Encrypt the password
        const passwordHash=await bcrypt.hash(password,10);

        //Creating new instance of user
        const user=new User({
            name,
            email,
            password:passwordHash,
            mobile
        });

        // Saving the user
        await user.save();

        // This method will create token
        const token =await user.getJWT();

        // Now add the token to cookei and send response back to the server
        res.cookie("token",token,{expires:new Date(Date.now()+9000000000)});

        // Sending response back
        res.send(user);

    }
    catch(err){
        res.status(400).json(
            "Error saving the user  "+ err.message
        );
    }
}

module.exports=authRegister;
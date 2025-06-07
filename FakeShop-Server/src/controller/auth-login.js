const User = require("../models/User");

const authLogin=async(req,res)=>{
    try{

        // Extract email and password from req
        const{email,password}=req.body;

        // Extract and find user from DB
        const user=await User.findOne({
            email:email
        })


        // chec if user is found 
        if(!user){
            throw new Error("User not found");
        }

        // check if password is same 
        const isPasswordValid=await user.validatePassword(password);


        if(!isPasswordValid){
            throw new Error ("Password is not valid");
        }

        // This method will create token
        const token =await user.getJWT();

        // Now add the token to cookei and send response back to the server
        res.cookie("token",token,{expires:new Date(Date.now()+9000000000)});

        res.send(user);

    }
    catch(err){
        res.status(400).json("login failed " + err.message);
    }
};

module.exports=authLogin;

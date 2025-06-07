const bcrypt=require("bcrypt");
const { validatePassword } = require("../utils/validate");

const profilePassword=async(req,res)=>{
    try{

        // Find out the entered password
        const {password}=req.body;

        if(!password){
            throw new Error("Password is required");
        }

        // Validate password if strong or not
        if(!validatePassword(req)){
            throw new Error("Password is not validated");
        }
        
        //Get the logged in user 
        const loggedInUser=req.user;

        
        // bcrypt the password into hash using salt of 10
       const passwordHash=await bcrypt.hash(password,10);

    //    save into loggedin user and update that user in mongodb
       loggedInUser.password=passwordHash;

       await loggedInUser.save();
       res.send("Password updated successfully");
    }
    catch(err){
        res.status(400).send("Password update failed");
    }
};

module.exports=profilePassword;
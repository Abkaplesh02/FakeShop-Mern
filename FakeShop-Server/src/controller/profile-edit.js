const { validateProfileData } = require("../utils/validate");

const profileEdit=async(req,res)=>{
try{
    // first validate if data up for update is correct
    if(!validateProfileData(req)){
        throw new Error("Invalid edit request");
    }

    const loggedInUser=req.user;
    // logged in user comming from middleware

    Object.keys(req.body).forEach((key)=>(loggedInUser[key]=req.body[key]));

    await loggedInUser.save();

    res.json({
        message:`${loggedInUser.name}, profile updated successfully!!!`,
        data:loggedInUser
    });
}
catch(err){
    res.status(400).send("Not data updated"+ err.message);
}
};

module.exports=profileEdit;
const profileView=async(req,res)=>{
    try{
        const userr=req.user;
        res.send(userr);
    }
    catch(err){
        res.status(400).send("user not found " +  err.message);
    }
};

module.exports=profileView;
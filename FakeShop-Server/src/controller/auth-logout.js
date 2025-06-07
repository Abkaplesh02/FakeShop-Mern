const authLogout=async(req,res)=>{
    res.cookie("token",null,{expires:new Date(Date.now())});
    res.send();
};

module.exports=authLogout;
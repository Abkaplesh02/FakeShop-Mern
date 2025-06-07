const WishListSchema = require("../models/wishList");

const wishList=async(req,res)=>{
   try{
        const userId=req.user._id;

        // find the wishList
        const wishList=await WishListSchema.findById(userId);

        // if Wishlist is not there which is only possible if user has not registered  
        if(!wishList){
            throw new Error("wishList  not found");
        }

        res.send(wishList.items);
    }
    catch(err){
        res.status(400).json("Not found wishlist");
    }
};

module.exports=wishList;
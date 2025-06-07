const WishListSchema = require("../models/wishList");

const wishListAdd=async(req,res)=>{
    try{
        const userId=req.user._id;

        const{productId,category,price,title,image,rating,ratingC,quantity}=req.body;

        let wishlist=await WishListSchema.findById(userId);

        if(!wishlist){
            wishlist=new WishListSchema({
                _id:userId,
                items:[{productId,category,price,title,image,rating,ratingC,quantity:1}]
            })
        }
        else{
           const itemIndex=wishlist.items.findIndex(item=>item.productId===productId);
           
           if(itemIndex==-1){
            wishlist.items.push({productId,category,price,title,image,rating,ratingC,quantity:1});
           }
        }

        await wishlist.save();

        res.send(wishlist);
    }
    catch(err){
        res.status(400).json("not added to wishlist");
    }
};

module.exports=wishListAdd;
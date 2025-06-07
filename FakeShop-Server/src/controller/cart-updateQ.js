const CartSchema = require("../models/cart");

const cartUpdateQ=async(req,res)=>{
    try{
        const userId=req.user._id;
        const productId=req.params.productId;

        const cart=await CartSchema.findById(userId);

        if(!cart){
            throw new Error("Cart not present");
        }

        const itemIndex=cart.items.findIndex(item=>item.productId==productId);
        if(itemIndex>-1){
            cart.items[itemIndex].quantity+=1;
        }
        if(itemIndex==-1){
            throw new Error("Item not found");
        }
        await cart.save();

        res.send("Item quantity updated successfully");

    }
    catch(err){
        res.status(400).send("Item updatation failed");

    }
};

module.exports=cartUpdateQ;
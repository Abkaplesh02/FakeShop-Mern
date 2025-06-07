const CartSchema = require("../models/cart");

const viewCart=async(req,res)=>{
    try{
        const userId=req.user._id;

        // find the cart
        const cart=await CartSchema.findById(userId);

        // if cart is not there which is only possible if user has not registered  
        if(!cart){
            throw new Error("Cart  not found");
        }

        res.send(cart.items);
    }
    catch(err){
        res.status(400).json("Not found cart");
    }
};

module.exports=viewCart;
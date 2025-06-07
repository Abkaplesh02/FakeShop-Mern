const CartSchema = require("../models/cart");

const emptyCart=async(req,res)=>{
try{
     const userId=req.user._id;
    
            const cart=await CartSchema.findById(userId);
    
            if(!cart){
                throw new Error("Cart not present");
            }

            cart.items=[];

            await cart.save();
            res.send(cart);
}
catch(err){
res.status(400).send("Not able to empty cart");
}
}

module.exports=emptyCart;
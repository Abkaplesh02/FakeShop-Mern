const CartSchema = require("../models/cart");

const cartAdd=async(req,res)=>{
    try{
        // getting user id of logged in user
       const userId=req.user._id;

    //    Check if there is cart of that id
       let cart=await CartSchema.findById(userId);

    //    extract product details from req body
       const{productId,category,price,title,image,rating,ratingC,quantity}=req.body;

    //    if cart is not present create new cart and add items to it
       if(!cart){
        cart=new CartSchema({
            _id:userId,
            items:[{productId,category,price,title,image,rating,ratingC,quantity}]
        })
       }
    //    if cart of that is present
    else{
        // check item index if item is present
        const itemIndex=cart.items.findIndex(item=>item.productId===productId);

        // it item is present
        if(itemIndex>-1){
            cart.items[itemIndex].quantity+=quantity;
        }
        // if item is not present in cart items
        else{
            cart.items.push({productId,category,price,title,image,rating,ratingC,quantity});
        }
    }

    // now save that cart
        await cart.save();
        
        res.status(200).json({ message: 'Cart updated successfully', cart });

    }
    catch(err){
        console.error('Error adding to cart:', err.message);
    res.status(500).json({ error: 'Internal server error' });

    }
};

module.exports=cartAdd;
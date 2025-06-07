const express=require("express");
const userAuth = require("../middlewares/auth");
const cartAdd = require("../controller/cart-add");
const viewCart = require("../controller/cart-view");
const cartUpdateQ = require("../controller/cart-updateQ");
const cartUpdateM = require("../controller/cart-updateM");
const deleteCart = require("../controller/deleteCart");
const emptyCart = require("../controller/cart-empty");
const CartRouter=express.Router();

// add items to the cart
CartRouter.post("/user/cart",userAuth,cartAdd);


// view the cart items on cart page
CartRouter.get("/view/cart",userAuth,viewCart);

// Update the quantity adding the quantity
CartRouter.patch("/updateplus/:productId",userAuth,cartUpdateQ);

// Update the quantity subtracting the quantity
CartRouter.patch("/updateminus/:productId",userAuth,cartUpdateM);

// Delete item from cart
CartRouter.delete("/cart/delete/:productId",userAuth,deleteCart);

// Clear all cart in one go
CartRouter.patch("/cart/item",userAuth,emptyCart);

module.exports=CartRouter;
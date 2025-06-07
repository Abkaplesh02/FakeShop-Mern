const express=require("express");
const userAuth = require("../middlewares/auth");
const wishListAdd = require("../controller/wishList-add");
const wishList = require("../controller/wishList-view");
const deletewishList = require("../controller/deletefromwishlist");
const wishListRouter=express.Router();

// add to wishlist
wishListRouter.post("/user/wishlist",userAuth,wishListAdd);

// view wishlist
wishListRouter.get("/view/wishlist",userAuth,wishList);

// delete from wishlist
wishListRouter.delete("/wishList/delete/:productId",userAuth,deletewishList);


module.exports=wishListRouter;
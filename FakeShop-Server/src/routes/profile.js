const express=require("express");
const userAuth = require("../middlewares/auth");
const profileRouter=express.Router();
const profileView = require("../controller/profile-view");
const profileEdit = require("../controller/profile-edit");
const profilePassword = require("../controller/profile-password");

// Get the profile of logged in user
profileRouter.get("/profile/view", userAuth,profileView);

// update the profile of user
profileRouter.patch("/profile/edit", userAuth,profileEdit);

// Update the password
profileRouter.patch("/profile/password",userAuth,profilePassword);

module.exports=profileRouter;
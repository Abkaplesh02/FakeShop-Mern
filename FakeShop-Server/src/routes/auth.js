const express=require("express");
const authRouter=express.Router();
const authRegister = require("../controller/auth-register");
const authLogin = require("../controller/auth-login");
const authLogout = require("../controller/auth-logout");



authRouter.post("/register", authRegister);
authRouter.post("/login",authLogin);
authRouter.post("/logout", authLogout);

module.exports=authRouter;
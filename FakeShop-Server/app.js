const express=require("express");
require("dotenv").config();
const  connectDB = require("./src/config/database");
const cookieParser = require("cookie-parser");
const cors=require("cors");
const authRouter = require("./src/routes/auth");
const profileRouter = require("./src/routes/profile");
const CartRouter = require("./src/routes/cart");
const wishListRouter = require("./src/routes/wishList");
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))


app.use("/", authRouter);
app.use("/",profileRouter);
app.use("/",CartRouter);
app.use("/",wishListRouter);



connectDB().then(()=>{
    console.log("MongoDB connected");
    app.listen(process.env.PORT,()=>{
    console.log("Connected to server ")
});
})
.catch((err)=>{
    console.log("MongoDB not connected :: server not connected ");
})


const express=require("express");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
    },
    cart:{
        type:[String],
        default:[],
    },
    wishList:{
        type:[String],
        default:[],
    }
},{
    timestamps:true,
})

// Method to validate password
userSchema.methods.validatePassword=async function(passwordInputByUser){
const user=this;

const passwordHash=user.password;
const isPasswordValid=bcrypt.compare(passwordInputByUser,passwordHash);

return isPasswordValid;
}

// Method to generate jwt token

userSchema.methods.getJWT=async function(){
    const user=this;

    const token=await jwt.sign({_id:user._id},"Hello123",{expiresIn:'3d'});
    
    return token;
}

const User=mongoose.model("User",userSchema);
module.exports=User;
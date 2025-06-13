const mongoose=require("mongoose");

const wishListItems=new mongoose.Schema({
    productId:{
        type:Number,
    },
    category:{
        type:String,
        default:null,
        enum:{
            values:["men's clothing","jewelery", "electronics", "women's clothing" , "HOME & LIVING" , "Electronics"],
            message:`{VALUE} is not valid category type`
        }
    },
    price:{
        type:Number
    },
    title:{
        type:String,
    },
    image:{
        type:String,
    },
    rating:{
        type:Number,
    },
    ratingC:{
        type:Number,
    },
    quantity:{
        type:Number,
    }
},{timestamps:true});

const wishListSchema=new mongoose.Schema({

     _id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        items:{
            type:[wishListItems],
        }
},{timestamps:true});

const WishListSchema=mongoose.model("WishListSchema",wishListSchema);
module.exports=WishListSchema;
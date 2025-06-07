import ContainerShimmer from "../../Shimmer/ContainerShimmer";
import DeletePic from "../../../assets/delete.png"
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, clearWishList, removeFromWishList } from "../../../redux/wishListSlice";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../../utils/URL_Constants";


const WishProduct=({data,getData})=>{
    const navigate=useNavigate();
    const successNotify=()=>toast("Item added !" , { autoClose: 2000 });
    const failureNotify=()=>toast("Error ! Try again" , { autoClose: 2000 })
    const successD=()=>toast("Deleted !!", { autoClose: 2000 })
    const dispatch=useDispatch();
    const select=useSelector((store)=>store.user.user);


    if(data==null){
        return <ContainerShimmer/>
    }
    const {productId,id,title,category,image,description,price,rating,ratingC}=data;

    const addToCart=async()=>{
        const dataSend={
            productId:productId||id,
            title:title,
            category:category,
            image:image,
            price:price*100,
            rating:rating,
            ratingC:ratingC,
            quantity:1
        };
        try{
            const res=await axios.post(BASE_URL+"user/cart",dataSend,{withCredentials:true});
            getData();
            successNotify();
        }
        catch(error){
            console.error(error);
            failureNotify();
        }
    }

    const handleDelete=async()=>{
        try{
          const res=await axios.delete(BASE_URL+`wishList/delete/${productId}`,{withCredentials:true});
            getData();
            dispatch(removeFromWishList({productId}));
            successD();
           
        }
        catch(error){
            console.error(error);
            failureNotify();
        }
      
    }
    
    return (
        <>
        
        <div className="flex  border-2 border-gray-200 w-11/12 mx-auto gap-20 p-4 shadow-lg hover:shadow-2xl mb-6">
            <div className="w-[230px] flex items-center">
                <img src={image} className="w-full h-[210px]"/>
            </div>

            <div className="w-9/12">
                <div className="font-sans font-bold text-lg text-blue-700 my-2 cursor-pointer" onClick={()=>navigate(`/show-more/${productId}`)}>{title.slice(0,120)}</div>
                <div className="font-sans font-semibold text-sm text-gray-700 my-2">{category}</div>
                <div className="border-b  border-gray-300 pb-4 mb-4 my-6"> <button className="bg-gray-300 rounded-lg p-1 px-3 text-[0.9rem] font-bold ">{rating}⭐️ | {ratingC}</button></div>
                <div className="text-[1rem]  font-bold my-2">₹ {(price*100).toFixed(2)} <span className="line-through text-gray-500"> 12000</span> </div>
                <div className="flex gap-16 items-center my-8"><div className="">   <button className="bg-gray-600 text-lg rounded-lg p-2 px-36 text-white hover:bg-blue-600" onClick={()=>addToCart()}>Add to Cart</button></div>
                <div className="cursor-pointer" onClick={handleDelete} ><img src={DeletePic} className="w-12"/></div></div>
            </div>
            <ToastContainer position="top-right" autoClose={2000}/>
        </div>
        </>
    )
}

export default WishProduct;
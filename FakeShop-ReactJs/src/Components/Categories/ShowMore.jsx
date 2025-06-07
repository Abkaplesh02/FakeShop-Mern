import { useEffect, useState } from "react";
import MyPic2 from "../../assets/wishlist.png"
import SimilarProducts from "./MoreProducts/SimilarProducts";
import Offer from "./Offer";
import ProductDetails from "./ProductDetails";
import { data, useNavigate, useParams } from "react-router-dom";
import DataLoading from "../ErrorContent/DataLoading";
import axios from "axios";
import { singleProduct } from "../../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import ContainerShimmer from "../Shimmer/ContainerShimmer";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../redux/wishListSlice";
import { addToCart, updateCart } from "../../redux/cartSlice";
import { BASE_URL } from "../../utils/URL_Constants";

const ShowMore=()=>{

    const [productData,setProductData]=useState(null);
    const {id}=useParams();
    const successNotify=()=>toast("Success! Item added ", { autoClose: 2000 })
    const FailureNotify=()=>toast.error("Failed! try again", { autoClose: 2000 })
    const dispatch=useDispatch();
    const select=useSelector((store)=>store.user.user);
    const navigate=useNavigate();

    useEffect(()=>{
     fetchData();   
    },[id])

    if(id=="" ){
        return <DataLoading/>
    }

    const fetchData=()=>{
        axios
    .get(`${singleProduct}${id}`)
    .then((response)=>{
        setProductData(response.data);
    })
    }


    useEffect(()=>{
        if(productData){
            window.scrollTo(0,0);
        }
    },[productData])

    if(productData==null){
        return <ContainerShimmer/>
    }


    const {category,title,image,price,rating,description}=productData;


    const dataList={
        productId:productData.id,
        category:category,
        price:price*100,
        title:title,
        image:image,
        rating:rating.rate,
        ratingC:rating.count,
        quantity:1,
        
    }

    const handleCart=async()=>{

       if(select){
        try{
            const res=await axios.post(BASE_URL+"user/cart",dataList,{withCredentials:true});
            successNotify();
        }
        catch(error){
            console.error(error);
            FailureNotify();
        }
    }
    else{
        toast("Please add your account first!!!" , {autoClose:1300});
        setTimeout(()=>{
            navigate("/register")
        },1400);
    }
    }

    const handleWishList=async()=>{
        if(select){
      
        try{
           const res=await axios.post(BASE_URL+"user/wishlist",dataList,{withCredentials:true});
            successNotify();
        }
        catch(error){
            console.error(error);
            FailureNotify();
        }   
    }
    else{
        toast("Please add your account first!!!" , {autoClose:1300});
        setTimeout(()=>{
            navigate("/register")
        },1400);
    }
    }
    
    return(
        <div className="grid grid-cols-2 gap-[160px]  m-4 mt-20">

            <div className="m-20 w-full">
                <div className="flex justify-center">
                <img src={image} className="w-[28vw] h-[60vh]"/>
                </div>
                <Offer/>
                <SimilarProducts  categories={category}/>
            </div>
            <div className="my-20">
                <h1 className="mb-2 font-sans text-[1.4rem] font-bold">{title}</h1>
                <h1 className="text-[1.1rem] mb-4 font-sans text-gray-500">{category}</h1>
                <div className="border-b  border-gray-300 pb-4 mb-4"> <button className="bg-gray-300 rounded-lg p-1 px-3 text-[0.9rem] font-bold ">{rating.rate}⭐️ | {rating.count}</button></div>
                <h1 className="font-bold mb-4 text-[1.2rem]">₹{(price*100).toFixed(2)} <span className="text-gray-500"> MRP</span> <span className="line-through font-light text-gray-500">16990</span></h1>
                <h1 className="text-green-600 text-[1rem] font-bold mb-8">inclusive of all taxes</h1>
                <div className="flex pb-8 border-b-2 border-gray-200  ">
                    <button className="bg-blue-600 text-white p-2 px-20 mr-5 rounded-lg " onClick={handleCart}>ADD TO CART</button>
                <button className="flex items-center justify-evenly bg-white text-gray-500 border-2 mr-0 rounded-lg border-gray-400  p-2 px-20" onClick={handleWishList} ><img className="w-5 mr-2" src={MyPic2}/>WISHLIST</button>
                </div>
                <ProductDetails data={productData}/>
                
                
            </div>
            
        <ToastContainer position="top-right"/>
        </div>
    )
}

export default ShowMore;
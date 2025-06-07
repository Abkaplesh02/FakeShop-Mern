import axios from "axios";
import MyCard from "../Cards/MyCard";
import { useEffect, useState } from "react";
import ContainerShimmer from "../Shimmer/ContainerShimmer";


const CardContainer=()=>{

    const [data,setData]=useState(null);
     
    useEffect(()=>{
    axios
    .get("https://fakestoreapi.com/products")
    .then((response)=>{
        setData(response.data)
        
    })
    },[]);

    if(data==null){
        return <ContainerShimmer/>
    }
    else{
    return(
        <div className="mt-20 grid grid-cols-3 ">

            {
                data.map((item,index)=>(<MyCard key={index} data={item}/>))
            }
            
        </div>
    )
}
}
    
export default CardContainer;
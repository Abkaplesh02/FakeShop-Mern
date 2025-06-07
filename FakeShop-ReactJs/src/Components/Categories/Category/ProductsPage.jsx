import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/fetchData";
import Product from "../MoreProducts/Product";
import { useLocation, useParams } from "react-router-dom";
import ContainerShimmer from "../../Shimmer/ContainerShimmer";

const ProductPage=()=>{

    const data=fetchData();
    const {id}=useParams();
    const [userHeading,setUserHeading]=useState("Similar Products");

    useEffect(()=>{
            window.scrollTo(0,0)
            setUserHeading(id)
    },[id])
    
    if(data==null){
        return <ContainerShimmer/>;
    }

    const filteredData=data.filter((item)=>item.category==id);

    return (
        <div className=" mt-24 border-2 border-gray-300 mx-2">
            <div className="flex justify-center text-xl text-gray-600 font-bold font-sans my-16">{userHeading}</div>
            <div className="grid grid-cols-3 ">

                {
                    filteredData.map((item,index)=>(
                        <Product data={item} index={index} key={index}/>
                    ))
                }
            
            
            </div>

            
        </div>
    )
}
export default ProductPage;
import { useLocation} from "react-router-dom";
import { fetchData } from "../../../utils/fetchData";
import Product from "../../Categories/MoreProducts/Product";
import ContainerShimmer from "../../Shimmer/ContainerShimmer";
import { useEffect, useState } from "react";

const HLProducts=()=>{
    const data=fetchData();
    const [header,setHeader]=useState("Products");
    const location=useLocation();
    const category=location.state.category;
    const datts=location.state.data;

    useEffect(()=>{
        setHeader(datts);
    },[datts])
    
    if(data==null){
        return <ContainerShimmer/>
    }

    let filteredData=data.filter((item)=>item.title.includes(category));


    if(filteredData.length===0){
        filteredData=data.filter((item)=>item.category==datts);
    }

    

    
    return (
        
        <div className="mt-40 ">
             <h1 className=" flex justify-center text-[2rem] text-gray-700 font-bold" >{header}</h1>
       <div className="mt-[80px] grid grid-cols-4">
       
        {
            filteredData.map((item,index)=>(<Product data={item} key={index}/>))
        }
       </div>
        </div>
    )
}

export default HLProducts;
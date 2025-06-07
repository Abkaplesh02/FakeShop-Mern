import { fetchData } from "../../../utils/fetchData";
import DataLoading from "../../ErrorContent/DataLoading";
import Product from "./Product";



const SimilarProducts=({categories})=>{

    const data=fetchData();

    if(data==null){
        return <DataLoading/>;
    }

    const filteredData=data.filter((item)=>item.category==categories);

    
    return(
        <div className=" mt-14">
            <div className="flex justify-center text-xl text-gray-600 font-bold font-sans my-16">Similar Products</div>
            <div className="grid grid-cols-2 gap-20">

                {
                    filteredData.map((item,index)=>(
                        <Product  data={item} key={index}/>
                    ))
                }
            
            
            </div>

            
        </div>
    )
}

export default SimilarProducts;
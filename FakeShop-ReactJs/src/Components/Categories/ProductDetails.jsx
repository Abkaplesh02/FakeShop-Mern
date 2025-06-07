import MyPic from "../../assets/wish.png"
import Rating from "./Ratings/Rating";
const ProductDetails=({data})=>{
    const {description,rating}=data

    const Specification=["Running","Mesh","Lace-Ups","Regular","Non-Marking","Removeable","Medium","Medium"];
    const speci=["Sport","Material","Fastening","Ankle Height","Outsole Type","Cleats","Arch Type","Cushioning"]
    return (
        <div className="mt-6 font-sans font-bold text-lg">
            
            <div className="flex">
                <h1 className="mr-4">Product Details</h1>
                <img src={MyPic}  className="w-6"/>
            </div>

            <h1 className="font-normal text-sm mt-5 w-[400px] text-gray-600">{description}</h1>


            <div className="mt-8">
                <h1 className="mr-4">Material care : </h1>
            </div>

            <h1 className="font-normal text-sm mt-5 w-[400px] text-gray-600">Mesh Sole mate :EVA Wipe gently with a dry cloth to remove any dried-on dirt and dust</h1>

            <div className="mt-8">
                <h1 className="mr-4">Specifications : </h1>
            </div>

            <div className="flex flex-wrap w-[600px] justify-evenly border-b-2 border-gray-200 pb-10">

                {
                    speci.map((item,index)=>(
                     
                        <div className="w-[290px] border-b-2 border-gray-200 my-2 py-2" key={index}>
                <p1 className="text-gray-400 text-sm" >{item}</p1>
                <h1 className="text-[1rem] font-normal" >{Specification[index]}</h1>
                </div>
                                    
                    ))
                }
            </div>
            <Rating Rdata={data}/>
            
        </div>
    )
}

export default ProductDetails;
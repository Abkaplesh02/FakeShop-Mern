import { useLocation, useNavigate } from "react-router-dom";
import { Debitcard } from "../../utils/constants";

const ShippingDetails=()=>{
    const location=useLocation();
    const {total,totalQ,data}=location.state;
    const navigate=useNavigate();
    const handleSumbit=(e)=>{
        e.preventDefault();
        navigate(`/checkout/payU`,{state: {total,totalQ,data}});
        

    }
 
    return (
        <div className="mt-[150px]">
                    <div className="w-4/12 mx-auto bg-blue-600 py-4 text-[1.5rem] font-bold text-white flex justify-center mb-12 border-2 border-blue-500">
                     Shipping Details
                   </div>
                <form className="w-4/12 mx-auto " onSubmit={handleSumbit}>
                    
        
                    <div className="flex my-12 items-center">
                        <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">House Number</span><input type="text" minLength={4} className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="House Number"/>
                    </div>
        
                    <div className="flex my-12 items-center ">
                        <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Area/Region</span><input type="text" minLength={4} className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Area/region"/>
                    </div>
        
                    <div className="flex my-12 items-center ">
                        <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">State</span><input type="text" minLength={4} className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="State"/>
                    </div>
                    <div className="flex my-12 items-center ">
                        <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">City</span><input type="text" minLength={4} className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="City"/>
                    </div>

                    <div className="flex my-12 items-center ">
                        <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Pin Code</span><input type="tel" maxLength={6} minLength={4} className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Pin Code"/>
                    </div>
        
                    <button className="py-3 px-6 font-bold rounded-xl mx-auto bg-blue-400 hover:bg-blue-600 text-white text-lg flex justify-center">Next</button>
                </form>
                </div>
    )
}

export default ShippingDetails;
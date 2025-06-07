import { useLocation, useNavigate } from "react-router-dom";
import PaymentInfo from "./PaymentInfo";
import ShippingDetails from "./ShippingDetails";
import { useRef, useState } from "react";



const Checkout=()=>{
    const navigate=useNavigate();
    const [selected,setSelected]=useState();
    const location=useLocation();
    const {total,totalQ,data}=location.state;
    const CheckMethod=()=>{
       if(selected=="COD"){
        navigate("/checkout/payUD")
       }
       if(selected=="CARD"){
        navigate(`/checkout/payUC`,{state :{ total,totalQ,data}});
       }
       if(selected=="NET"){
        navigate(`/checkout/payUN`,{state:{total,totalQ,data}})
       }
    }
    
    const handleRadioChange=(e)=>{
        setSelected(e.target.value)
    }
    
    return(
        <div className="mt-[200px]">
            <div className="w-4/12 mx-auto bg-blue-600 py-4 text-[1.5rem] font-bold text-white flex justify-center mb-4 border-2 border-blue-500 cursor-pointer">
                     FakeShop Shipping Details
                   </div>
<ul>


                   <div className="w-4/12 mx-auto text-[1rem] font-bold text-black  mb-4 ">
                   <li className="text-xl text-gray-600 my-5 font-sans font-bold" > <input className="mr-5" type="radio" name="paymentMethod" onChange={handleRadioChange} checked={selected === "COD"} value="COD"/><span>COD</span></li>
                   <li className="text-xl text-gray-600 my-5 font-sans font-bold" > <input className="mr-5" type="radio" name="paymentMethod" onChange={handleRadioChange} checked={selected === "NET"} value="NET"/><span>NET BANKING</span></li>
                   <li className="text-xl text-gray-600 my-5 font-sans font-bold" > <input className="mr-5" type="radio" name="paymentMethod" onChange={handleRadioChange} checked={selected === "CARD"} value="CARD"/><span>DEBIT/CREDIT CARD</span></li>
                   </div>

                   <button className="py-3 px-6 font-bold rounded-xl mx-auto bg-blue-400 hover:bg-blue-600 text-white text-lg flex justify-center" onClick={()=>CheckMethod()}>Proceed</button>
                   </ul>
                   
        </div>
    )
}

export default Checkout;
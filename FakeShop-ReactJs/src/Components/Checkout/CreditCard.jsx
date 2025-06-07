import { useLocation, useNavigate } from "react-router-dom";
import { Debitcard } from "../../utils/constants";
import { toast, ToastContainer } from "react-toastify";
import { useRef, useState } from "react";
import { validateDebitCard } from "../../utils/validateDebitCart";
import "./toastfile.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { BASE_URL } from "../../utils/URL_Constants";

const CreditCard=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const card=useRef();
    const cvv=useRef();
    const location=useLocation();
    const {total,totalQ,data}=location.state;
    const selector=useSelector((store)=>store.user.user);
    

    const [state,setState]=useState(false);
    const success=()=>toast("Payment Success, Order Placed 🎉",{ autoClose: 2000 });
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const message=validateDebitCard({CardDetails: card.current.value,cvv:cvv.current.value});
        
        if(message){
            if (message.includes("Debit card")) {
                card.current.setCustomValidity(message);
                card.current.reportValidity();
            } else if (message.includes("CVV")) {
                cvv.current.setCustomValidity(message);
                cvv.current.reportValidity();
            }
            return;
        }
        else{
            card.current.setCustomValidity("");
            success();
            try{
                 await axios.patch(BASE_URL+"cart/item",null,{withCredentials:true});
            setTimeout(()=>{
            navigate("/")
        },2000)
            }
            catch(error){

            }
            
        }
    }

    const handleCardChange=()=>{
        card.current.setCustomValidity("");
    }

    const handleCVVChange=()=>{
        cvv.current.setCustomValidity("");
    }
    return(
        <div className="mt-[160px]">
            <div className="w-4/12 mx-auto bg-blue-600 py-4 text-[1.5rem] font-bold text-white flex justify-center mb-12 border-2 border-blue-500">
             FakeShop PaymentU Reciept
           </div>

           <div className="flex  border-2 border-gray-200 w-4/12 mx-auto gap-20 p-4 shadow-lg hover:shadow-2xl my-12 items-center ">
        
        <span className="text-2xl text-gray-700 font-bold">  Subtotal ({totalQ} items ) : </span> <span className="text-2xl text-blue-700 font-bold">  ₹ {total.toFixed(0)}</span>
     </div>
          
        <form className="w-4/12 mx-auto " onSubmit={handleSubmit}>
            <div className="flex my-12 items-center">
                <div className=" text-gray-600 text-lg font-bold font-sans w-[150px]">Card Type</div><div className="flex items-center gap-10"><input onChange={()=>setState(!state)} type="radio" required /><img className="w-40" src={Debitcard} /></div>
            </div>

            <div className="flex my-12 items-center">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Card Number</span><input type="number" onChange={handleCardChange} ref={card} className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Card Number"/>
            </div>

            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Name on Card</span><input type="text" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Full Name"/>
            </div>

            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">CVV Number</span><input onChange={handleCVVChange} ref={cvv} type="number" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="CVV "/>
            </div>
            <div className="flex my-12 items-center ">
                <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Expiry Date</span><input type="date" className="border-[2px] p-4 pl-4 w-full border-gray-300" required />
            </div>

            <button className={`py-3 px-6 font-bold rounded-xl mx-auto bg-blue-400 ${state? `hover:bg-blue-600` : ``}  text-white text-lg flex justify-center `} disabled={!state}>Pay Now</button>
        </form>
        <ToastContainer position="top-center" 
                toastClassName="toast-custom"
                bodyClassName="toast-body-custom"
                closeButtonClassName="toast-close-custom"/>
        </div>
    )
}

export default CreditCard;
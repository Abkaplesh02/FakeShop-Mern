import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import axios from "axios";
import { BASE_URL } from "../../utils/URL_Constants";

const NetBanking=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const location=useLocation();
    const select=useSelector((store)=>store.user.user);
    const success=()=>toast.success("Payment Success, Order Placed",{ autoClose: 2000 });
    const handlePay=async(e)=>{
        e.preventDefault();
        try{ 
             await axios.patch(BASE_URL+"cart/item",null,{withCredentials:true});
            success();
            setTimeout(()=>{
                navigate("/");
            },2200)
    }
        catch(error){
            console.error(error)
        }
    }
    return (
        <div className="mt-[160px]" >
                    <div className="w-4/12 mx-auto bg-blue-600 py-4 text-[1.5rem] font-bold text-white flex justify-center mb-12 border-2 border-blue-500">
                     FakeShop PaymentU
                   </div>
                <form className="w-4/12 mx-auto " onSubmit={(e)=>handlePay(e)}>
                   
                    <div className="flex my-12 items-center">
                        <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">User Name</span><input type="text" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="User name"/>
                    </div>
        
                    <div className="flex my-12 items-center ">
                        <span className="w-4/12 text-gray-600 text-lg font-bold font-sans">Password</span><input type="password" className="border-[2px] p-4 pl-4 w-full border-gray-300" required placeholder="Password"/>
                    </div>
        
        
                    <button className="py-3 px-6 font-bold rounded-xl mx-auto bg-blue-400 hover:bg-blue-600 text-white text-lg flex justify-center">Pay Now</button>
                </form>
                <ToastContainer position="top-right"/>
                </div>
    )
}

export default NetBanking;
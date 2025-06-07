import COD from "./COD";
import CreditCard from "./CreditCard";
import NetBanking from "./NetBanking";


const PaymentInfo=()=>{
    
    return (
        <div className=" mx-auto ">
           
<CreditCard/>
<NetBanking/>
<COD/>

        </div>
    )
}

export default PaymentInfo;
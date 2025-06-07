import { Link, useNavigate } from "react-router-dom";
import MyPic1 from "../../assets/Googleplay.png"
import MyPic2 from "../../assets/SecondFooter.png"
const FooterComponent = () => {
    const ONLINE=["Men","Women","Kids","Home & Living","Beauty","Gift Cards","Myntra Insider"];
    const USEFUL=["Blog","Careers","Site Map", "Corporate Information","Whitehat", "Cleartrip"];
    const CUSTOMER=["Contact Us", "FAQ", "T&C" ,"Terms Of Use","Track Orders","Shipping","Cancellation","Returns","Privacy policy","Grievance Redressal"];
    const navigate=useNavigate();

    const scrollTopGoogle= ()=>{
        navigate("/");
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <div className="w-full flex justify-evenly bg-[#fafbfc] mb-8">

            <div>
                <ul className="">
                    <li><h1 className="text-[] text-sm my-6 font-bold cursor-pointer">ONLINE SHOPPING</h1></li>
                    {
                        ONLINE.map((item,index)=>( 
                            <li className="text-gray-500 text-sm my-2 cursor-pointer" key={index}>{item}</li>
                        ))
                    }
                </ul>


                <ul>
                <li><h1 className="text-[] text-sm my-6 font-bold  cursor-pointer"  >USEFUL LINKS</h1></li>
                {
                        USEFUL.map((item,index)=>( 
                            <li className="text-gray-500 text-sm my-2 cursor-pointer" key={index}>{item}</li>
                        ))
                    }
               
                </ul>
            </div>

            <div>

            <ul>
                <li><h1 className="text-[] text-sm my-6 font-bold cursor-pointer">CUSTOMER POLICIES</h1></li>
                {
                        CUSTOMER.map((item,index)=>( 
                            <li className="text-gray-500 text-sm my-2 cursor-pointer" key={index}>{item}</li>
                        ))
                    }
               
                </ul>
            </div>


            <div>
               <img src={MyPic1} onClick={()=>scrollTopGoogle()}  className="cursor-pointer" alt="" />
            </div>

            <div>
                <img src={MyPic2} className="cursor-pointer" alt="" />
            </div>

        </div>
    )
}

export default FooterComponent;
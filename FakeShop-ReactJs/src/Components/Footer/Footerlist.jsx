import MyFooter from "../../assets/Footer.png"
import FooterComponent from "./FooterComponent";
const Footerlist=()=>{
    return(
        <> 
        <div className="w-full my-10">
            <img src={MyFooter} className="w-[70%] mx-auto cursor-pointer"  />
        </div>
        <FooterComponent/>
        </>
    )
}

export default Footerlist;
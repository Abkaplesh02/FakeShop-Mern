import { useEffect, useState } from "react"
import MyPic1 from "../../assets/Fas.jpg"
import MyPic2 from "../../assets/pcs.jpg"
import MyPic3 from "../../assets/kid.jpg"
import Left from "../../assets/left.png"
import Right from "../../assets/right.png"


const items=[MyPic1,MyPic2,MyPic3];
const MyCarousel=()=>{


    const [current,setCurrent]=useState(0);
    
    const handleBack=()=>{

        if(current==0){
            setCurrent(items.length-1);
        }
        else{
            setCurrent(current-1);
        }
    }

    const handleForw=()=>{
        
        if(current==items.length-1){
            setCurrent(0)
        }else{
            setCurrent(current+1);
        }
        console.log(current)
    }

    
    useEffect(()=>{

        const interval=setTimeout(()=>{
            setCurrent(current=>current+1);
            if(current==items.length-1){
                setCurrent(0)
            }
        },10000)


        return()=>{
            clearTimeout(interval);
        }
    })
    return(
        <div className="relative top-[110px] w-full flex justify-center items-center">
          <img src={items[current]}  className=" relative w-full " />
           <button onClick={handleBack} className="absolute left-4 top-1/2 transform -translate-y-1/2"><img src={Left} className=" w-12"/></button>
           <button onClick={handleForw} className="absolute right-4 top-1/2 transform -translate-y-1/2"><img src={Right}  className="w-12"/></button>
        </div>
    )
}

export default MyCarousel;
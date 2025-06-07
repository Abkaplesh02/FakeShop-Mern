
import Mypic from "../../../assets/person.png"
const Comment=({data,item})=>{
    const {username,rating,date,review}=data;
    return(
<div className="flex border-2 border-gray-200 py-1 mb-6 rounded-2xl">

    <div className="w-2/12 flex justify-center items-center">
        <img src={Mypic} className="w-14"/>
    </div>

    <div className="w-9/12 pt-2">
        <div className="flex justify-between "> 
        <p className="text-[1rem] my-2">{username}</p>
        <button className={` ${rating>=4 ? 'bg-green-500' : 'bg-orange-600 text-white'} rounded-lg  text-[0.8rem] px-2 py-0 font-bold  text-white1`}>{rating}⭐️ |  80</button>
        </div>
        <p className="text-sm font-normal mb-2" >{review}</p>
        <div className="w-full flex justify-end mt-4"><p className="text-sm text-gray-600 font-bold">{date}</p></div>
    </div>
</div>
    )
}

export default Comment;
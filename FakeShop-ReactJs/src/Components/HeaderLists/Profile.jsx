import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/userSlice";

const Profile=({setProfileState})=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const selectUser=useSelector((store)=>store.user.user);
    const handleSignOut=()=>{
        dispatch(removeUser());
        navigate("/");
    }
    

    return (
       <div onMouseEnter={()=>setProfileState(true)} onMouseLeave={()=>setProfileState(false)} className="bg-white w-1/12 absolute top-[90px] right-[150px] z-50 px-4">
        <ul className="text-sm text-gray-600 font-bold">
            {selectUser &&<li className="my-1 hover:text-blue-700 hover:scale-110 cursor-pointer" onClick={()=>navigate("/register")}>{!selectUser && "Profile"}</li>}
            <li className="my-1 hover:text-blue-700 hover:scale-110 cursor-pointer" onClick={()=>handleSignOut()} >{selectUser && "Sign Out"}</li>
            {selectUser &&<li className="my-1 hover:text-blue-700 hover:scale-110 cursor-pointer">Order History</li>}
        </ul>
       </div>
    )
}

export default Profile;
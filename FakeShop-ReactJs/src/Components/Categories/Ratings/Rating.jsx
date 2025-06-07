import MyPic from "../../../assets/Rating.png"
import mockData from "../../../utils/UserReviewMockData"
import Comment from "./Comments";
const Rating=({Rdata})=>{
const {rating}=Rdata;
    

    return(
        <div className="mt-4">
            <h1 className="my-10">Ratings <span>💫</span></h1>

            <div>

                <div className="flex">
                    <h1 className="text-xl border-r-2 border-gray-200 mr-16 pr-16 flex items-center">{rating.rate} <span className="px-5">🌟</span></h1>
                    <div>
                        <img src={MyPic}/>
                    </div>
                </div>

                <h1 className="my-8 text-gray-800 text-[1rem]">Customer Review({rating.count})</h1>
                {
                    mockData.map((item,index)=>(
                        <Comment key={index} data={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Rating;
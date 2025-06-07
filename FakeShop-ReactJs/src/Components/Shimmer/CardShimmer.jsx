const CardShimmer=()=>{
    return (
        <div className=" relative border-transparent shadow-xl hover:shadow-2xl border-2 border-gray-200 rounded-2xl flex justify-evenly w-[520px] p-1 py-2  m-10 cursor-pointer ">

            <div className="bg-gray-300 h-[170px] w-[150px]">

            <img className="rounded-xl h-[170px] w-[150px]" />
            </div>


            <div className="w-[50%] flex flex-col relative ">
                <div className="mx-auto mb-1 font-bold text-gray-300 text-sm h-5 bg-gray-300 w-20"></div>
                <div className="overflow-hidden my-1  text-gray-300 text-[1rem] bg-gray-300 h-5 w-60" ></div>
                <div className="my-1 text-blue-700 text-bold text-xl bg-gray-300 h-5 w-60"></div>
                <div className="my-1 text-blue-700 text-bold text-xl bg-gray-300 h-5 w-60"></div>
                <div className="absolute top-[140px] flex justify-evenly w-full ">
                    <button className="rounded-lg  p-1 text-white h-6 w-20 bg-gray-300"></button>
                    <button className="rounded-lg p-1 text-white h-6 w-20 bg-gray-300"></button>
                </div>
            </div>
            
        </div>
    )
}

export default CardShimmer;
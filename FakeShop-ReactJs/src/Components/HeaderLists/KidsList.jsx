const KidsList=({setKidsState})=>{

    const BoysClothing=["T-Shirts","Shirts","Shorts","Jeans","Trousers","Clothing","Dresses & Skirts","Tops & T-Shirts","Clothing","Shorts & Capris"];
    const GirlsClothing=["Dresses & Skirts","Tops & T-Shirts","Clothing","Shorts & Capris","Jeans & Trousers","Clothing","Dresses & Skirts","Tops & T-Shirts","Clothing","Shorts & Capris" ];
    const Footwear=["Sports Shoes","Casual Shoes","Sandals","Flip Flops","School Shoes","Footwear"];
    const Toys=["Soft Toys","Dolls","Remote"];
    const Infants=["Clothing","Footwear","Toys","Baby Care","Infants"];
    const KidsAccessories=["Watches","Bags","Sunglasses","Belts & Wallets","Caps & Hats","Jewellery"];
    const Brands=["UCB","US Polo Assn","Tommy Hilfiger","Pantaloons"];


    return(
        <div onMouseEnter={()=>setKidsState(true)} onMouseLeave={()=>setKidsState(false)} className="w-6/12 flex justify-between absolute top-[70px] left-[170px] bg-white p-8 shadow-2xl ">
            

        <div>
            <ul className=" my-4 pb-4 w-[135px]">
                <li><h1 className="text-orange-600  text-[0.9rem]">Boys Clothing</h1></li>
                {
                    BoysClothing.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer hover:text-orange-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>
        </div>


        <div>

        <ul className="my-4 pb-4 w-[115px]">
                <li><h1 className="text-orange-600 text-[0.9rem]">Girls Clothing</h1></li>
                {
                    GirlsClothing.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-orange-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>
        </div>


        <div>
        <ul className="border-b-2 border-gray-300 my-4 pb-4">
                <li><h1 className="text-orange-600 text-[0.9rem]">Footwear</h1></li>
                {
                    Footwear.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-orange-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>


            <ul className=" my-4 pb-4">
                <li><h1 className="text-orange-600 text-[0.9rem]">Toys & Games</h1></li>
                {
                    Toys.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-orange-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>

            
        </div>


        <div>

        <ul className="border-b-2 border-gray-300 my-4 pb-4">
                <li><h1 className="text-orange-600 text-[0.9rem]">Infants</h1></li>
                {
                    Infants.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-orange-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>

            <ul>
                <li><h1 className="text-orange-600 text-[0.9rem] my-2">Home & Bath </h1></li>
                <li><h1 className="text-orange-600 text-[0.9rem] my-2">Personal Care</h1></li>
               
            </ul>



        </div>

        <div>

        <ul className="border-b-2 border-gray-300 my-4 pb-4 ">
                <li><h1 className="text-orange-600 text-[0.9rem]">Kids Accessories</h1></li>
                {
                KidsAccessories.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-orange-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>

            <ul className=" my-4 pb-4 ">
                <li><h1 className="text-orange-600 text-[0.9rem]">Brands</h1></li>
                {
                Brands.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-orange-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>
            




        </div>


    </div>
    )
}

export default KidsList;
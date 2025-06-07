const BeautyList=({setBeautyState})=>{

    const Makeup=["Face","Eyes","Lips","Nails","Makeup Kits","Makeup Accessories","Face","Eyes","Lips","Nails","Makeup Kits","Makeup Accessories"];
    const Skincare=["Face Moisturisers","Face Cleansers","Face Makeup Removers","Face Cleansing Brushes","Face Sheet Masks","Face Eye Creams","Face Lip Balms"];
    const Haircare=["Shampoo","Conditioner","Hair Oil","Hair Serum","Hair Masks","Hair Combs","Hair Loss"];
    const Fragrances=["Perfumes","Perfume Clippers","Perfume Trimmers"];
    const Appliances=["Hair Curlers","Hair Rollers","Hair Clippers","Hair Trimmers"];
    const MenGroom=["Beard Care","Shaving","Body Care","Fragrances"];
    const BeautyGift=["Makeup","Skincare","Haircare"];
    const TopBrands=["Nykaa Pro","Nykaa Cosmetics","M.A.C","Faces Canada","Biotique","The Face Shop","Plum","Kama Ayurveda","Forest Essentials","Nykaa Naturals","Nykaa Beauty","Nykaa Pro"];



    return(


        <div onMouseEnter={()=>setBeautyState(true)} onMouseLeave={()=>setBeautyState(false)} className="w-6/12 flex justify-between absolute top-[70px] left-[170px] bg-white p-8 shadow-2xl ">
            

        <div>
            <ul className=" my-4 pb-4 w-[135px]" >
                <li><h1 className="text-green-800 text-[0.9rem] text-[0.9rem]">Makeup</h1></li>
                {
                    Makeup.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-green-800 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>
        </div>


        <div>

        <ul className="my-4 pb-4 border-b-2 border-gray-300 w-[135px]">
                <li><h1 className="text-green-800  text-[0.9rem]">Skincare, Bath & Body</h1></li>
                {
                    Skincare.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-green-800 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>

            <ul className="my-4 pb-4">
                <li><h1 className="text-green-800  text-[0.9rem]">Baby Care</h1></li>
                <li><h1 className="text-green-800  text-[0.9rem]">Masks</h1></li>
            </ul>
        </div>


        <div>
        <ul className="border-b-2 border-gray-300 my-4 pb-4 w-[135px]">
                <li><h1 className="text-green-800 text-[0.9rem]">Haircare</h1></li>
                {
                    Haircare.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-green-800 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>


            <ul className=" my-4 pb-4">
                <li><h1 className="text-green-800 text-[0.9rem]">Fragrance</h1></li>
                {
                    Fragrances.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-green-800 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>

        </div>


        <div>

        <ul className="border-b-2 border-gray-300 my-4 pb-4 w-[135px]">
                <li><h1 className="text-green-800 text-[0.9rem]">Appliances</h1></li>
                {
                    Appliances.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-green-800 hover:font-semibold' key={index}>{item}</li>))
                }
                
            </ul>

            <ul className="border-b-2 border-gray-300 my-4 pb-4">
                <li><h1 className="text-green-800 text-[0.9rem]">Men's Grooming</h1></li>
                {
                    MenGroom.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-green-800 hover:font-semibold' key={index}>{item}</li>))
                }
               
            </ul>


            <ul>
                <li><h1 className="text-green-800 text-[0.9rem]">Beauty gift & Makeup set</h1></li>
                {
                    BeautyGift.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-green-800 hover:font-semibold' key={index}>{item}</li>))
                }
               
            </ul>




        </div>

        <div>

        <ul className=" my-4 pb-4 w-[135px]">
                <li><h1 className="text-green-800 text-[0.9rem]">Top Brands</h1></li>
                {
                TopBrands.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-green-800 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>

            
            




        </div>


    </div>


    )
}

export default BeautyList;
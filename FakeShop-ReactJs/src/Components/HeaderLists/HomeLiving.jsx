const HomeLiving=({setHomeState})=>{

    const BedLinen=['Bedsheets','Blankets','Comforters','Dohars','Duvets','Mattress Protectors','Pillows','Pillow Covers','Quilts','Bedding Sets','Bedding Accessories'];
    const Flooring=['Carpets','Floor Mats','Door Mats','Rugs'];
    const Bath=['Bath Towels','Hand Towels','Face Towels','Beach Towels','Towel Sets','Towel','Bath Mats','Bath Robes'];
    const Lamps=['Table Lamps','Wall Lamps','Floor Lamps','Study Lamps','Lamp Shades'];
    const HomeDecor=['Wall Decor','Clocks','Wall Shelves','Wall Stickers','Showpieces','Photo Frames','Candles & Fragrances','Vases','Artificial Plants','Artificial Flowers','Home Accents','Decorative Lights','Decorative Mirrors'];
    const Kitchen=['Cookware','Kitchen Tools','Kitchen Storage','Tableware','Barware','Bakeware','Kitchen Linen','Kitchen Organisers','Kitchen Accessories','Kitchen Appliances','Kitchen Essentials'];
    const storage=['Boxes','Baskets','Organisers','Racks & Shelves','Hooks & Holders','Storage Bags','Storage Boxes','Storage Baskets','Storage ','Storage Racks','Storage Hooks','Storage Holders'];

    return(
        <div onMouseEnter={()=>setHomeState(true)} onMouseLeave={()=>setHomeState(false)} className="w-6/12 flex justify-between absolute top-[70px] left-[170px] bg-white p-8 shadow-2xl ">
            

        <div>
            <ul className=" my-4 pb-4 border-b-2 border-gray-300" >
                <li><h1 className="text-yellow-600 text-[0.9rem] text-[0.9rem]">Bed Linen & Furnishing</h1></li>
                {
                    BedLinen.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer hover:text-yellow-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>


            <ul className=" my-4 pb-4">
                <li><h1 className="text-yellow-600 text-[0.9rem] text-[0.9rem]">Flooring</h1></li>
                {
                    Flooring.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-yellow-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>
        </div>


        <div>

        <ul className="my-4 pb-4 border-b-2 border-gray-300">
                <li><h1 className="text-yellow-600 text-[0.9rem] text-[0.9rem]">Bath</h1></li>
                {
                    Bath.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-yellow-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>

            <ul className="my-4 pb-4">
                <li><h1 className="text-yellow-600 text-[0.9rem] text-[0.9rem]">Lamp & lighting</h1></li>
                {
                    Lamps.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-yellow-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>
        </div>


        <div>
        <ul className="border-b-2 border-gray-300 my-4 pb-4">
                <li><h1 className="text-yellow-600 text-[0.9rem]">Home Decor</h1></li>
                {
                    HomeDecor.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-yellow-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>


            <ul className=" my-4 pb-4">
                <li><h1 className="text-yellow-600 text-[0.9rem] my-2">Cushions & Cushion Covers</h1></li>
                <li><h1 className="text-yellow-600 text-[0.9rem] my-2">Curtains</h1></li>
            </ul>

        </div>


        <div>

        <ul className="border-b-2 border-gray-300 my-4 pb-4 w-[135px]">
                <li><h1 className="text-yellow-600 text-[0.9rem] my-2">Furniture</h1></li>
                <li><h1 className="text-yellow-600 text-[0.9rem] my-2">Home Gift Sets</h1></li>
            </ul>

            <ul>
                <li><h1 className="text-yellow-600 text-[0.9rem]">Kitchen & Table</h1></li>
                {
                    Kitchen.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-yellow-600 hover:font-semibold' key={index}>{item}</li>))
                }
               
            </ul>



        </div>

        <div>

        <ul className=" my-4 pb-4 w-[135px] ">
                <li><h1 className="text-yellow-600 text-[0.9rem]">Storage</h1></li>
                {
                storage.map((item,index)=>(<li className='text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-yellow-600 hover:font-semibold' key={index}>{item}</li>))
                }
            </ul>

            
            




        </div>


    </div>
    )
}

export default HomeLiving;
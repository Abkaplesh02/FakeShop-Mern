import { useNavigate } from "react-router-dom";

const MenList = ({ setMenState }) => {
  const navigate=useNavigate();
  const TopWear = [
    "T-Shirts",
    "Casual Shirts",
    "Formal Shirts",
    "Sweatshirts",
    "Jackets",
    "Blazers & Coats",
    "Suits",
    "Rain Jackets"
  ];
  const BottomWear = [
    "Jeans",
    "Casual Trousers",
    "Formal Trousers",
    "Shorts",
    "Track Pants",
    "Track Suits"
  ];
  const IndianFestive = [
    "Kurtas",
    "Nehru Jackets",
    "Sherwanis",
    "Dhotis",
    "Pyjamas"
  ];
  const InnerWear = ["Briefs & Trunks", "Boxers", "Vests", "Thermals"];
  const FootWear = [
    "Casual Shoes",
    "Sports Shoes",
    "Formal Shoes",
    "Sneakers",
    "Sandals & Floaters",
    "Flip Flops",
    "Loafers",
    "Boots"
  ];
  const Accessories = [
    "Watches",
    "Bags & Backpacks",
    "Sunglasses",
    "Belts & Wallets",
    "Caps & Hats",
    "Jewellery",
    "Ties & Pocket Squares",
    "Cufflinks"
  ];
  const Sports = [
    "Sports Shoes",
    "Sports Sandals",
    "Active T-Shirts",
    "Track Pants",
    "Track Suits",
    "Track Jackets",
    "Sports Equipment"
  ];
  const Gadgets = [
    "Smart Wearables",
    "Headphones",
    "Speakers",
    "Mobile Cases",
    "Power Banks",
    "Laptop Bags",
    "Backpacks",
    "Travel Accessories"
  ];

  return (
    <div
      onMouseEnter={() => setMenState(true)}
      onMouseLeave={() => setMenState(false)}
    
      className=" w-7/12 flex justify-between absolute top-[70px] left-[170px] bg-white p-8 shadow-2xl "
    >
      <div>
        <ul className="border-b-2 border-gray-300 my-4 pb-4">
          <li>
            <h1 className="text-blue-900 text-[0.9rem] ">TopWear</h1>
          </li>
          {TopWear.map((item, index) => (
            <li
            onClick={()=>navigate(`/items`,{ state: { category: item, data: "men's clothing" } })}
              className="text-sm my-1 text-gray-500 font-sans cursor-pointer hover:text-blue-900 hover:font-semibold"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>

        <ul>
          <li>
            <h1 className="text-blue-900 text-[0.9rem]">
              Indian & Festive Wear
            </h1>
          </li>
          {IndianFestive.map((item, index) => (
            <li
            onClick={()=>navigate(`/items`,{ state: { category: item, data: "men's clothing" } })}
              className="text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-blue-900 hover:font-semibold"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="border-b-2 border-gray-300 my-4 pb-4">
          <li>
            <h1 className="text-blue-900 text-[0.9rem]">Bottomwear</h1>
          </li>
          {BottomWear.map((item, index) => (
            <li
              onClick={()=>navigate(`/items`,{ state: { category: item, data: "men's clothing" } })}
              className="text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-blue-900 hover:font-semibold"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>

        <ul>
          <li>
            <h1 className="text-blue-900 text-[0.9rem]">
              Innerwear & Sleepwear
            </h1>
          </li>
          {InnerWear.map((item, index) => (
            <li
            onClick={()=>navigate(`/items`,{ state: { category: item, data: "men's clothing" } })}
              className="text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-blue-900 hover:font-semibold"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="border-b-2 border-gray-300 my-4 pb-4">
          <li>
            <h1 className="text-blue-900 text-[0.9rem]">Footwear</h1>
          </li>
          {FootWear.map((item, index) => (
            <li
            onClick={()=>navigate(`/items`,{ state: { category: item, data: "men's clothing" } })}
              className="text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-blue-900 hover:font-semibold"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>

        <ul>
          <li>
            <h1 className="text-blue-900 text-[0.9rem] my-2">
              Personal Care & Grooming
            </h1>
          </li>
          <li>
            <h1 className="text-blue-900 text-[0.9rem] my-2">
              Sunglasses & Frames
            </h1>
          </li>
          <li>
            <h1 className="text-blue-900 text-[0.9rem] my-2">Watches</h1>
          </li>
        </ul>
      </div>

      <div>
        <ul className="border-b-2 border-gray-300 my-4 pb-4">
          <li>
            <h1 className="text-blue-900 text-[0.9rem]">
              Sports & Active Wear
            </h1>
          </li>
          {Sports.map((item, index) => (
            <li
              onClick={()=>navigate(`/items`,{ state: { category: item, data: "men's clothing" } })}
              className="text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-blue-900 hover:font-semibold"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>

        <ul>
          <li>
            <h1 className="text-blue-900 text-[0.9rem]">Gadgets</h1>
          </li>
          {Gadgets.map((item, index) => (
            <li
              onClick={()=>navigate(`/items`,{ state: { category: item, data: "men's clothing" } })}
              className="text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-blue-900 hover:font-semibold"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="border-b-2 border-gray-300 my-4 pb-4 w-[150px]">
          <li>
            <h1 className="text-blue-900 text-[0.9rem]">Fashion Accessories</h1>
          </li>
          {Accessories.map((item, index) => (
            <li
              onClick={()=>navigate(`/items`,{ state: { category: item, data: "men's clothing" } })}
              className="text-sm my-1 text-gray-500 font-sans cursor-pointer  hover:text-blue-900 hover:font-semibold"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul>
          <li className="my-2">
            <h1 className="text-blue-900 text-[0.9rem]">Bags & Backpacks</h1>
          </li>
          <li className="my-2">
            <h1 className="text-blue-900 text-[0.9rem]">Luggage & Trolleys</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenList;

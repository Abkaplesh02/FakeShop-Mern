import { useEffect, useState } from "react";
import cart from "../../../assets/cart.png";
import CartProduct from "./CartProduct";
import axios from "axios";
import ContainerShimmer from "../../Shimmer/ContainerShimmer";
import NoDataFound from "../../Shimmer/NoDataFound";
import Subtotal from "./Subtotal";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../utils/URL_Constants";
import { useSelector } from "react-redux";

const CartC = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    getData();
    if (!user) {
      navigate("/register");
    }
  }, []);

  const getData = async () => {
    const res = await axios.get(BASE_URL + "view/cart", {
      withCredentials: true,
    });
    setData(res.data);
  };
  if (data == null) {
    return <ContainerShimmer />;
  }

  let totalQ = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );

  return (
    <div className="my-40">
      <h1 className="flex gap-5 items-center text-2xl font-bold text-gray-600 justify-center mb-10">
        Cart <img src={cart} className="w-12" />
      </h1>
      {data.map((item, index) => (
        <CartProduct data={item} key={index} getData={getData} />
      ))}

      {totalQ > 0 ? (
        <Subtotal data={data} getData={getData} />
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};
export default CartC;

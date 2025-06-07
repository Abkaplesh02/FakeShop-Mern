import CardContainer from "./Cards/CardContainer";
import Categories from "./MainPageCarousel/Categories";
import Footerlist from "./Footer/Footerlist";
import Header from "./Header/Header";
import MyCarousel from "./MainPageCarousel/MyCarousel";
import ShowMore from "./Categories/ShowMore";
import ProductPage from "./Categories/Category/ProductsPage";
import { Route, BrowserRouter as  Router, Routes, useParams } from "react-router-dom";
import { useEffect } from "react";
import HLProducts from "./Header/HeaderListProducts/HLProducts";
import SearchProducts from "./SearchPage/SearchProducts";
import WishListC from "./Header/WishList/WishListC";
import CartC from "./Header/Cart.jsx/CartC";
import PageNotFound from "./ErrorContent/PageNotFound";
import Checkout from "./Checkout/Checkout";
import ShippingDetails from "./Checkout/ShippingDetails";
import NetBanking from "./Checkout/NetBanking";
import CreditCard from "./Checkout/CreditCard";
import COD from "./Checkout/COD";
import Register from "./Login/Register/Register";
import ScrollToTop from "../utils/ScrollToTop";


const Body=()=>{
    
    return( 
        <Router>
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={
                    <>
                    <MyCarousel/>
                    <Categories/>
                    <CardContainer/>
                    </>       
                }/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/show-more/:id" element={<ShowMore/>}/>
                <Route path="/products/:id" element={<ProductPage/>}/>
                <Route path="/items" element={<HLProducts/>}/>
                <Route path="/search" element={<SearchProducts/>}/>
                <Route path="/wishlist" element={<WishListC/>}/>
                <Route path="/cart" element={<CartC/>}/>
                <Route path="/checkout" element={<ShippingDetails/>}/>
                <Route path="/checkout/payU" element={<Checkout/>}/>
                <Route path="/checkout/payUN" element={<NetBanking/>}/>
                <Route path="/checkout/payUC" element={<CreditCard/>}/>
                <Route path="/checkout/payUD" element={<COD/>}/>
                <Route path="/*" element={<PageNotFound/>}/>
            </Routes>
            <Footerlist/>
            </Router>
      
    )
}

export default Body;
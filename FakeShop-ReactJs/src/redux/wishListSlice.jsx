import { createSlice } from "@reduxjs/toolkit";

const wishListSlice=createSlice({
    name:"wishList",
    initialState:[],
    reducers:{
        addToWishList:(state,action)=>{
            state.push(action.payload);
        },
        removeFromWishList:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload.id);
        },
        clearWishList:(state)=>{
            return [];
        }
    }
})

export const {addToWishList,removeFromWishList,clearWishList}=wishListSlice.actions;
export default wishListSlice.reducer;
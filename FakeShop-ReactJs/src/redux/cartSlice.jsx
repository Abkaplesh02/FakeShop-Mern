import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload);
        },
        updateCart:(state,action)=>{
          const {productId,num}=action.payload;
          const item=state.find((item)=>item.productId===productId);
          if(item){
            item.quantity=num;
          }  
        },
        removeFromCart:(state,action)=>{
            return state.filter((item)=>item.productId!=action.payload.productId);
        },
        clearCart:(state)=>{
            return [];
        }
    }
})

export const {addToCart,removeFromCart,clearCart,updateCart}=cartSlice.actions;
export default cartSlice.reducer;
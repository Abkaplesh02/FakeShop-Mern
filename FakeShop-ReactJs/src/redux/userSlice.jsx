import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        addToUser:(state,action)=>{
            state.user=action.payload;
        },
        removeUser:(state)=>{
             state.user=null;
        },
        updateUserCart:(state,action)=>{
            state.user.cart.push(action.payload);
        },
        updateUserWishlist:(state,action)=>{
            state.user.wishList.push(action.payload);
        },
        removeFromCart:(state,action)=>{

        },
        removeFromWishList:(state,action)=>{
            
        }

    }
})

export const {addToUser,removeUser}=userSlice.actions;
export default userSlice.reducer;
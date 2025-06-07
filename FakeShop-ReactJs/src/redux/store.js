import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import wishListSlice from "./wishListSlice";
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import userSlice from "./userSlice"

const rootReducer=combineReducers({
    cart:cartSlice,
    wishList:wishListSlice,
    user:userSlice
})

const persistConfig={
    key:"root",
    storage,
}

const persistedReducer=persistReducer(persistConfig,rootReducer);


const store=configureStore({
  reducer: persistedReducer,
})

export const persistor=persistStore(store);
export default store;
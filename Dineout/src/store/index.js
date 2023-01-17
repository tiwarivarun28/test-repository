import { configureStore } from "@reduxjs/toolkit";
import RestaurantReducer from "../Redux/Restaurants/restaurantReducer";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    RestaurantReducer: RestaurantReducer,
  },
});

export default store;

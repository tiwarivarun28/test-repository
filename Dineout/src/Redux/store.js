import { combineReducers, createStore } from "redux";
import RestaurantReducer from "./Restaurants/restaurantReducer";


const rootReducer = combineReducers({
    RestaurantReducer: RestaurantReducer
})


export const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__())
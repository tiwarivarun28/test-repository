import { createStore, applyMiddleware,/* combineReducers*/ } from "redux";
// import myReducer from "./reducer";
import logger from "redux-logger";
// import counterReducer from "./counterReducer";
import jsonReducer from "./jsonReducer";

// const combinereducers = combineReducers({
//   todoReducer: myReducer,
//   cReducer: counterReducer,
// });

// const myStore = createStore(combinereducers, applyMiddleware(logger)
// );
// myStore.subscribe(()=>{
//     console.log(myStore.getState())
// })


const myStore=createStore(jsonReducer,applyMiddleware(logger))

export default myStore;

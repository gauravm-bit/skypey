import { createStore } from "redux";
import reducer from "../reducers/contacts";
// import combineReducers from "../reducers/index";
 

const store = createStore(reducer); 
// const store = createStore(combineReducers);
export default store;
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware  from "redux-thunk";
import profileReduser from "./profileReducer";

let rootReduser = combineReducers({ profiles: profileReduser });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReduser, composeEnhancers( applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;

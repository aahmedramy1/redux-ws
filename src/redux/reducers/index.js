import bankReducer from "./bank";
import authenticationReducer from "./authentication";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    bank: bankReducer,
    authentication: authenticationReducer
})

export default rootReducer;
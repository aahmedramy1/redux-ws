import { configureStore} from "@reduxjs/toolkit";
import bankReducer from "../slice/bank";


const store = configureStore({
    reducer: {
        bank: bankReducer,
    }
});

export default store;

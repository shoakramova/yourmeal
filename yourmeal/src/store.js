import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/orderReducer";

const store = configureStore({
    reducer: {
        orders: reducer
    }
})

export default store
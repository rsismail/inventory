import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./reducer";

export default configureStore({
    reducer: {
        inventory: productListReducer,
    }
});
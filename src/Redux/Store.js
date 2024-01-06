import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Counterslice";

const store = configureStore({
    reducer:{
        Counterslice
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import Credentials from "./Credentials"

const store = configureStore({
    reducer:{
        Credentials:Credentials
    }

})

export default store
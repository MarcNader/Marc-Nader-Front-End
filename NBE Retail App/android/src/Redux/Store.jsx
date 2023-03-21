import { configureStore } from "@reduxjs/toolkit";
import Credentials from "./Credentials"
import UserData from "./UserData";
const store = configureStore({
    reducer:{
        Credentials:Credentials,
        UsersData:UserData
    }

})

export default store
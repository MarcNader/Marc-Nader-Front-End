import { createSlice } from "@reduxjs/toolkit";

const initial_state={
    Username:'',
    Password:''
}

const Credentials= createSlice({
    name:'Login',
    initialState:initial_state,
    reducers:{
        username:(state,action)=>{
            state.Username=action.payload;
        },
        password: (state,action)=>{
            state.Password=action.payload;
        }
    }
})

export const Credentialsaction=Credentials.actions;
export default Credentials.reducer;
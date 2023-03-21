import { createSlice } from "@reduxjs/toolkit";


const initial_state={
   Users:[]
}

const Users= createSlice({
    name:'Users Number',
    initialState:initial_state,
    reducers:{
        // increaseCount:(state,action)=>{
        //     state.userNum+=action.payload;
        // },

        setUsers:(state,action)=>{
            state.Users=action.payload;
        },
        
       
    }
})

export const {setUsers}=Users.actions;
export default Users.reducer;
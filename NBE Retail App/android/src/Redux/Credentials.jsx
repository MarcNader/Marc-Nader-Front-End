import {createSlice} from '@reduxjs/toolkit';

const initial_state = {
  Username: '',
  Password: '',
  UserId: '',
};

const Credentials = createSlice({
  name: 'Login',
  initialState: initial_state,
  reducers: {
    setUsername: (state, action) => {
      state.Username = action.payload;
    },
    setPassword: (state, action) => {
      state.Password = action.payload;
    },
    setUserId: (state, action) => {
      state.UserId = action.payload;
    },
  },
});

export const {setUsername, setPassword, setUserId} = Credentials.actions;
export default Credentials.reducer;

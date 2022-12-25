import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  sucess: false,
}

const showLoggedIn = createSlice({
  name: "login",
  initialState,
  reducers : {
    loginTrue: (state) => {
      state.sucess = true;
    },
    logOut : (state) => {
        state.sucess = false
    }
  }
})

export default showLoggedIn.reducer;
export const { loginTrue , logOut } = showLoggedIn.actions;

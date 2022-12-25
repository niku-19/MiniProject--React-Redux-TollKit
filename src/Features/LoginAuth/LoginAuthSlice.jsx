import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggingIn: false,
  users: [],
  hasError: false,
};

export const Auth = createAsyncThunk(" loginAuth/Auth ", async () => {
  const res = await fetch(
    "https://add-project-a1e5c-default-rtdb.firebaseio.com/newUser.json"
  );
  const data = await res.json();
  return data;
});

const loginAuth = createSlice({
  name: "loginAuth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(Auth.pending, (state) => {
        state.loggingIn = false;
      })
      .addCase(Auth.fulfilled, (state, action) => {
        state.loggingIn = false;
        state.users = action.payload;
      })
      .addCase(Auth.rejected, (state) => {
        state.loggingIn = false;
        state.hasError = true;
      });
  },
});

export default loginAuth.reducer;

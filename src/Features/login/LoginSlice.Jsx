import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

const singUpUsers = createAsyncThunk(
  " userSingUp/singUpUsers ",
  async (body) => {
    try {
      const res = await fetch(
        "https://add-project-a1e5c-default-rtdb.firebaseio.com/newUser.json",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const singUp = createSlice({
  name: "userSingUp",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(singUpUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(singUpUsers.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(singUpUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default singUp.reducer;
export { singUpUsers };

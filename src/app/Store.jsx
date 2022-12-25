import { configureStore } from "@reduxjs/toolkit";
import singUp from "../Features/login/LoginSlice";
import loginAuth from "../Features/LoginAuth/LoginAuthSlice";
import cartModel from "../Features/ShowModel/showModel";
import showLoggedIn from "../Features/ShowLogin/LoginTrue";

const store = configureStore({
  reducer: {
    singUpUsers: singUp,
    userLoginAuth: loginAuth,
    cartModel,
    showLoggedIn,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/auth/loginSlice";
import logoutSlice from "./slice/auth/logoutSlice";
import signupSlice from "./slice/auth/signupSlice";
import verifyOTPSlice from "./slice/auth/verifyOTPSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    logout: logoutSlice,
    signup: signupSlice,
    verifyOTP: verifyOTPSlice,
  },
});

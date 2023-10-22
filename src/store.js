import { configureStore } from "@reduxjs/toolkit";
import emailSlice from "./controller/emailSlice";

const store = configureStore({
  reducer: { emailSlice: emailSlice },
});

export default store;

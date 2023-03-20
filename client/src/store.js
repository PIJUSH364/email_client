import { configureStore } from "@reduxjs/toolkit";

// import cakeReducer from "../features/cake/cakeSlice";
// import iceCreanReducer from "../features/iceCream/iceCreamSlice";
// import userReducer from "../features/user/userSlice";
const cakeReducer = 5;
const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;

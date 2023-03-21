import { configureStore } from '@reduxjs/toolkit';
import userSlice from './controller/userDeatils';


const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;

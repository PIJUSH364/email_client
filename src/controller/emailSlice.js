import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: [],
  mailBody: null,
  allMail: [],
  readMail: [],
  unreadMail: [],
};

export const emailSlice = createSlice({
  name: "emailSlice",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action) => {
      state.favorites = [...action.payload];
    },
    setMailContent: (state, action) => {
      state.mailBody = action.payload;
    },
    setAllMail: (state, action) => {
      state.allMail = [...action.payload];
    },
    setReadMailID: (state, action) => {
      state.readMail = [...state.readMail, action.payload];
    },
    setUnReadMailID: (state, action) => {
      state.unreadMail = [...state.unreadMail, action.payload];
    },
  },
});

export const {
  addFavorites,
  removeFavorite,
  setMailContent,
  setAllMail,
  setReadMailID,
  setUnReadMailID,
} = emailSlice.actions;
export default emailSlice.reducer;

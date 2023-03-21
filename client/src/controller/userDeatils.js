import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: [{ empCode: 12345678, password: 12345678 }],
    },
    reducers: {
        addUser: (state, action) => {
            state.userInfo = [action.payload];
        },
    },
});

//? if we destructure the its look like that

export default userSlice.reducer;
export const { addUser } = userSlice.actions;

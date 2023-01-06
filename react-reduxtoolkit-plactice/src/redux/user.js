import { createSlice } from "@reduxjs/toolkit";

// initialState는 따로빼줘서 쓰면 코드가 깔끔하다
const initialStateValue = {name: "", age:0, email:""}

export const userSlice = createSlice({
    // 리듀서 이름
    name: "user",
    initialState: {value: initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue
        }
    },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
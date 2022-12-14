import { createSlice } from "@reduxjs/toolkit";

// 초기값 작성
const initalState = {
    title : "제목이없습니다",
    pay : 5000,
}


const bookSlice = createSlice({
    name : "books",
    initialState : initalState,
    reducers : {
    setTitle : (state, action) => {state.title = action.payload},   
    setPay : (state, action) => {state.pay = action.payload}
    }
})

// 액션함수 만들기

export const {setTitle, setPay} = bookSlice.actions;

// 리듀서 내보내기
export default bookSlice.reducer;

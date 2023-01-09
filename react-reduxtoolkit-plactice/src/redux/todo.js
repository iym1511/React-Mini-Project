import {createSlice} from '@reduxjs/toolkit'

let nextId = 0;
// const name = "todo"; name 값도 이렇게 가능
const initialState = [];

// redux-toolkit 불변의 법칙 name / initialState / reducer 

export const todoSlice = createSlice({
    name : 'todo', // key값 : value값
    initialState,   // initialState 만 이름먹힘
    reducers:{
        add : (state,action) => {
            nextId++;
            state.push({
                id : nextId,
                text : action.payload,
                complete : false,
            })
    },   
    remove : (state, action) =>{ // 클릭한객체의 id와 action.payload(입력한값)의 id 비교
        return state.filter(e => e.id !== action.payload)
    },

    complete : (state, action) =>{                                    // !:이외의 나머지 !e true로 바뀜
        return state.map(e => e.id === action.payload ? {...e, complete : !e.complete} : e)
    },
    all : (state) => {
       return state=[]
    }
// 원본통채로바꿀때 return

}
})

export const {add , remove, complete, all} = todoSlice.actions 
//store에서 add, remove, complte 액션을 내보낸다.
export default todoSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    filterType: 'all',
    items: [],
}

export const todosSlice = createSlice({
    name:"todos",
    initialState: {value : initialStateValue},

    add: {
        reducer: (state,action)=> {
            state.items.push(action.payload)
            }
        },
    // payload를 한번 거치는 미들웨어같은함수 action을 dispatch할때 
    // action은 매개변수를 받는데, 이 매개변수의 값을 전처리 하는 역할
    prepare: text => {
        return{
            payload: {
                id: ++uniqId,
                done: false,
                text,
            },
        }
    },
    // Todo의 text상태 변경하기
    edit: (state,action) => {
        const {id, text} = action.payload
        state.items = state.items.map(todo => todo.id === id ?
        {...todo, text} : todo    
        )
    },
    // Todo 삭제하기
    remove: (state,action) => {
        const id = action.payload
        state.items = state.items.filter(todo => todo.id !== id)
    },
    // done상태에 따라 목록 필터링하기
    filter: (state, action) => {
        state.filterType = action.payload
    },
    // done: true인 목록 제거하기
    clearCompleted: state => {
        state.items = state.items.filter(todo => !todo.item)
    },
    // Todo 목록의 done 상태 변경하기
    checkAll : state => {
        const done = action.payload
        state.items = state.items.map(todo => ({
            ...todo,
            done,
        }))
    }
})

export const {
    add,
    check,
    edit,
    remove,
    filter,
    clearCompleted,
    checkAll,
    } = todosSlice.actions


export default todosSlice.reducer
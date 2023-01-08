import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove, complete } from '../redux/todo'


export default function TodoList() {
    const todolist = useSelector(state => state.todo)
    const dispatch = useDispatch()



    console.log(todolist)

    // key값을 todolist.id로 지정해서 여기map에서생성된 id값을 todo.js id 안에 들어감
    const todolistView = todolist.map((todo, idx) => (
        <li key={todolist[idx].id}>
            <input type="checkbox"
                onChange={() => dispatch(complete(todolist[idx].id))} />
            <div >{todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}</div>
            <button type="button" onClick={() => dispatch(remove(todolist[idx].id))}>x</button>
        </li>
    )
    )


    return (
        <div>
            <ul>{todolistView}</ul>
        </div>
    )
}
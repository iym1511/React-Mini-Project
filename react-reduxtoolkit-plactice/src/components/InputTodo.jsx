import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, all} from '../redux/todo'

export default function InputTodo() {
    const dispatch = useDispatch()

    const [todolist, setTodolist] = useState(
        {
            id: 0,
            text: "",
        }
    )

    function handleText(e) {
        setTodolist({ text: e.target.value })
        console.log(todolist.text)
    }

    function onReset() {
        setTodolist({ text: "" })
    }


    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (todolist.text !== "") {
                    dispatch(add(todolist.text))
                }
                else (alert("할 일을 입력해주세요!"))
                onReset()
            }}>
                <div>
                    <input type="text"
                        value={todolist.text} onChange={handleText}></input>
                    <input type="submit" value="+"></input>
                </div>
            </form>
            <button onClick={() => { dispatch(all(), alert("전체삭제할거니?")) }}>전체삭제</button>
        </div>

    )
}
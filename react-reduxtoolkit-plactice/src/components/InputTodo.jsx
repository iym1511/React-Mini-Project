import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add} from '../redux/todo'

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
    }

    function onReset() {
        setTodolist({ text: "" })
        console.log(todolist.text)
    }


    return (
        <div style={{ border: "1px solid red" }}>
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
            {/* <button onClick={() => { dispatch(all("")) }}>모두삭재</button> */}
        </div>

    )
}
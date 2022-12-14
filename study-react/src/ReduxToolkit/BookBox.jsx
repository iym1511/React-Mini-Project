import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPay, setTitle } from "./modules/book";

const BookBox = () => {
    const bookTitle = useSelector((state)=>(state.book.title));
    const bookPay = useSelector((state)=>(state.book.pay));
    const dispatch = useDispatch();
    const [input, setInput] = useState();
    const [payinput, setPayinput] = useState(0);
    return ( 
        <div>
            <h1>BookBox입니다</h1>
            <p>{bookTitle} / {bookPay}</p>
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={()=>{dispatch(setTitle(input))}}>Title변경</button>
            <input type="text" onChange={(e)=>{setPayinput(e.target.value)}}/>
            <button onClick={()=>{dispatch(setPay(payinput))}}>Pay변경</button>
        </div>
     );
}
 
export default BookBox;
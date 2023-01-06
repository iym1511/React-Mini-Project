import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../redux/theme";

const ChangeColor = () => {
    const [color, setColor] = useState('');
    const dispatch = useDispatch();
    // const ChangeColor = useSelector((state)=> state.theme.value);
    return (  
        <div>
            {/* 
                Color에  컬러명을 저장하고  changeColor에 컬러명을 담은 후 
                Profile.jsx에 selector를 줘서 스타일변경해줌
            */}
            <input type="text" onChange={(e)=>{(setColor(e.target.value))}}/>
            <button onClick={()=>{(dispatch(changeColor(color)))}}>색 변경</button>
        </div>
    );
}
 
export default ChangeColor;
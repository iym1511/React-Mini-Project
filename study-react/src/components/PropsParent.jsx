import { useState } from "react";
import PropsChildren from "./PropsChildren";
import StateBox from "./StateBox";

const PropsParent = () => {
    const [count, setCount] = useState(1);
    return (  
        <div>
            <h3>propsParent, count : {count}</h3>
            <PropsChildren name="green" 
            count={count} 
            setCount={setCount}
            // 만들어진 컴포넌트에 on이벤트는 props값으로 들어간다.
            onClick={()=>console.log("클릭했습니다.")}
            >
            태그 사이에 들어가는 값 : {count} <br/>
            태그도 들어갈 수 있다. 원한다면 컴포넌트도 넣을 수 있다 <br/>
            map을 이용하여 컴포넌트를 children으로 넘겨줄 수 있다
            <StateBox />
            </PropsChildren>
        </div>
    );
}
 
export default PropsParent;
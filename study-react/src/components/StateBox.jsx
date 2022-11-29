import { useState } from "react";

const StateBox = () => {
    const [name,SetName] = useState("green");
    // useState : 함수형 컴포넌트에서 state를 사용할수 있게 만들어둔 hook
    // hook : use를 붙여서 사용하는 함수형 컴포넌트의 내용 (리액트 16ver. 이후)
    // useState는 ()안에 원하는 데이터 값을 넣어서 사용할수 있다
    // 이때 그 안에 있는 값은 setName을 통해서 값을 바꿔준다.

    const printName = (inputName)=> {
        return inputName+"입니다";
    }

    return (  
        <div>
            <h1>{name}입니다</h1>
            <p>변수는 중괄호 안에 이름을 넣으면 값이 그대로 출력되고,
                함수는 ()를통해 내용을 실행시킬수 있다.
                단, 화면에 출력되는 부분은 return 되는 부분이다.
            </p>
            <p>{printName("blue")}</p>
        </div>
    );
}

export default StateBox;
import {memo, useState } from "react";
import TestBox from "./TestBox";

const TestEvent = () => {
    const [memos, setMemo] = useState([
        {id : 1, text: "메모1"},
        {id : 2, text: "메모2"},
        {id : 3, text: "메모3"},
        {id : 4, text: "메모4"},
    ]);

  

    return (
        <div>
        <h3>이벤트 테스트 공간입니다</h3>
        
        {/*map을 통해서 전체 내용을 출력해주세요*/}
        {
            memos.map((memo)=>(
                <div key={memo.id}>
                    <p>{memo.text}</p>
                </div>
            ))
        }

        {/* TestBox를 이용하여 내용을 출력해주세요*/}
        {
             // modify true일때 화면에 출력
        // true 일때, input의 값을 입력받고, 
        // 버튼을 누르면 그 값이 setMemos로 수정되고 modify가 false로 바뀜

        memos.map((memo)=>(
            <TestBox memo={memo} setMemo={setMemo} memos={memos}/>
        ))
        }
       
        
        

        </div>
    );
    };



export default TestEvent;
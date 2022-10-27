// 입력한 아이디 정보 저장 컴포넌트

// Context 대한 내용은 공식 홈페이지 참조
// Context를 사용해서 , value값도 현재 파일에서 지정하고 내보내기
import { useState } from "react";
import { createContext } from "react";

// 내보낸 DataContext에 value를 넣어줘서 사용
const DataContext = createContext();

// 미리 Provider를 작성하여 value값을 가진 컴포넌트를 내보냄.
const DataProvider = ({children}) => {
    // 사용할 값들을 useState를 통해 들고옴
    // 유저정보 {name: "홍길동", profile : 사진, likelist : [] }
    const [user, setUser] = useState({name:"홍길동", profile : null, likelist : []})

    // 상품정보 : 상품 배열로 들어감
    const [productList, setProductList] = useState([
        {
            productId : 1,
            productName : "책",
            productDetail : "리액트를 알려주는 책입니다",
            productColor : ["white", "black"],
            productPicture : "1.jpg"
        },
        {
            productId : 2,
            productName : "책2",
            productDetail : "리액트를 알려주는 책입니다",
            productColor : ["white", "black"],
            productPicture : "1.jpg"
        },
        {
            productId : 3,
            productName : "책3",
            productDetail : "리액트를 알려주는 책입니다",
            productColor : ["white", "black"],
            productPicture : "1.jpg"
        },
        {
            productId : 4,
            productName : "책4",
            productDetail : "리액트를 알려주는 책입니다",
            productColor : ["white", "black"],
            productPicture : "1.jpg"
        }
    ])
    // 댓글정보

    // 사용할 value 값을 state와 action 분리해서 넣어둠
    const value = {
        state : {user, productList},
        action: {setUser, setProductList}
    };
    // DataProvider를 사용할때 DataContext.Provider를 사용할수 있도록 함
    // ★이때 children은 Provider를 쓸때 데이터를 공용으로 쓰는 컴포넌트들
    // children 안쪽에 값 전달
    // 이거 쓰는애들 전부다 값 전달 ★
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

// consumer 작성  
// DataContext의 값을 가져와서 DataConsumer의 이름으로 사용
const {Consumer : DataConsumer} = DataContext;

// 컴포넌트로 사용하기 위해 export > .Provider 대신 사용할 검포넌트 : App 전체를 감쌈
export {DataConsumer, DataProvider}
// 값을 사용하기위해 가져오는 컨텍스트 export > 각컴포넌트에서 useContext로 가져올 것
export default DataContext;
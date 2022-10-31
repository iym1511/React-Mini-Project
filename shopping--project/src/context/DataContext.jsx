// Context 대한 내용은 공식 홈페이지 참조
// Context를 사용해서, value값도 현재 파일에서 지정하고 내보내기

import { useState } from "react";
import { createContext } from "react";
import { NavItem } from "react-bootstrap";
// 내보낸 DataContext에 value을 넣어줘서 사용
const DataContext = createContext();

// 미리 Provider를 작성하여 value값을 가진 컴포넌트를 내보냄.
const DataProvider = ({children}) => {
    // 사용할 값들을 useState를 통해 값을 들고옴
    // 유저정보  {name: "홍길동", profile : 사진, likelist : [] }
    const [user, setUser] = useState({name: "이재용", profile : null, likelist : [] });
    
    // 상품정보 : 상품배열로 들어감
    const [productList, setProductList] = useState([
        {
            productId : 1,
            productName : "BMW i4",
            productEngin : " 가솔린 / 디젤",
            productMoney : "$ 66,400,000",
            productDetail : "BMW i4 M50 ",
            productColor : ["white", "#123DB3"],
            productPicture : ["3.jpg", "2.jpg" ]
        },
        {
            productId : 2,
            productName : "BMW iX",
            productDetail : "BMW iX M60",
            productColor : ["#C3000D","gray"],
            productPicture : ["4.jpg","5.jpg"]
        },
        {
            productId : 3,
            productName : "BMW 5 시리즈",
            productDetail : "BMW M5 컴페티션",
            productColor : ["#2286DC","#C3000D"],
            productPicture : ["6.jpg","7.jpg"]
        },
        {
            productId : 4,
            productName : "BMW XM",
            productDetail : "플러그인 하이브리드",
            productColor : ["rgb(78,93,104)"],
            productPicture : ["8.jpg"]
        }
    ])
    // 댓글정보
    const [allComments, setAllComments] = useState([
        {
            commentId : 1,
            productId : 1,
            name : "팀쿡",
            text : "좋은 차량입니다"
        },
        {
            commentId : 2,
            productId : 1,
            name : "이재용",
            text : "괜찮습니다"
        }
    ])
    const [commentCount, setCommentCount] = useState(3);

    
    
    // 사용할 value 값을 state와 action 분리해서 넣어둠
    const value = {
        state : {user, productList, allComments, commentCount},
        action : {setUser, setProductList, setAllComments, setCommentCount}
    };
    // DataProvider를 사용할때 DataContext.Provider를 사용할수 있도록함
    // 이때 children은 Provider을 쓸때 데이터를 공용을 쓰는 컴포넌트들

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};


// consumer 작성
// DataContext의 값을 가져와서 DataConsumer으로 사용
const { Consumer : DataConsumer } = DataContext;

// 컴포넌트로 사용하기위해 export > .Provider 대신 사용할 컴포넌트 : App 전체를 감쌈
export { DataConsumer, DataProvider}
// 값을 사용하기위해 가져오는 컨텍스트 export > 각컴포넌트에서 useContext로 가져올 것
export default DataContext;
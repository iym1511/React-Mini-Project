// 초기값
const initalState = [
    {
        commentId : 1,
        boardId :1,
        userEmail : "iym15111111@naver.com",
        text : "반갑습니다"
    }
]

// commentId 관리 (함수밖에 생성)
let commentIdId = 2;

// 리듀서 함수 작성
function comments (state = initalState, action) {
    switch (action.type) {
        case "addComment" :
            const newComment = {
                ...action.payload,
                commentId : commentIdId,
            }
            commentIdId++;
            return state.concat(newComment);
        default :
            return state;
    }
}

// 액션함수 내보내기
export const addComment = (comment) => ({type:"addComment", payload : comment})

export default comments;
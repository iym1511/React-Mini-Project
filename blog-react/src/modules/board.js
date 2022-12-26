// board 리듀서
//초기 값
const initalState = [
    {
        boardId :1, 
        userEmail : "iym1511@naver.com", 
        title : "첫 게시물입니다",
        content : "문자만들어갈수 있는 공간입니다",
        view : 0,
        like : 1 
        // 좋아요를 누른 사람의 리스트
    },
    {
        boardId : 2, 
        userEmail : "mooniy1511@gmail.com", 
        title : "두번째 게시글",
        content : "두번째 글입니다",
        view : 0,
        like : 1 
        // 좋아요를 누른 사람의 리스트
    }
]
// board가 증가할때마다 증가되는 아이디
let boardId = 3;


//리듀서 함수
function board (state = initalState, action) {
    switch (action.type) {
        case "deleteBoard":
            // 현재 게시물의 id 를 찾아서, 그 id를 제외하고
            // 새로운 배열을 만듦 : filter
            const newboardList = state.filter((board)=>( board.boardId != action.payload ));
            return newboardList;
        case "modifyBoard":
            // 수정된 board값을 들고와서, 
            // 그 값을 통채로 리스트에 바꿔서 넣어줌
            // 배열의 갯수가 바뀌지않고, 그 안에 값만 수정 : map 
            // 수정할 id 값을 비교를 해서, board값을 바꿔서 넣어줌
            const modifyboard = state.map(
                (board) => 
                (board.boardId == action.payload.boardId? action.payload : board)
                )
            return modifyboard;
        case "addBoard" :
            // 새로운 보드값을 받아와서, boardId값을 부여한 후에 추가
            // payload를 통해서 - userEmail, title, context 
            // 리덕스에서 넣어주는 값 - boardId, view = 0, like=  0,
            const newboard = {
                ...action.payload,
                boardId : boardId,
                view : 0,
                like : 0
            }
            boardId++;
            return state.concat(newboard);
        case "updateView":
            return state.map((board)=>(board.boardId == action.payload ? {...board, view:board.view+1} : board));
        default :
            return state;
    }
}

// 액션함수
export const deleteBoard 
        = (id) => ({type:"deleteBoard", payload:id});
export const modifyBoard
        = (board) =>({type:"modifyBoard", payload:board});
export const addBoard  
        = (board) => ({type:"addBoard", payload:board});
export const updateView
        = (id) => ({type:"updateView", payload:id})


export default board;

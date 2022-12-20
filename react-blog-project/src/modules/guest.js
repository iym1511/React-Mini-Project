// 방명록 리스트 저장
// 초기값
const initalState = [
    {guestId : 1, name:"green", text:"블로그 잘봤습니다."},
    {guestId : 2, name:"red", text:"들렀다 갑니다."},
];

// 값을 구분하기위한 id
let guestIdId = 3;

// 리듀서 / action:값 받아오는거 (set이랑같음)
function guest (state = initalState, action) {
    switch (action.type){
        case "addGuest":
            // 방명록을 리스트에 추가
            // 방명록값을 들고와서 리스트에 추가하는 형태
            // 들고는 방명록의 값: name, text,
            // guestid 값 추가
            // 스프레드 연산자로 가져온 name과text를 빼씀
            const newGuest = {...action.payload, guestId : guestIdId}
            guestIdId++;
            // 만들어진 방명록 객체를 배열 추가 : 새로 배열을 만들어서 추가
            // concat을 통해 사용
            const newGuestArray = state.concat(newGuest);
            return newGuestArray;
        default :
            return state;
    }
}

// 액션함수
export const addGuest = (guest)=>({type:"addGuest", payload:guest});

export default guest; 
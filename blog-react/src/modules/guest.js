// 방명록 리스트 저장

// 초기값
const initalState = [
    {guestId : 1, name :"green", text:"블로그 잘봤습니다"},
    {guestId : 2, name :"red", text:"들렸다갑니다"},
    {guestId : 3, name : "yellow", text:"들럿다감"}
]
// 값을 구분하기 위한 id
// 값이 늘어나기만하면됨 숫자크기상관 x 
let guestIdId = 1;

// 리듀서
function guest (state = initalState, action) {
    switch (action.type) {
        case "addGuest":
            // 방명록을 리스트에 추가
            // 방명록값을 들고와서 리스트에 추가하는 형태
            // 들고오는 방명록의 값: name, text, 
            // guestId 값 추가
            const newGest = {...action.payload, guestId : guestIdId}
            guestIdId++;

            // 만들어진 방명록 객체를 배열 추가 : 새로 배열을 만들어서 추가
            // concat을 통해 사용
            const newGuestArray = state.concat(newGest);
            return newGuestArray;

        // 테스트로 name 가져가기
        case "test" : 
            return {...state, name : state.name}
        
        default :
            return state;
    }
}

// 액션함수
export const addGuest = (guest)=>({type:"addGuest", payload:guest});
export const test = ()=>({type:"test"}); // 테스트로 name 가져가기

export default guest;
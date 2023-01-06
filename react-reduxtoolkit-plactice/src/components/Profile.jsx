import { useSelector } from "react-redux";

const Profile = () => {
    // 만든 리듀서 state에 접근  / user에있는 value를 가져옴
    const user = useSelector((state)=> state.user.value);
    const themeColor = useSelector((state)=> state.theme.value);

    return (  
        <div style={{color:themeColor}}>
            <h1>Profile Page</h1>
            <p> Name : {user.name}</p>
            <p> Age : {user.age}</p>
            <p> Email : {user.email}</p>
        </div>
    );
}
 
export default Profile;
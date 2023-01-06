import { useDispatch } from "react-redux";
import { login, logout } from "../redux/user";

const Login = () => {
    const dispatch = useDispatch();
    return (  
        <div>
            <button onClick={()=>{
                dispatch(login({name : "홍길동", age:"26",email:"iym1511@naver.com"}))}
                }>Login</button>
            <button onClick={()=>{
                dispatch(logout())
            }}>Logout</button>
        </div>
    );
}
 
export default Login;
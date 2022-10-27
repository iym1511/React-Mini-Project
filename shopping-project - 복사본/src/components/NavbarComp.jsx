import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { useEffect } from 'react';



function NavbarComp() {
    const [login, setLogin] = useState(true);
    const data = useContext(DataContext);
    const navigate = useNavigate();

    // 컴포넌트가 마운트 되자마자 로그인정보 확인
    useEffect(()=>{
        setLogin(data.state.user ? true:false)
    },[])
    // LogOut을 위한 이벤트 함수
    const logOut = () => {
        setLogin(false) // 컴포넌트를 바꿔주기 위해 수정
        // user의 값을 null로 바꿔줌
        data.action.setUser(null);
        // 다른곳에서 로그아웃을해도 항상 홈으로 돌아감
        navigate("/");
        
    }


    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <FontAwesomeIcon icon={faShoppingCart} />{" "}Shop
            </Navbar.Brand>
            <Nav className="me-auto">  {/** 부트스트랩에있는 nav-link를 가져옴 */}
                <NavLink to="/" className="nav-link">Home</NavLink>
            </Nav>

            <Navbar.Collapse className="justify-content-end">
                {/* 로그인 참,거짓일때 출력되는것 */}
                {login ? (
                    <Nav>
                        {/* 로그인이 되었을때 출력될 컴포넌트 */}
                        <NavLink className="nav-link" to="/mypage" style={{color: "white"}}>
                            {data.state.user.name}님의 마이페이지
                        </NavLink>
                        <Button variant="outline-light" onClick={logOut}>Logout</Button>{' '}
                    </Nav>
                ):(
                    <div>
                        {/* 로그인이 되지않았을때 출력될 컴포넌트 */}
                        <Button variant="outline-light">Login</Button>{' '}
                    </div>
                )}               
            </Navbar.Collapse>

            </Container>
        </Navbar>
        <br />
        </>
    );
}

export default NavbarComp;
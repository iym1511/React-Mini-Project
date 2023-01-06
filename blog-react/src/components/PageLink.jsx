import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function PageLink() {
    const user = useSelector((state)=>(state.currentUser))

  return (
    <Navbar bg="light" expand="md">
      <Container>

        <NavLink to='/' className="nav-link">React-Blog</NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink to='/board' className="nav-link">포스트</NavLink>
            <NavLink to='/guest' className="nav-link">방명록</NavLink>
            {
                user ? (
                    <NavLink to='/mypage' className="nav-link">마이페이지</NavLink>
                ) : (
                    <NavLink to='/loginform' className="nav-link">로그인</NavLink>
                )
            }
           
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageLink;

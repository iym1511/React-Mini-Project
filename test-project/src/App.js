import logo from './logo.svg';
import './App.css';

import {Button, Container}  from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavComp from './components/NavComp';
import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
// 그리드 컴포넌트
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// slick(카드 슬라이드) 컴포넌트
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// 폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 아이콘 불러오기
import { faEnvelope,faBagShopping, faAppleWhole } from '@fortawesome/free-solid-svg-icons'



function App() {

    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // 2면 2개씩보여줌
      slidesToScroll: 1, // 스크롤 넘기는 갯수
    };
    
  return (
    <div className="App">
      <NavbarComp />
      <CardComp />
      <Button variant="primary" onClick={()=>{alert("클릭")}}>
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faBagShopping} />
      <FontAwesomeIcon icon={faAppleWhole} />
      </Button>{' '}
      <Container>
        {/* 그리드 */}
      <Row className="justify-content-md-center">
        <Col xs lg="2">1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">3 of 3</Col>
      </Row>
      </Container>
    {/* 슬라이드 */}
    <br></br>
      <Slider {...settings}>
          <div>
            <h3>1</h3>
            <CardComp />  {/** 카드를 넣어 슬라이드 사용 */}
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <div/>
    </div>
  );
}
export default App;

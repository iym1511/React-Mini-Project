import {Container, Col, Row} from "react-bootstrap";
// 슬릭 라이브러리 추가
import Slider from "react-slick";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft, faBackspace} from '@fortawesome/free-solid-svg-icons'
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";

import React, { Component } from "react";
import MainCardComp from "../components/MainCardComp"
import MainCardComp2 from "../components/MainCardComp2"
import MainCardComp3 from "../components/MainCardComp3"


const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const settings1 = {
        arrows: false, // 화살표 없애줌
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    // 받아서 씀
    const {state} = useContext(DataContext)

    return (  
        <div>
            <Slider {...settings1}>
            <div>
                <MainCardComp />
            </div>
            <div>
                <MainCardComp2 />
            </div>
            <div>
                <MainCardComp3 />
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </Slider>
            <Container>
                <Row >
                    <Col className="px-5">
                        <Slider {...settings}>
                            {state.productList.map((product)=>(
                                <div>
                                    <ProductCard key ={product.productId} product={product} />
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronRight} 
        className={className} 
        onClick={onClick}
        style={{color:"white"}}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronLeft} 
        className={className} 
        onClick={onClick}
        style={{color:"white"}}
        />
    );
  }
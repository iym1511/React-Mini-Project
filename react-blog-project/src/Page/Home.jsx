import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from 'react-slick';
import HomeLink from "../components/HomeLink";
import '../css/Home.css';

const Home = () => {
    // new Date객체 소환
    // 시계 출력
    const [time, setTime] = useState(new Date());

    // 시계 내용을 출력하는 함수 : return값으로 시간을 돌려줌 - 문자열
    const printClock = () => {
        // 숫자를 문자로 바꿔서, 문자 메소드에 있는 0을 채우는 것 사용
        const hour = String(time.getHours()).padStart(2, "0");
        const minute = String(time.getMinutes()).padStart(2, "0");
        const second = String(time.getSeconds()).padStart(2,"0");
        return `${hour} : ${minute} : ${second}`
    } 

    // 현재 페이지가 실행되었을때, 
    // setInterval을 이용하여 시간값을 1초마다 바꿔서 출력
    // setInterval은 한번만 작성해주면 된다
    useEffect(()=> {
        setInterval(()=>{setTime(new Date())}, 1000)
    })

    // 글귀 또는 명언 출력 : 배열안에 여러개의 문구를 넣어서 출력
    // 그중에 랜덤으로 하나의 값을 정해서 화면에 출력
    const [words, setWords] = useState([
        {text : "깨지고 부셔저라", author: "사람 또는 책 이름1"},
        {text : "모두에게 운은 넘치도록 주어진다. 그저, 모두가 무시했을 뿐이다", author: "사람 또는 책 이름2"},
        {text : "행복은 노력만이 아닌 사고방식의 전환이 필수이다.", author: "사람 또는 책 이름3"},
    ])

    // 글귀를 랜덤하게 출력하는 함수 작성
    // > 문제 : printWord를 실행할때마다 randum 값이 바뀐다
    // >>> 왜 바뀌는가? : update를 할때마다 printWord 실행
    // >>> printWord가 return의 html안에 있기 때문에 계속해서 실행
    // 이 함수를 고정할수 있는방법 : useCallback, useMemo
    // return 값을 고정 : useMemo - return 값 고정
    // useMemo를 사용했을때, 변수 안에 들어가는 것 = return값
    const printWord = useMemo( () => {
        const randomnum = Math.floor(Math.random()*words.length);
        return words[randomnum];
    }, [] )

    // 슬릭 화면 사용
    // 슬릭과 같은 라이브러리를 사용할 때, 관련내용을 확인
    const settings = {
        arrows : false,
        infinite: true,
        autoplay:true,
        speed: 1600,
        autoplaySpeed:700,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // 슬릭에 출력할 배경이미지 배열
    const [imageList , setImageList] = useState([
        "background_1.jpg",
        "background_2.jpg",
        "background_3.jpg",
    ])

    return (  
        <div>



      {/** 슬릭화면 출력 */}
      <div>
        <Slider {...settings}>
          <div>
            {/** sldier는 내용이 커지면 다음 페이지에 넘어간다 
             * 크기를 조절해서 사용*/}
            {/** 이미지를 주소로 바로접근할수 없기 때문에 require로 접근 */}
            <img style={{width:"100%"}} src={require(`../img/background_1.jpg`)} alt="" />
          </div>
          {/** map을 사용해서 출력 - 배열 */}
            {
              imageList.map((image)=>( 
                <div>
                <div 
                  style={{
                    width:"100%", 
                    height:"100vh",
                    backgroundImage : 'url('+require("../img/"+image)+')',
                    backgroundSize : "cover"
                  }} >
                  </div>
                </div>
              ))
            }
        </Slider>
      </div>


      <div className="Home_main">
        {/** 현재 시간 출력 */}
        <h1>{printClock()}</h1>
        {/** 배열안에 있는 명언 중 하나 출력 */}
        {/** useMemo를 사용했을 경우,
         * 그 함수의 return값이 변수 안에 들어가게된다.
         * 사용할 때 변수이름으로만 사용 */}
        <p>{printWord.text}</p>
        <p>{printWord.author}</p>
      </div>

        <HomeLink></HomeLink>
    </div>
    );
}
 
export default Home;
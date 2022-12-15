import "../css/Home.css";

import { useEffect, useMemo, useState } from "react";

import Slider from "react-slick";

const Home = () => {
  const [time, setTime] = useState(new Date());

  // 시간을 출력하는 함수 : return값으로 시간을 반환(문자열)
  const printClock = () => {
    // 숫자를 문자로 바꿔, 문자객체에 있는 0을 채우는 메서드 사용
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");
    return `${hour}:${minute}:${second}`;
  };

  //  현재 페이지가 실행되었을때, setInterval을 이용하여 시간출력
  // setInterval은 한번만 작성
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  // 글귀 또는 명언 출력 : 배열안에 문구를 넣고,무작위로 출력
  const [words, setWords] = useState([
    {
      text: "Sow good services sweet remembrances will grow them.",
      author: "Madame de Stael",
    },
    {
      text: "Force is all-conquering, but its victories are short-lived.",
      author: "Abraham Lincoln",
    },
    {
      text: "Those who cannot remember the past are condemned to repeat it.",
      author: "George Santayana",
    },
    {
      text: "Unless you believe, you will not understand.",
      author: "Saint Augustine",
    },
    {
      text: "Death is nothing, but to live defeated and inglorious is to die daily.",
      author: "Napoleon Bonaparte",
    },
  ]);

  // 글귀를 랜덤하게 출력하는 함수
  // printWord를 실행할때마다 random값이 바뀜
  // -> update를 할 때마다 printWord 실행
  // printWord가 return의 html 안에 있기 때문에 계속 실행
  // 함수를 고정할 수 있는 방법 : useCallback, useMemo
  // return값을 고정 : useMemo - return 값 고정
  // useMemo 사용시, 변수 안에 들어가는 값 = return 값

  const printWord = useMemo(() => {
    const randomNum = Math.floor(Math.random() * words.length);
    return words[randomNum];
  }, []);

  // react-slick settings
  // slick과 같은 라이브러리를 사용할 때, 관련 내용을 확인
  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // slick에 출력할 배경이미지 배열
  const [imageList, setImageList] = useState([
    "homepage1.jpg",
    "homepage2.jpg",
    "homepage3.jpg",
  ]);

  return (
    <div>
      {/* react-slick */}
      <div>
        <Slider {...settings}>
          <div>
            {/* 
              slider는 내용이 커지면 다음 페이지로 넘어간다
              크기를 조절하여 사용
            */}
            {/* 이미지 주소로 바로 접근할 수 없기 때문에 require로 접근 */}
            <img
              style={{ width: "100%" }}
              src={require(`../images/homepage1.jpg`)}
              alt=""
            />
          </div>

          {/* map을 사용해 출력 - 배열 */}
          {imageList.map((image) => (
            <div>
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundImage: "url(" + require("../images/" + image) + ")",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="Home_main">
        {/* 현재 시간 출력 */}
        <h1>{printClock()}</h1>
        <h1>Home page</h1>

        {/* useMemo 사용 시, return값이 변수 안에 들어간다. -> 변수 이름으로만 사용 */}
        <p>{printWord.text}</p>
        <p>{printWord.author}</p>
      </div>
    </div>
  );
};

export default Home;

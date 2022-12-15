import { useEffect, useState } from "react";

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

  const printWord = () => {
    const randomNum = Math.floor(Math.random() * words.length);
    return words[randomNum];
  };

  return (
    <div>
      {/* 현재 시간 출력 */}
      <h1>{printClock()}</h1>
      <h1>Home page</h1>
      <p>{printWord().text}</p>
      <p>{words[4].author}</p>
    </div>
  );
};

export default Home;

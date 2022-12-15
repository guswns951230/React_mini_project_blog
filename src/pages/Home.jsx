import { useEffect, useState } from "react";

const Home = () => {
  const [time, setTime] = useState(new Date());

  //  현재 페이지가 실행되었을때, setInterval을 이용하여 시간출력
  // setInterval은 한번만 작성
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      {/* 현재 시간 출력 */}
      <h1>
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </h1>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;

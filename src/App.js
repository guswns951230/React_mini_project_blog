import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import LoginForm from "./pages/LoginForm";
import Guest from "./pages/Guest";

// Routes와 Route를 이용하여 화면 관리
function App() {
  return (
    <div>
      {/* 고정할 화면이 있다면 Routes의 바깥에 두거나, Layout 사용 */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/guest" element={<Guest />}></Route>
        <Route path="/loginform" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;

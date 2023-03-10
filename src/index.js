import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

// 웹을 사용할 때 firebase를 들고오기 위해 import
// import {} from, import from을 통해 가져오는 경우
// -> export, export default로 되어있는 값을 가져와
//    현재 js 파일에서만 사용 (다른 곳에서 사용하려면 다시 import)
// js, css를 들고 올때 import하여 들고오는 경우
// -> 전체 파일에 그 내용이 적용
import "./database/firebase";

// redux를 사용하기 위해 redux provider 추가
import { Provider } from "react-redux";
// createStore를 추가
// ※redux toolkit 사용 권장
import { createStore } from "redux";
import rootReducer from "./modules";

// createStore를 통해 store 생성
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

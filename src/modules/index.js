// 작성한 redux module들을 하나로 묶어서 사용 및 내보내기
import { combineReducers } from "redux";
// redux module 연결
import currentUser from "./currentUser";

const rootReducer = combineReducers({ currentUser });
export default rootReducer;

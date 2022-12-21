// 작성한 redux module들을 하나로 묶어서 사용 및 내보내기
import { combineReducers } from "redux";
// redux module 연결
import currentUser from "./currentUser";
import guest from "./guest";
import board from "./board";

const rootReducer = combineReducers({ currentUser, guest, board });
export default rootReducer;

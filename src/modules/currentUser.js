// 초기값
// 로그인 여부를 알아보기 위해 초기값을 null로 설정
// 안에 [], {}를 넣어두면 값이 있다고 판단
/**
 *
 */
const initialState = null;
// 데이터 관리 다른 방법
// {userinfo : null, login : false}
// -> 객체안에 속성으로 추가하여 사용

// reducer - switch문으로 작성
function currentUser(state = initialState, action) {
  switch (action.type) {
    case "userLogin":
      // 비동기의 내용은 컴포넌트에서 실행, redux로 들고옴(사용)
      // *비동기를 middleware(thunk)를 이용하여 진행할 수 있다
      // 구글인증을 통해 가져온 값은 객체를 통해 가져옴
      // 그 값을 전부 넣어준다면, 받아온 값을 그대로 넣어주면 되지만
      // 필요한 것만 골라 넣어주는 것이 좋다

      // ... 스프레드 연산자를 이용해 객체안의 속성값을 유지
      return action.payload;
    case "userLogout":
      // logout했을때 그 값이 null 값으로 들어감
      return null;
    default:
      return state;
  }
}
// action 함수
export const userLogin = (user) => ({ type: "userLogin", payload: user });
export const userLogout = () => ({ type: "userLogout" });

export default currentUser;

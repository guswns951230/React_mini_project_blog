// 방명록 리스트 작성
// 초기값
const initialState = [
  { guestId: 1, name: "green", text: "블로그 잘봤습니다." },
  { guestId: 2, name: "익명", text: "잘보고 갑니다." },
];

// 값을 구분하기 위한 id
let guestId = 1;

// reducer
function guest(state = initialState, action) {
  switch (action.type) {
    case "addGuest":
      // 방명록을 리스트에 추가
      // 방명록 값을 들고와 리스트에 추가하는 형태
      // 들고옹는 방명록의 값: name, text
      // guestId 값 추가
      const newGuest = { ...action.payload, guestId: guestId };
      guestId++;

      // 만들어진 방명록 객체를 배열에 추가 : 새로 배열을 만들어 추가(concat)
      const newGuestArray = state.concat(newGuest);
      return newGuestArray;
    default:
      return state;
  }
}

export const addGuest = (guest) => ({ type: "addGuest", payload: guest });

export default guest;

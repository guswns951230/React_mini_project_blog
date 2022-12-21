// 초기값
const initialState = [
  {
    boardId: 1,
    userEmail: "guswns@naver.com",
    title: "첫 게시물입니다",
    content: "문자열로 작성된 내용",
    view: 0,
    like: 1, // 좋아요를 누른 사람의 리스트
  },
];

// reducer
function board(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default board;

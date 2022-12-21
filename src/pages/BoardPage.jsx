import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import board from "../modules/board";

const BoardPage = () => {
  // params를 통해 board의 boardId값 전달
  const { id } = useParams();
  // board의 내용을 출력하기 위해 redux에서 값 가져오기
  const boardList = useSelector((state) => state.board);
  // board의 내용중 하나만 찾아 가져오기
  // -> find() : 배열값중 하나만 출력
  const board = boardList.find((board) => board.boardId == id);
  // useSelector에 바로 find 사용
  const boardFind = useSelector((state) =>
    state.board.find((board) => board.boardId == id)
  );
  return (
    <div>
      <h1>{id}</h1>
      <p>{board ? board.content : "없는 페이지입니다"}</p>
      <p>{boardFind ? boardFind.content : "없는 페이지입니다"}</p>
    </div>
  );
};

export default BoardPage;

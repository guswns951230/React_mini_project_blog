import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const boardList = useSelector((state) => state.board);
  // useNavigate
  const navigate = useNavigate();

  // 게시물의 이름을 클릭했을때 실행될 함수
  const toBoardPage = (id) => {
    // 값을 고정시키지 않기 위해, boardId값을 받아와 사용
    navigate("/board/" + id);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board) => (
            <tr>
              <td>{board.boardId}</td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => {
                  toBoardPage(board.boardId);
                }}
              >
                {board.title}
              </td>
              <td>{board.userEmail}</td>
              <td>{board.view}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Board;

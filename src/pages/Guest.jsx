import { useState } from "react";
import { Button, Card, FloatingLabel, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { addGuest } from "../modules/guest";

const Guest = () => {
  // redux를 이용하여 guest의 값 가져오기
  const guestList = useSelector((state) => state.guest);
  const dispatch = useDispatch();

  // email 정보를 들고 오기위해 redux의 currentUser 들고오기
  const currentUser = useSelector((state) => state.currentUser);

  const [name, setName] = useState(currentUser ? currentUser.email : "익명");
  const [text, setText] = useState("");

  return (
    <div className="mx-5 mt-5">
      <h1>Guest Page</h1>

      {currentUser ? (
        <p>{currentUser.email}</p>
      ) : (
        <FloatingLabel controlId="floatingInput" label="이름" className="mb-3">
          <Form.Control
            type="text"
            value={name}
            placeholder="name"
            style={{
              border: "none",
              borderRadius: "0",
              borderBottom: "1px solid lightgray",
            }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FloatingLabel>
      )}

      <FloatingLabel controlId="floatingTextarea2" label="작성할 내용">
        <Form.Control
          as="textarea"
          // placeholder="Leave a comment here"
          style={{ height: "100px" }}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </FloatingLabel>

      {/* button 클릭시 reducer에 내용을 추가  */}
      <Button
        onClick={() => {
          dispatch(addGuest({ name: name, text: text }));
        }}
      >
        작성
      </Button>

      <hr />

      <h3>댓글</h3>

      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          {guestList.map((guest) => (
            <GuestText guest={guest} />
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Guest;

// 방명록 내용을 하나씩 출력할 공간
// ListGroup.Item에 출력 - props값을 받아와 출력
const GuestText = ({ guest }) => {
  return (
    <ListGroup.Item>
      <b>{guest.name}</b> <br />
      {guest.text}
    </ListGroup.Item>
  );
};

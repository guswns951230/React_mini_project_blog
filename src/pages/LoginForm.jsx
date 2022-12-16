import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const LoginForm = () => {
  // page를 이동하기 위한 navigate
  const navigate = useNavigate();

  // 값을 가져올 email과 password를 가져올 state
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // 이메일로 회원가입 하기위한 함수
  const emailCreate = () => {
    // getAuth는 firebase앱에서 인증 부분을 받아오는 함수
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 회원가입 성공
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        if (errorCode === "auth/email-already-in-use") {
          alert("이미 사용중인 E-mail입니다.");
        } else if (password.length < 6) {
          alert("password는 6자리 이상으로 설정하세요.");
        }
      });
  };

  // email과 password로 login하기
  const emailLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        if (errorCode == "auth/wrong-password") {
          alert("잘못된 비밀번호입니다.");
        } else if (errorCode == "auth/user-not-found") {
          alert("없는 e-mail입니다.");
        }
      });
  };

  // Form의 onSubmit에 연결할 함수
  // Form의 경우 새로고침으로 값이 사라질 수 있다.
  // preventDefault()를 사용해 막아준다.
  const onSubmitLogin = (e) => {
    e.preventDefault();
    emailLogin();
  };

  // google로 login하기 (popup)
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Form onSubmit={onSubmitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <Button onClick={emailCreate}>Sign Up</Button>
      <Button onClick={googleLogin}>Google Log In</Button>
    </div>
  );
};

export default LoginForm;

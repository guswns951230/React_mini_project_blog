import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { userLogout } from "../modules/currentUser";

const HomeLink = () => {
  // const login = false;

  // redux의 state값을 가져와 확인
  const user = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  return (
    <div className="Home_Link">
      {user ? (
        <div>
          {/*
            로그인 했을때 보이는 링크
            관리자 페이지는 홈페이지 주인만 보이기
          */}
          <Link>Post</Link>
          <Link>방명록</Link>
          <Link>관리자페이지</Link>
          <Link>My Page</Link>
          <Link
            onClick={() => {
              dispatch(userLogout());
            }}
          >
            Log out
          </Link>
        </div>
      ) : (
        <div>
          {/* 로그인 되어있지 않을때 보이는 링크 */}
          <Link>Post</Link>
          <Link to="/gest">방명록</Link>
          <Link to="/loginform">로그인</Link>
        </div>
      )}
    </div>
  );
};

export default HomeLink;

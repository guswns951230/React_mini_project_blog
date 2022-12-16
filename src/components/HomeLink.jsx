import { Link } from "react-router-dom";

const HomeLink = () => {
  const login = false;
  return (
    <div className="Home_Link">
      {login ? (
        <div>
          {/*
            로그인 했을때 보이는 링크
            관리자 페이지는 홈페이지 주인만 보이기
          */}
          <Link>Post</Link>
          <Link>방명록</Link>
          <Link>관리자페이지</Link>
          <Link>My Page</Link>
          <Link>Log out</Link>
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
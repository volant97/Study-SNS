/* eslint-disable no-restricted-globals */
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Home() {
  const navigate = useNavigate();

  const handleLogoutBtnClick = async () => {
    const ok = confirm("로그아웃 하시겠습니까?");

    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };

  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <button onClick={handleLogoutBtnClick}>로그아웃</button>
    </div>
  );
}

export default Home;

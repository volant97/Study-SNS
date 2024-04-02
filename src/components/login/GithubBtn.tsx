import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function GithubBtn() {
  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      const provider = new GithubAuthProvider();

      await signInWithPopup(auth, provider); //팝업
      // await signInWithRedirect(auth, provider); //리다이렉트

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleOnClick}>
      {/* 깃허브 아이콘  추가*/}
      <div>깃허브 로그인</div>
    </button>
  );
}

export default GithubBtn;

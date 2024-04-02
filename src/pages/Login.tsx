import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import { StContainer, StPageToggle } from "../style/login";
import GithubBtn from "../components/login/GithubBtn";

function Login() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isLoading || email === "" || password === "") return;

    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StContainer>
      <h1>스터디로 함께하길</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="아이디"
          type="email"
          required
        />
        <input
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="비밀번호"
          type="password"
          required
        />
        <button type="submit">{isLoading ? "로딩중..." : "로그인"}</button>
      </form>
      <p className="error">{error === "" ? null : error}</p>
      <GithubBtn />
      <StPageToggle>
        <p>계정이 없으신가요?</p>
        <Link to={"/signup"}>계정 생성</Link>
      </StPageToggle>
    </StContainer>
  );
}

export default Login;

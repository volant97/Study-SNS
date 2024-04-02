import { Link, useNavigate } from "react-router-dom";
import { StContainer, StPageToggle } from "../style/login";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../firebase";

function SignUp() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "nickname") {
      setNickname(value);
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isLoading || email === "" || password === "" || nickname === "") return;

    try {
      setIsLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(credentials.user, { displayName: nickname });
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
          placeholder="아이디 (이메일)"
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
        <input
          name="nickname"
          value={nickname}
          onChange={handleOnChange}
          placeholder="닉네임"
          type="text"
          required
        />
        <button type="submit">{isLoading ? "로딩중..." : "회원가입"}</button>
      </form>
      <p className="error">{error === "" ? null : error}</p>
      <StPageToggle>
        <p>계정이 이미 있으신가요?</p>
        <Link to={"/login"}>로그인 하기</Link>
      </StPageToggle>
    </StContainer>
  );
}

export default SignUp;

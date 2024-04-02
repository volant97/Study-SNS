import { useNavigate } from "react-router-dom";
import { StContainer } from "../style/login";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../firebase";

function SignUp() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
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
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="닉네임"
          type="password"
          required
        />
        <button type="submit">{isLoading ? "로딩중..." : "회원가입"}</button>
      </form>
      <p>{error === "" ? null : error}</p>
    </StContainer>
  );
}

export default SignUp;

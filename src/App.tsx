import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";
import { useState } from "react";
import LoadingScreen from "./components/common/LoadingScreen";

function App() {
  // auth 구현 후 로딩중 연결
  const [isLoading, setIsLoading] = useState(false);

  return (
    <StContainer>
      <GlobalStyle />
      {isLoading ? <LoadingScreen /> : <Router />}
    </StContainer>
  );
}

export default App;

const StContainer = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
`;

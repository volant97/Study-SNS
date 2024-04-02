import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/common/LoadingScreen";
import { auth } from "./firebase";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

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

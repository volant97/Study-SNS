import styled from "styled-components";

function LoadingScreen() {
  return (
    <StContainer>
      <h1>로딩중...</h1>
    </StContainer>
  );
}

export default LoadingScreen;

const StContainer = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 24px;
  }
`;

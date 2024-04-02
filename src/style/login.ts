import styled from "styled-components";

export const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .error {
    color: red;
  }
`;

export const StPageToggle = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #ffb819;
    text-decoration-line: none;
  }
`;

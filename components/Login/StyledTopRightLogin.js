import styled from "styled-components";

export const StyledLoginDiv = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
`;
export const StyledLoginButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  color: white;
  background-color: ${(props) => (props.logout ? "#ff4d4d" : "#4caf50")};
  &:hover {
    opacity: 0.8;
  }
`;

import styled from "styled-components";

export const StyledLoginDiv = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
`;
export const StyledLoginLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  color: white;
  background-color: ${(props) => (props.logout ? "#ff4d4d" : "#4caf50")};
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

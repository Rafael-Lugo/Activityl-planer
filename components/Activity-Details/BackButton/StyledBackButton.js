import styled from "styled-components";

export const StyledBackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--primary);
  background-color: transparent;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    background-color: var(--primary);
    color: var(--background);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
`;

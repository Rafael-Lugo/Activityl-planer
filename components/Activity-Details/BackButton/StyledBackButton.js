import styled from "styled-components";

export const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0rem;
  border-radius: var(--radius);
  border: 1px solid var(--primary);
  background-color: var(--background-foreground);
  color: var(--primary);
  font-size: 10pt;
  font-weight: normal;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    background-color: var(--accent);
    color: var(--accent-foreground);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
`;

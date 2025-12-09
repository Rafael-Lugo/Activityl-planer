import styled from "styled-components";

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 10pt;
  font-weight: normal;

  background-color: var(--background-foreground);
  color: var(--accent-foreground);

  border: none;
  border-radius: 999px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: max-content;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

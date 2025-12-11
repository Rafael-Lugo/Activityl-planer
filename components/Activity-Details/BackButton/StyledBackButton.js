import styled from "styled-components";

export const StyledBackButton = styled.button`
  background-color: var(--background-secondary);
  border: none;
  padding: 0.6rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s ease, box-shadow 0.2s ease,
    transform 0.15s ease;

  svg {
    width: 32px;
    height: 32px;
  }

  svg path {
    stroke: var(--primary);
    fill: var(--primary);
    transition: fill 0.2s ease, stroke 0.2s ease;
  }

  &:hover {
    background-color: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:hover svg path {
    stroke: var(--background);
    fill: var(--background);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

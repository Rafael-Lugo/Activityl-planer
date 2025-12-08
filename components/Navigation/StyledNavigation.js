import Link from "next/link";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--background-tertiary);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1rem;
  list-style: none;
  gap: 2rem;
`;

export const NavigationListItem = styled.li`
  margin: 0;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  border-radius: 999px;
  /* flex-direction: column; */
  justify-content: center;
  text-decoration: none;
  color: ${({ $highlighted }) =>
    $highlighted ? "var(--accent-foreground)" : "var(--background-secondary)"};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem;
  transition: all 0.2s ease;
  /* background-color: ${(props) =>
    props.$highlighted
      ? "var(--background-foreground)"
      : "var(--background-secondary)"}; */

  svg {
    width: 48px;
    height: 48px;
    overflow: visible;
    display: block;
  }

  svg path, svg circle , svg line {
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    /* stroke: ${(props) =>
      props.$highlighted ? "var(--accent-foreground)" : "var(--background)"}; */
    fill: none;
  }

  &:hover {
    color: var(--accent);
    /* background-color: var(--background-foreground); */
  }
`;

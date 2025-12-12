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
 
  justify-content: center;
  text-decoration: none;
  color: ${({ $highlighted }) =>
    $highlighted ? "var(--accent-foreground)" : "var(--background-secondary)"};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem;
  transition:
    transform 0.15s ease,
    filter 0.2s ease,
    color 0.2s ease,
    stroke 0.2s ease,
    fill 0.2s ease;
  

  svg {
    width: 32px;
    height: 32px;
    overflow: visible;
    display: block;
  }

  svg path, svg circle , svg line {
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
   
    fill: none;
    transition: stroke 0.2s ease, fill 0.2s ease;
  }

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.15);
    color: var(--accent);    
  }

    &:hover svg path {
    stroke: var(--accent);
    fill: none;
    }
`;

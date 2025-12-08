import Link from "next/link";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--background-secondary);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  padding: 0;
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
  border-radius: var(--radius);
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 3rem ;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.$highlighted ? "var(--background-foreground)" : "var(--background)")};
  
  &:hover {
background-color: var(--accent);
color: var(--accent-foreground);
  }

`;
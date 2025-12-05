import Link from "next/link";
import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #676c70ff;
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
  border: 2px solid;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #ecf0f1;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 3rem;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.$highlighted ? "#a9a9a9" : "#000")};

  &:hover {
    background-color: white;
    color: black;
  }
`;

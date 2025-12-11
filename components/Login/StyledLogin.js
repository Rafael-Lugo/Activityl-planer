import Link from "next/link";
import styled from "styled-components";

export const StyledLoginContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 1rem;
`;
export const StyledLoginBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 1rem;
`;
export const StyledLoginButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;
  cursor: pointer;
  background-color: #6e7681;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledLoginHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #24292f;
  margin-bottom: 1rem;
  text-align: center;
`;

export const StyledLoginPromptDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  padding: 1.5rem 2rem;
  background-color: #ffeb3b;
  color: #333;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

export const StyledRestrictionLink = styled(Link)`
  padding: 1px;
  margin-left: 0.25rem;
  color: black;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

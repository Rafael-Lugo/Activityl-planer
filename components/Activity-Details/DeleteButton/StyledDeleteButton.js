import styled from "styled-components";

export const DeleteButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DeletePrimaryButton = styled.button`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: none;
  background-color: #b00020;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    background-color: #c21b2f;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const ConfirmBox = styled.div`
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  background-color: var(--background-secondary);
  color: var(--card-foreground);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 20rem;
`;

export const ConfirmActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ConfirmButton = styled.button`
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background-color 0.15s ease, color 0.15s ease;

  ${({ $variant }) =>
    $variant === "cancel"
      ? `
    background-color: transparent;
    color: var(--primary);
    border: 1px solid var(--primary);
    &:hover { background-color: var(--primary); color: var(--background); }
  `
      : `
    background-color: #b00020;
    color: #ffffff;
    &:hover { background-color: #c21b2f; }
  `};
`;
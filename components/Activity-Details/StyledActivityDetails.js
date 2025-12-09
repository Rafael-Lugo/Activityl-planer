import styled from "styled-components";

// styling erfolgt später

export const DetailsPageHeader = styled.header`
display: flex;
  flex-direction: column;
  gap: 1rem;

`;


export const DetailsPageWrapper = styled.main`
max-width: 480px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: var(--background-secondary);

`;

export const DetailsTitle = styled.h1`
  font-size: 32pt;
  font-weight: normal;
  margin: 0;
  color: var(--primary);
`;

export const DetailsImage = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: var(--radius);
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

export const DetailsSection = styled.section`
    display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const DetailsLabel = styled.span`
  font-weight: 700;
  color: var(--primary);
`;

export const DetailsText = styled.p`
  margin: 0;
  color: var(--card-foreground);
  font-size: 10pt;
`;

export const InlineForm = styled.form`
    display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InlineInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;
  border: 1px solid var(--background-foreground);
  background-color: var(--background-foreground);
  color: var(--primary);
  font: inherit;
`;

export const InlineSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;
  border: 1px solid var(--background-foreground);
  background-color: var(--background-foreground);
  color: var(--primary);
  font: inherit;
`;

export const InlineSaveButton = styled.button`
  align-self: flex-start;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: none;
  background-color: var(--accent);
  color: var(--accent-foreground);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
`;

export const EditContainer = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const EditToggleButton = styled.button`
  align-self: flex-start;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--primary);
  background-color: #ffffff;
  color: #000000;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    background-color: var(--primary);
    color: var(--background);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
`;
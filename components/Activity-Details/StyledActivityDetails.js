import styled from "styled-components";

export const DetailsPageHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  gap: 1rem;
`;

export const DetailsPageWrapper = styled.main`
  max-width: 480px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const DetailsTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
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
  font-size: 1.31rem;
  font-weight: 700;
  color: var(--primary);
`;

export const DetailsText = styled.p`
  margin: 0;
  color: var(--card-foreground);
  font-size: 1.19rem;
  font-weight: 400;
`;

export const InlineForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InlineInput = styled.input`
  width: 100%;
  padding: 0.8rem 0.7rem;
  border-radius: 1.5rem;
  border: 1px solid var(--accent);
  background-color: var(--card-foreground);
  color: var(--input);
  font: inherit;
`;

export const InlineTextarea = styled.textarea`
  width: 100%;
  min-height: 7rem;
  padding: 0.8rem 0.7rem;
  border-radius: 1.5rem;
  border: 3px solid var(--accent);
  background-color: #ffffff;
  color: var(--input);
  font: inherit;
  font-size: 1.19rem;
  resize: vertical;
  box-sizing: border-box;
`;

export const InlineSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.7rem;
  border-radius: 1.5rem;
  border: 1px solid var(--accent);
  background-color: var(--card-foreground);
  color: var(--input);
  font: inherit;
  box-sizing: border-box;
`;

export const InlineSaveButton = styled.button`
  align-self: flex-start;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: none;
  background-color: var(--accent);
  color: var(--accent-foreground);
  font-size: 0.81rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    background-color: var(--accent-foreground);
    color: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const FieldWrapper = styled.section`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FieldHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: transparent;
  color: var(--primary);
  font-size: 0.81rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
     background-color: var(--primary);
    color: var(--background-secondary);
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const EditPanel = styled.div`
  background-color: transparent;
  border-radius: 2rem;
  padding: 1.5rem;
  border: 2px solid var(--primary);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EditPanelLabel = styled.span`
  font-weight: 700;
  font-size: 1.19rem;
  color: var(--primary);
`;

export const CancelButton = styled.button`
  align-self: flex-end;
  margin-top: 0%.75rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--alert);
  background-color: transparent;
  color: var(--alert);
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    background-color: var(--alert-foreground);
    color: var(--background);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }
`;

import styled from "styled-components";

export const FileInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const StyledFileInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const FileInputButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border: 2px dashed var(--accent);
  border-radius: 1.5rem;
  background-color: var(--card);
  color: var(--primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover {
    border-color: var(--primary);
    background-color: var(--accent);
    color: var(--accent-foreground);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const UploadIcon = styled.span`
  font-size: 1.2rem;
`;

export const PreviewImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 1rem;
  border-radius: var(--radius);
  border: 2px solid var(--accent);
  object-fit: cover;
`;

export const FileName = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--muted-foreground);
  text-align: center;
`;
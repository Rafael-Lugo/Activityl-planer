import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: system-ui;
  justify-content: center;
  background: var(--background);
  padding-top: 80px;
`;

export const StyledMain = styled.main`
  background: var(--background);
  align-content: center;
  gap: 3rem;
`;

export const Content = styled.section`
  flex: 1;
  padding: 1.5rem 1.5rem 6rem;
`;

export const Title = styled.h1`
  background: var(--primary);
  font-size: 32pt;
  color: var(--primary);
  align-self: center;
`;

export const Subtitle = styled.h2`
  font-size: 18pt;
  text-align: center;
  padding: 7rem 0rem 0 0rem;
  margin: 0;
  color: var(--secondary);
`;

export const CardDescription = styled.h3`
  font-size: 18pt;
  color: var(--primary);
  margin: 35px 0 0 0;
`;

export const Text = styled.p`
  color: var(--secondary);
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-top: 3rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledActivityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ActivityItem = styled.li`
  font-size: 10pt;
  padding: 10px;
  list-style: none;
  gap: 1.5rem;
`;

export const StyledButton = styled.button`
  margin-top: 3rem;
`;

//Card Layout

export const Card = styled.article`
  width: 100%;
  max-width: 340px;
  border-radius: var(--radius);
  box-shadow: var(--card);
  /* padding: 1rem; */
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  position: relative;
  /* color: var() (--card-foreground); */
  aspect-ratio: 1 / 1;
  display: block;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CardTitle = styled.h2`
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;
  margin: 0;
  font-size: 30pt;
  font-weight: bold;
  color: var(--card-foreground);
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1.5rem 6rem;
  margin: 0;
  list-style: none;
`;

export const CardBookmarkWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--bookmark);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const CardMeta = styled.ul`
  width: 100%;
  max-width: 340px;
  margin: 0.75rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const CardMetaItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary);
`;

export const CategoryList = styled.ul`
  width: 100%;
  max-width: 340px;
  margin: 0.5rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  gap: 1rem;
  list-style: none;
`;

export const CategoryItem = styled.li`
  font-size: 0.85rem;
  color: var(--primary);
`;

//Icon Button Favorite

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 32px;
    height: 32px;
  }

  svg path {
    stroke: var(--accent);
    fill: ${({ $isLiked }) => ($isLiked ? "var(--accent)" : "none")};
    transition: fill 0.2s ease, stroke 0.2s ease;
  }

  &:hover svg path {
    fill: var(--accent);
  }
`;

// Form Styles

export const Container = styled.section`
  flex: 1;
  padding: 1.5rem 1.5rem 10rem;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 12pt;
  font-weight: normal;
  color: var(--primary);
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  background-color: var(--background-foreground);
  color: var(--primary);
  font: inherit;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 5rem;
  padding: 0.6rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--card);
  background-color: var(--background-foreground);
  color: var(--primary);
  font-size: 10pt;
  resize: vertical;
  box-sizing: border-box;
  font: inherit;

  &:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  background-color: var(--background-foreground);
  color: var(--primary);
  font: inherit;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

export const StyledFormButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  border: none;
  background-color: var(--accent);
  color: var(--accent-foreground);
  font-weight: bold;
  font-size: 12pt;
  cursor: pointer;
  align-self: flex-start;
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

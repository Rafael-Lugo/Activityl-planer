import { Image } from "lucide-react";
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
  font-size: 20pt;
  align-self: center;
  color: var(--secondary);
`;

export const CardDescription = styled.h3`
  font-size: 18pt;
  color: var(--primary);
  margin: 35px 0 0 0;
`;

export const Text = styled.p`
  color: var(--secondary);
  font-size: 10pt;
  margin: 0 5rem 0 0;
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
  border-radius: var(--radius);
  box-shadow: var(--card);
  /* padding: 1rem; */
  margin: 1rem 0;
  overflow: hidden;
  position: relative;
  /* color: var() (--card-foreground); */
  aspect-ratio: 1/1;
  /* display: block; */
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
  color: var(--primary);
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1.5rem;
  margin: 0;
  list-style: none;
`;

export const CardBookmarkWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
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
    fill: ${({ isLiked }) => (isLiked ? "var(--accent)" : "transparent")};
    transition: fill 0.2s ease;
  }

  &:hover svg path {
    fill: var(--accent);
  }
`;

import styled from "styled-components";

export const PageWrapper = styled.body`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: system-ui;
  justify-content: center;
  background: var(--background);
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
  background: #12ad55;
  font-size: 32pt;
  color: var(--primary);
  align-content: center;
`;

export const Subtitle = styled.h2`
  font-size: 20pt;
`;

export const h3 = styled.h3`
  font-size: 18pt;
`;

export const Text = styled.p`
  font-size: 10pt;
  margin: 0 5rem 0 0;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Activitylist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
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

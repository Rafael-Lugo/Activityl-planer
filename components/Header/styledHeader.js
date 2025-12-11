import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;

  background: var(--background-secondary);
  color: var(--primary);
  border-bottom: 1px solid var(--primary-foreground);
  z-index: 1000;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 2%.69;
  font-weight: 700;
  margin: 0;
  color: var(--primary);
  text-align: center;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

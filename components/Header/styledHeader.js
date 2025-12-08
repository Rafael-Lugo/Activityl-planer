import styled from "styled-components";

export const HeaderWrapper = styled.header`
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--background);
  color: var(--primary);
  border-bottom: 1px solid var(--primary-foreground);
  z-index: 1000;
`

export const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`

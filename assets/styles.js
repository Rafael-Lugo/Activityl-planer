import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {   
  --radius: 0.5rem;   
  --background:  #343607;
  --background-foreground: #929252ff;
  --background-secondary: #626235;
  --card-foreground: #ffffff;
  --primary: #c6c667;
  --secondary:  #625235;
  --terciary: #676c70ff;   
  --primary-foreground:  #c6c667;
  --accent:  #7c6eba;   
  --accent-foreground:  #faf4b0;
}

.dark {
--radius: 0.65rem;   
  --background:  #ffffff;
  --card: none;
  --card-foreground: #000000;
  --primary: #000000;
  --secondary:  '';   
  --secondary-foreground:  oklch(0.205 0 0);
  --accent:  #12ad55;   
  --accent-foreground:  #000000;
}

body {
   display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: system-ui;
  justify-content: center;
  background: var(--background)

}

`;

export const CardBookmarkWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;


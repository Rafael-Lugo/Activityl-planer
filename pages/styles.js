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
  --background-secondary: #202114;
  --background-tertiary: #626235;
  --card-foreground: #ffffff;
  --card: #202114
  --primary: #c6c667;
  --secondary:  #625235;
  --terciary: #676c70ff;   
  --primary-foreground:  #c6c667;
  --accent:  #7c6eba;   
  --accent-foreground:  #faf4b0;
}

/* .dark {
--radius: 0.65rem;   
  --background:  #ffffff;
  --card: none;
  --card-foreground: #000000;
  --primary: #000000;
  --secondary:  '';   
  --secondary-foreground:  oklch(0.205 0 0);
  --accent:  #12ad55;   
  --accent-foreground:  #000000;
} */

body {
  margin: 0;
  font-family: system-ui;
  background: var(--background);

}
`;

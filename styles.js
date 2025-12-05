import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {   
  --radius: 0.65rem;   
  --background:  #ffffff;
  --card: none;
  --card-foreground: #000000;
  --primary: #000000ff;
  --secondary:  #ca1313ff;
  --terciary: #676c70ff;   
  --secondary-foreground:  oklch(0.205 0 0);
  --accent:  #12ad55;   
  --accent-foreground:  #000000;
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

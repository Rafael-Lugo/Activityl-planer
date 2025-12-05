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
  --secondary:  oklch(0.97 0 0);   
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
  --secondary:  oklch(0.97 0 0);   
  --secondary-foreground:  oklch(0.205 0 0);
  --accent:  #12ad55;   
  --accent-foreground:  #000000;
}




`;

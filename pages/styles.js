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
  --background:  #B3B49F;
  --background-foreground: #929252ff;
  --background-secondary: #202114;
  --background-tertiary: #626235;
  --card-foreground: #ffffff;
  --input: #000000;
  --card: #202114;
  --bookmark: #343607;
  --primary: #E3E363;
  --secondary:  #625235;
  --terciary: #676c70ff;   
  --primary-foreground:  #c6c667;
  --accent:  #7c6eba;   
  --accent-foreground:  #faf4b0;
  --alert: #9A3305;
  --alert-foreground: #C74004;
}

 /* .dark {
--radius: 0.5rem;   
   --background:           #181910;  
    --background-foreground: #E5E5D5;   
    --background-secondary: #202114;  
    --background-tertiary:  #3b3d22;

    --card:                 #262716;
    --card-foreground:      #F7F7EA;

    --input:                #ffffff;

    --bookmark:             #C5C76A;  

    --primary:              #E3E363;  
    --primary-foreground:   #202114;   

    --secondary:            #A89F7A;
    --terciary:             #9AA0A4;

    --accent:               #A694FF;   
    --accent-foreground:    #202114;

    --alert:                #FF8A4A;
    --alert-foreground:     #3E1200;
} */

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-family: system-ui;
  background: var(--background);

}
`;

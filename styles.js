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

  body {
    display: flex;
    flex-wrap: wrap;
    font-family: system-ui;
    justify-content: center;
    background: var(--background);
  }

  main, div {
      
    background: var(--background);
    align-content: center;
    gap: 3rem;
    }

 
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
    }

    button {
      margin-top: 3rem;
    }


  h1 {
    background: #12ad55;
  font-size: 32pt;
  color: var(--primary);
  align-content: center;
  }

  h2 {
    font-size: 20pt;

  }

  h3 {
    font-size: 18pt;

  }

  li{
    font-size: 10pt;
    padding: 10px;
    list-style: none;
    gap: 1.5rem;

  }

  ul{
    padding: 0;
  }

  p{
    font-size: 10pt;
    margin: 0 5rem 0 0;
  }

`;

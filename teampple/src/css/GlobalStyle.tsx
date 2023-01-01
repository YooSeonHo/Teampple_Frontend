import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    margin: 0;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    line-height: 0;
  }
`;

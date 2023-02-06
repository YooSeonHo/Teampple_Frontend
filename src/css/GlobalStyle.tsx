import { createGlobalStyle } from 'styled-components';
import '../css/fonts/font';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    margin: 0;
    font-family: 'Pretendard-Regular', 'Apple SD Gothic Neo';
    
    color: #383838;
    
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    line-height: 0;
    font-family: 'Pretendard-SemiBold', 'Apple SD Gothic Neo';
    
  }

  @font-face {
        font-family: 'Pretendard-Regular' , 'Apple SD Gothic Neo';
        src: local('Pretendard-Regular'), local('Pretendard-Regular');
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  }
  @font-face {
        font-family: 'Pretendard-SemiBold', 'Apple SD Gothic Neo';
        src: local('Pretendard-SemiBold'), local('Pretendard-SemiBold');
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
  }

  input:focus {outline: none;} /* outline 테두리 없애기 */
`;

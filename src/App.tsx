import React from 'react';
import Router from './Router';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './css/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

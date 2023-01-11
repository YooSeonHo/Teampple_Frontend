import React from 'react';
import Router from './Router';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './css/GlobalStyle';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;

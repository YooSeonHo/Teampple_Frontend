import React,{useEffect,useRef} from 'react';
import Router from './Router';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './css/GlobalStyle';

function App() {
  const myRef = useRef<any | undefined>({});

  useEffect(() => {
    if (myRef.current.onSilentRefresh) {
      myRef.current.onSilentRefresh();
    }
  }, []);
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router ref={myRef}/>
    </RecoilRoot>
  );
}

export default App;
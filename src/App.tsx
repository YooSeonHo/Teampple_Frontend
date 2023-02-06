import React, { useEffect } from 'react';
import Router from './Router';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './css/GlobalStyle';
import axios from 'axios';
import { baseURL } from 'api/client';

function App() {
  const accessToken = localStorage.getItem('jwt_accessToken');
  const refreshToken = localStorage.getItem('jwt_refreshToken');

  const reToken = async () => {
    if (refreshToken) {
      await axios({
        url: '/api/auth/reIssuance',
        baseURL: baseURL,
        method: 'post',
        headers: {
          Authorization: accessToken,
        },
        data: {
          jwtAccessToken: accessToken,
          jwtRefreshToken: refreshToken,
        },
      })
        .then((response) => {
          console.log(response);
          localStorage.setItem(
            'jwt_accessToken',
            response.data.data.jwtAccessToken,
          );
          localStorage.setItem(
            'jwt_refreshToken',
            response.data.data.jwtRefreshToken,
          );
          setInterval(reToken, 1200000);
        })
        .catch((error) => {
          console.log(error);
          alert('로그인 연장 실패. 다시 로그인하세요.');
          localStorage.removeItem('jwt_accessToken');
          localStorage.removeItem('jwt_refreshToken');
        });
    }
  };

  if (performance.navigation.type === 1) {
    //새로고침하면 바로 로그인 연장(토큰 갱신)
    reToken();
  }

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;

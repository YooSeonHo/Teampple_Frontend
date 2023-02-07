import React, { useEffect } from 'react';
import Router from './Router';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './css/GlobalStyle';
import axios from 'axios';
import { baseURL } from 'api/client';
import { BrowserRouter } from 'react-router-dom';

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
          localStorage.removeItem('jwt_accessToken');
          localStorage.removeItem('jwt_refreshToken');
          location.reload();
          alert('로그인 연장 실패. 다시 로그인하세요.');
        });
    }
  };

  useEffect(() => {
    //페이지 변화할 때마다(는 좀 이상), 새로고침할 때마다 토큰 갱신
    reToken();
  }, [location]);

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

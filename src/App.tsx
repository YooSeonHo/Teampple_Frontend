import React, { useEffect } from 'react';
import Router from './Router';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './css/GlobalStyle';
import axios from 'axios';

function App() {
  const accessToken = localStorage.getItem('jwt_accessToken');
  const refreshToken = localStorage.getItem('jwt_refreshToken');

  useEffect(() => {
    const reToken = async () => {
      if (refreshToken) {
        await axios({
          url: '/api/auth/reIssuance',
          baseURL: 'https://www.teampple.site/',
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
            console.log(response.data.data);
            localStorage.setItem(
              'jwt_accessToken',
              response.data.data.jwtAccessToken,
            );
            localStorage.setItem(
              'jwt_refreshToken',
              response.data.data.jwtRefreshToken,
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    reToken();
    setInterval(reToken, 25 * 60 * 1000);
  }, []);

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;

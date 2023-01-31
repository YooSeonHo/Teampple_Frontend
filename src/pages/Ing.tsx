import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import {
  idTokenState,
  kakaoAccessTokenState,
  kakaoRefreshTokenState,
  jwtAccessTokenState,
  jwtRefreshTokenState,
} from 'state';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';

const Ing = forwardRef((props:any, ref: any) => {
  const navigate = useNavigate();
  const [idToken, setIdToken] = useRecoilState(idTokenState);
  const [kakaoAccessToken, setKakaoAccessToken] = useRecoilState(
    kakaoAccessTokenState,
  );
  const [kakaoRefreshToken, setKakaoRefreshToken] = useRecoilState(
    kakaoRefreshTokenState,
  );
  const [jwtAccessToken, setjwtAccessToken] =
    useRecoilState(jwtAccessTokenState);
  const [jwtRefreshToken, setjwtRefreshToken] =
    useRecoilState(jwtRefreshTokenState);
  
  const postAuthLoginAPI = async () => {
    await axios({
      url: `/api/auth/login`,
      baseURL: 'https://www.teampple.site/',
      method: 'post',
      data: {
        // idToken: idToken,
        // oauthAccessToken: kakaoAccessToken,
        // oauthRefreshToken: kakaoRefreshToken,

        // 테스트용
        idToken: 'kakaoU2',
        oauthAccessToken: 'string',
        oauthRefreshToken: 'string',
      },
    })
      .then((response) => {
        console.log(response);
        setjwtAccessToken(response.data.data.jwtAccessToken);
        setjwtRefreshToken(response.data.data.jwtRefreshToken);
        localStorage.setItem(
          'jwt_accessToken',
          response.data.data.jwtAccessToken,
        );
        localStorage.setItem(
          'jwt_refreshToken',
          response.data.data.jwtRefreshToken,
        );
        onLoginSuccess();
        navigate('/home');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    postAuthLoginAPI();
  }, []);

  const JWT_EXPIRY_TIME = 1800 * 1000;

  const onSilentRefresh = () => {
    //리프레시 토큰 재발급 요청
    axios
      .post('/api/auth/reIssuance', {
        jwtAccessToken: jwtAccessToken,
        jwtRefreshToken: jwtRefreshToken,
      })
      .then((response) => {
        onLoginSuccess;
        console.log(response.data);
        localStorage.setItem('jwt_accessToken', response.data.jwtAccessToken);
        localStorage.setItem('jwt_refreshToken', response.data.jwtRefreshToken);
      })
      .catch((error) => {
        console.log(error);
        navigate('/login');
      });
  };

  useImperativeHandle(ref, () => ({
    onSilentRefresh
  }));

  const onLoginSuccess = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwtAccessToken}`;
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
  };

  

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BeatLoader color="#487aff" size={50} />
    </div>
  );
});

Ing.displayName = 'Ing';

export default Ing;

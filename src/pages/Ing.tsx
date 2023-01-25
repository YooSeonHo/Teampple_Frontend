import React, { useState, useEffect } from 'react';
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

const Ing = () => {
  const navigate = useNavigate();
  const [idToken, setIdToken] = useRecoilState(idTokenState);
  const [kakaoAccessToken, setKakaoAccessToken] = useRecoilState(
    kakaoAccessTokenState,
  );
  const [kakaoRefreshToken, setKakaoRefreshToken] = useRecoilState(
    kakaoRefreshTokenState,
  );
  const [, setjwtAccessToken] = useRecoilState(jwtAccessTokenState);
  const [, setjwtRefreshToken] = useRecoilState(jwtRefreshTokenState);
  const postAuthLoginAPI = async () => {
    await axios({
      url: `/api/auth/login`,
      baseURL: 'https://www.teampple.site/',
      method: 'post',
      data: {
        idToken: idToken,
        oauthAccessToken: kakaoAccessToken,
        oauthRefreshToken: kakaoRefreshToken,

        // 테스트용
        // idToken: 'kakaoU2',
        // oauthAccessToken: 'string',
        // oauthRefreshToken: 'string',
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
        alert('카카오 로그인 성공 (홈으로 이동합니다)');
        navigate('/home');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    postAuthLoginAPI();
    console.log(idToken);
    console.log(kakaoAccessToken);
  }, []);
  return <div>로그인 중...</div>;
};

export default Ing;
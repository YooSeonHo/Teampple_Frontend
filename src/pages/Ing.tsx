import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import { baseURL } from 'api/client';

const Ing = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. accessToken, refreshToken 저장
    localStorage.setItem(
      'jwt_accessToken',
      location.search.split('=')[1].split('&')[0],
    );
    localStorage.setItem('jwt_refreshToken', location.search.split('=')[2]);
    // 2. 초대코드 존재하면 참여 post 전송
    if (localStorage.getItem('code')) {
      joinTeam();
      localStorage.removeItem('code');
    }
    // 3. 토큰 저장 (1번 과정) 성공하면 토큰 연장 걸어두고 홈으로 이동
    if (localStorage.getItem('jwt_accessToken')) {
      setInterval(reToken, 1200000);
      navigate('/home');
      window.location.reload();
    } else window.location.reload();
  }, []);

  const joinTeam = async () => {
    await axios({
      url: `/api/invitations`,
      baseURL: baseURL,
      method: 'post',
      params: {
        code: localStorage.getItem('code'),
      },
      headers: {
        Authorization: location.search.split('=')[1].split('&')[0],
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const reToken = async () => {
    if (localStorage.getItem('jwt_accessToken')) {
      await axios({
        url: '/api/auth/reIssuance',
        baseURL: baseURL,
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('jwt_accessToken'),
        },
        data: {
          jwtAccessToken: localStorage.getItem('jwt_accessToken'),
          jwtRefreshToken: localStorage.getItem('jwt_refreshToken'),
        },
      })
        .then((response) => {
          console.log('ing page retoken()', response);
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
          alert('로그인 연장 실패. 다시 로그인하세요.');
        });
    }
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
};

export default Ing;

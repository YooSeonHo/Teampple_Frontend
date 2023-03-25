import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import { baseURL } from 'api/client';
import authAPI from 'api/authAPI';
import inviteAPI from 'api/inviteAPI';

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
    // 2. 토큰 저장 -> 유효성 검사 (로그인)
    if (localStorage.getItem('jwt_accessToken')) {
      reToken();
      // 3. 초대코드 존재하면 참여 post 전송, 조건별 리다렉
      if (localStorage.getItem('code')) {
        joinTeam();
        localStorage.removeItem('code');
      } else {
        window.open('/home', '_self');
      }
    } else window.location.reload();
  }, []);

  const joinTeam = async () => {
    // await axios({
    //   url: `/api/invitations`,
    //   baseURL: baseURL,
    //   method: 'post',
    //   params: {
    //     code: localStorage.getItem('code'),
    //   },
    //   headers: {
    //     Authorization: location.search.split('=')[1].split('&')[0],
    //   },
    // })
    //문제 생기면 이부분 체크해보기.
    inviteAPI.postInvite(localStorage.getItem('code'))
      .then((res) => {
        navigate(`/teample-home/${res.data.data.teamId}`);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        alert('유효하지 않은 팀플입니다.');
        navigate('/login');
      });
  };

  const reToken = () => {
    if (localStorage.getItem('jwt_accessToken')) {
      // axios({
      //   url: '/api/auth/reIssuance',
      //   baseURL: baseURL,
      //   method: 'post',
      //   headers: {
      //     Authorization: localStorage.getItem('jwt_accessToken'),
      //   },
      //   data: {
      //     jwtAccessToken: localStorage.getItem('jwt_accessToken'),
      //     jwtRefreshToken: localStorage.getItem('jwt_refreshToken'),
      //   },
      // })
      authAPI.postRetoken()
        .then((response) => {
          localStorage.setItem(
            'jwt_accessToken',
            response.data.data.jwtAccessToken,
          );
          localStorage.setItem(
            'jwt_refreshToken',
            response.data.data.jwtRefreshToken,
          );
          setInterval(reToken, 1800000);
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem('jwt_accessToken');
          localStorage.removeItem('jwt_refreshToken');
          alert('로그인 실패. 다시 로그인하세요.');
          window.open('/login', '_self');
        });
    }
  };

  return (
    <div
      style={{
        width: '100%',
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

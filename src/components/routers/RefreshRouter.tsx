import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from 'api/client';
import BeatLoader from 'react-spinners/BeatLoader';

const RefreshRouter = () => {
  const accessToken = localStorage.getItem('jwt_accessToken');
  const refreshToken = localStorage.getItem('jwt_refreshToken');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const reToken = async () => {
    setIsLoading(true);
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
          setIsLoading(false);
          console.log('reissue');
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem('jwt_accessToken');
          localStorage.removeItem('jwt_refreshToken');
          alert('로그인 연장 실패. 다시 로그인하세요.');
          window.open('/login', '_self');
        });
    }
  };

  useEffect(() => {
    reToken();
    setInterval(reToken, 1800000);
  }, []);

  return (
    <>
      {isLoading ? (
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
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default RefreshRouter;

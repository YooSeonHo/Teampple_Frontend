import React, {  useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';

const Ing = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('jwt_accessToken', location.search.split('=')[1]);
    joinTeam();
    navigate('/home');
    window.location.reload();
    localStorage.removeItem('code');
  }, []);


  const joinTeam = async () => {
    await axios({
      url: `/api/invitations`,
      baseURL: 'https://www.teampple.site/',
      method: 'post',
      params: {
        code: localStorage.getItem('code'),
      },
      headers: {
        Authorization: location.search.split('=')[1],
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const [idToken, setIdToken] = useRecoilState(idTokenState);
  // const [kakaoAccessToken, setKakaoAccessToken] = useRecoilState(
  //   kakaoAccessTokenState,
  // );
  // const [kakaoRefreshToken, setKakaoRefreshToken] = useRecoilState(
  //   kakaoRefreshTokenState,
  // );
  // const [jwtAccessToken, setjwtAccessToken] =
  //   useRecoilState(jwtAccessTokenState);
  // const [jwtRefreshToken, setjwtRefreshToken] =
  //   useRecoilState(jwtRefreshTokenState);

  // const postAuthLoginAPI = async () => {
  //   await axios({
  //     url: `/api/auth/login`,
  //     baseURL: 'https://www.teampple.site/',
  //     method: 'post',
  //     data: {
  //       // idToken: idToken,
  //       // oauthAccessToken: kakaoAccessToken,
  //       // oauthRefreshToken: kakaoRefreshToken,

  //       // 테스트용
  //       idToken: 'kakaoU2',
  //       oauthAccessToken: 'string',
  //       oauthRefreshToken: 'string',
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       setjwtAccessToken(response.data.data.jwtAccessToken);
  //       setjwtRefreshToken(response.data.data.jwtRefreshToken);
  //       localStorage.setItem(
  //         'jwt_accessToken',
  //         response.data.data.jwtAccessToken,
  //       );
  //       localStorage.setItem(
  //         'jwt_refreshToken',
  //         response.data.data.jwtRefreshToken,
  //       );
  //       setInterval(reToken, 1200000);
  //       navigate('/home');
  //       location.reload();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       alert('로그인 실패. 다시 시도하세요.');
  //       navigate('/login');
  //     });
  // };
  // // useEffect(() => {
  // //   postAuthLoginAPI();
  // // }, []);

  // const reToken = async () => {
  //   if (jwtRefreshToken) {
  //     await axios({
  //       url: '/api/auth/reIssuance',
  //       baseURL: 'https://www.teampple.site/',
  //       method: 'post',
  //       headers: {
  //         Authorization: jwtAccessToken,
  //       },
  //       data: {
  //         jwtAccessToken: jwtAccessToken,
  //         jwtRefreshToken: jwtAccessToken,
  //       },
  //     })
  //       .then((response) => {
  //         console.log(response.data.data);
  //         localStorage.setItem(
  //           'jwt_accessToken',
  //           response.data.data.jwtAccessToken,
  //         );
  //         localStorage.setItem(
  //           'jwt_refreshToken',
  //           response.data.data.jwtRefreshToken,
  //         );
  //         setInterval(reToken, 1200000);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         localStorage.removeItem('jwt_accessToken');
  //         localStorage.removeItem('jwt_refreshToken');
  //         navigate('/login');
  //       });
  //   }
  // };

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

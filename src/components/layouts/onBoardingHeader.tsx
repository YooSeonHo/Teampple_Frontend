import styled from 'styled-components';
import React from 'react';
import logo from '../../components/images/onboardingLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from 'api/client';

const HeaderBox = styled.div`
  width: 100vw;
  height: 7.5vh;
  background-color: #ffffff;
  display: flex;
  font-weight: 600;
  font-size: 1.25vw;
  white-space: nowrap;
  position: relative;
  z-index: 998;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-left: 19.4vw;
  margin-top: auto;
  margin-bottom: auto;

  .logo {
    margin: auto;
    height: 4.53803vh;
    width: 10.83333vw;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Contents = styled.div`
  font-weight: 600;
  font-size: 0.9374vw;
  line-height: 140%;
  color: #383838;
  margin-right: 19.4vw;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;

  .aboutUs,
  .plan,
  .service {
    margin-right: 1.4vw;
  }

  .aboutUs:hover,
  .plan:hover,
  .login:hover,
  .service:hover {
    cursor: grab;
    border-bottom: 1px solid black;
  }
`;

const OnBoardingHeader = () => {
  const token = localStorage.getItem('jwt_accessToken');
  const navigate = useNavigate();

  const postAuthLogoutAPI = async () => {
    await axios({
      url: `/api/auth/logout`,
      baseURL: baseURL,
      method: 'post',
      headers: {
        Authorization: token,
      },
      data: {
        jwtAccessToken: localStorage.getItem('jwt_accessToken'),
        jwtRefreshToken: localStorage.getItem('jwt_refreshToken'),
      },
    })
      .then(() => {
        localStorage.removeItem('jwt_accessToken');
        localStorage.removeItem('jwt_refreshToken');
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <HeaderBox>
      <Logo>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <img src={logo} />
          </div>
        </Link>
      </Logo>
      <Contents>
        <div className="aboutUs">ABOUT US</div>
        <div className="plan">PLAN</div>
        <div className="service">SERVICE</div>
        {token ? (
          <div className="login" onClick={postAuthLogoutAPI}>
            LOGOUT
          </div>
        ) : (
          <Link
            to="/login"
            style={{ textDecoration: 'none', color: '#383838' }}
          >
            <div className="login">LOGIN</div>
          </Link>
        )}
      </Contents>
    </HeaderBox>
  );
};

export default OnBoardingHeader;

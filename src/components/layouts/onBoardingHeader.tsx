import styled from 'styled-components';
import React from 'react';
import logo from '../../components/images/onboardingLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from 'api/client';
import authAPI from 'api/authAPI';

const HeaderBox = styled.header`
  width: 100%;
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

const Contents = styled.ul`
  font-weight: 600;
  font-size: 0.9374vw;
  line-height: 140%;
  color: #383838;
  margin-right: 19.4vw;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  list-style-type: none;

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
  const postAuthLogoutAPI = async () => {
    authAPI
      .postLogout()
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
      <nav style={{ display: 'flex' }}>
        <Contents>
          <li className="aboutUs" tabIndex={0}>
            ABOUT US
          </li>
          <li className="plan" tabIndex={0}>
            PLAN
          </li>
          <li className="service" tabIndex={0}>
            SERVICE
          </li>
          {token ? (
            <li className="login" onClick={postAuthLogoutAPI}>
              LOGOUT
            </li>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: 'none', color: '#383838' }}
            >
              <li className="login">LOGIN</li>
            </Link>
          )}
        </Contents>
      </nav>
    </HeaderBox>
  );
};

export default OnBoardingHeader;

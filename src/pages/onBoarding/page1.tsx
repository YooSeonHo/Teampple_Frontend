import React from 'react';
import styled from 'styled-components';
import page1 from './images/Component 1.png';
import btn from './images/Frame 311.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Background = styled.div`
  background-image: url('${page1}');
  width: 100%;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  justify-content: center;
  display: flex;
  overflow: hidden;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7.407vh;

  .header {
    font-weight: 500;
    font-size: 1.458333vw;
    line-height: 140%;
    color: #707070;
    margin-bottom: 0.74074vh;
    margin-left: auto;
    margin-right: auto;
  }

  .mid {
    font-weight: 700;
    font-size: 1.875vw;
    line-height: 140%;
    color: #383838;
    margin-bottom: 3.240741vh;

    a {
      color: #487aff;
    }
  }

  .start {
    width: 6.82291vw;
    height: 5.18518vh;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Page1 = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <Background data-aos="fade-up">
      <ContentBox>
        <div className="header">서로가 모여 플러스가 되는</div>
        <div className="mid">
          새내기 팀플 가이드 솔루션 <a>팀쁠</a>
        </div>
        <button className="start">
          {localStorage.getItem('jwt_accessToken') ? (
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <img src={btn} />
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <img src={btn} />
            </Link>
          )}
        </button>
      </ContentBox>
    </Background>
  );
};

export default Page1;

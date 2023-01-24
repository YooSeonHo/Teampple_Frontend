import React from 'react';
import styled from 'styled-components';
import page8 from './images/Component 8.png';
import btn from './images/Group 310.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Background = styled.div`
  background-image: url('${page8}');
  width: 100%;
  text-align: center;
  height: 614px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
  background-color: #487aff;
  margin-top: 310px;
`;

const Contents = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 160%;
  color: #ffffff;
  padding-top: 200px;
  display: flex;
  flex-direction: column;

  .btn {
    width: 183px;
    height: 60px;
    margin: auto;
    margin-top: 53px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Page8 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  const onClickBtn = () => {
    {
      localStorage.getItem('jwt_accessToken')
        ? window.location.replace('/home')
        : window.location.replace('/login');
    }
  };
  return (
    <Background data-aos="fade-down">
      <Contents>
        <div>
          건강하고 성공적인 팀플을 위해
          <br /> 팀쁠의 가이드를 받아 볼 준비가 되셨나요?
        </div>
        <div className="btn">
          <img src={btn} onClick={onClickBtn} />
        </div>
      </Contents>
    </Background>
  );
};

export default Page8;

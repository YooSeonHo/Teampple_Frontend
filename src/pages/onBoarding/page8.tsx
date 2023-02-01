import React from 'react';
import styled from 'styled-components';
import page8 from './images/Component 8.png';
import btn from './images/Group 310.png';

export const Background = styled.div`
  background-image: url('${page8}');
  width: 100vw;
  text-align: center;
  height: 56.851852vh;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
  background-color: #487aff;
  margin-top: 28.70370vh;
`;

const Contents = styled.div`
  font-weight: 600;
  font-size: 1.66666vw;
  line-height: 160%;
  color: #ffffff;
  padding-top: 18.51851vh;
  display: flex;
  flex-direction: column;

  .btn {
    width: 9.53125vw;
    height: 5.55555vh;
    margin: auto;
    margin-top: 4.907407vh;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Page8 = () => {

  const onClickBtn = () => {
    {
      localStorage.getItem('jwt_accessToken')
        ? window.location.replace('/home')
        : window.location.replace('/login');
    }
  };
  return (
    <Background>
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

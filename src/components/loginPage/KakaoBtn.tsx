import React from 'react';
import styled from 'styled-components';
import { Kakao_icon } from '../images/kakao_icon';

const KakaoBtn = () => {
  return (
    <div>
      <LoginBtn>
        <Kakao_icon />
        <Text>카카오 아이디로 시작하기</Text>
      </LoginBtn>
    </div>
  );
};

const LoginBtn = styled.div`
  width: 23vw;
  height: 6vh;
  background-color: #fae100;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  svg {
    margin-right: 5vh;
    position: absolute;
    left: 2vw;
  }
`;

const Text = styled.span`
  font-size: 1.2vw;
  line-height: 100%;
  color: #383838;
  position: absolute;
  left: 6vw;
  font-weight: 600;
`;

export default KakaoBtn;

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
  width: 372px;
  height: 54px;
  background-color: #fae100;
  border-radius: 8px;
  position: relative;
  svg {
    margin-right: 54px;
    position: absolute;
    left: 16px;
    top: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  line-height: 100%;
  color: #383838;
  position: absolute;
  top: 17px;
  left: 96px;
`;

export default KakaoBtn;

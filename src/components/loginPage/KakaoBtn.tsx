import React from 'react';
import { Kakao_icon } from '../images/kakao_icon';
import * as Style from '../../css/LoginPage/KakaoBtnStyle';

const KakaoBtn = () => {
  return (
    <div>
      <Style.LoginBtn>
        <Kakao_icon />
        <Style.Text>카카오 아이디로 시작하기</Style.Text>
      </Style.LoginBtn>
    </div>
  );
};

export default KakaoBtn;

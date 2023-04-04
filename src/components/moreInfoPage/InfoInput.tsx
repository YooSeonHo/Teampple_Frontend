import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router';
import {
  idTokenState,
  kakaoAccessTokenState,
  kakaoRefreshTokenState,
  jwtAccessTokenState,
  jwtRefreshTokenState,
} from 'state';
import authAPI from 'api/authAPI';
import * as Style from '../../css/MoreInfoPage/InfoInputStyle';

const InfoInput = () => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [idToken] = useRecoilState(idTokenState);
  const [kakaoAccessToken] = useRecoilState(kakaoAccessTokenState);
  const [kakaoRefreshToken] = useRecoilState(kakaoRefreshTokenState);
  const [, setjwtAccessToken] = useRecoilState(jwtAccessTokenState);
  const [, setjwtRefreshToken] = useRecoilState(jwtRefreshTokenState);
  const navigate = useNavigate();
  const randomNum = Math.floor(Math.random() * 12) + 1;
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  };
  const onChangeMajor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value);
  };
  const postAuthInfoAPI = async () => {
    // 3-2. 회원가입 (백한테 카카오 토큰 + 추가 정보 넘겨주기)
    authAPI.postCreate(idToken,kakaoAccessToken,kakaoRefreshToken,name, school, major, randomNum)
      .then((response) => {
        setjwtAccessToken(response.data.data.jwtAccessToken);
        setjwtRefreshToken(response.data.data.jwtRefreshToken);
        localStorage.setItem(
          'jwt_accessToken',
          response.data.data.jwtAccessToken,
        );
        localStorage.setItem(
          'jwt_refreshToken',
          response.data.data.jwtRefreshToken,
        );
        alert('회원가입 성공 (홈으로 이동합니다)');
        navigate('/home');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Style.InputContainer>
        <Style.InputBox>
          <Style.PlaceHolder>이름</Style.PlaceHolder>
          <Style.Input onChange={onChangeName} />
        </Style.InputBox>
        <Style.InputBox>
          <Style.PlaceHolder>학교</Style.PlaceHolder>
          <Style.Input onChange={onChangeSchool} />
        </Style.InputBox>
        <Style.InputBox>
          <Style.PlaceHolder>학과</Style.PlaceHolder>
          <Style.Input onChange={onChangeMajor} />
        </Style.InputBox>
      </Style.InputContainer>
      <Style.Btn
        onClick={postAuthInfoAPI}
        disabled={
          name.length !== 0 && school.length !== 0 && major.length !== 0
            ? false
            : true
        }
      >
        <Style.Text>팀쁠 시작하기</Style.Text>
      </Style.Btn>
    </div>
  );
};

export default InfoInput;

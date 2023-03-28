import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router';
import {
  idTokenState,
  kakaoAccessTokenState,
  kakaoRefreshTokenState,
  jwtAccessTokenState,
  jwtRefreshTokenState,
} from 'state';
import { baseURL } from 'api/client';
import authAPI from 'api/authAPI';

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
    // await axios({
    //   url: `/api/auth/info`,
    //   baseURL: baseURL,
    //   method: 'post',
    //   data: {
    //     idToken: idToken,
    //     // idToken: 'kakaoU17233456', //test
    //     oauthAccessToken: kakaoAccessToken,
    //     oauthRefreshToken: kakaoRefreshToken,
    //     name: name,
    //     schoolName: school,
    //     major: major,
    //     profileImage: `proImageU${randomNum}`,
    //   },
    // })
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
      <InputContainer>
        <InputBox>
          <PlaceHolder>이름</PlaceHolder>
          <Input onChange={onChangeName} />
        </InputBox>
        <InputBox>
          <PlaceHolder>학교</PlaceHolder>
          <Input onChange={onChangeSchool} />
        </InputBox>
        <InputBox>
          <PlaceHolder>학과</PlaceHolder>
          <Input onChange={onChangeMajor} />
        </InputBox>
      </InputContainer>
      <Btn
        onClick={postAuthInfoAPI}
        disabled={
          name.length !== 0 && school.length !== 0 && major.length !== 0
            ? false
            : true
        }
      >
        <Text>팀쁠 시작하기</Text>
      </Btn>
    </div>
  );
};
const InputBox = styled.div`
  width: 372px;
  height: 54px;
  background-color: #ffffff;
  border-radius: 8px;
  font-size: 20px;
  line-height: 100%;
  color: #383838;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const InputContainer = styled.div`
  margin-bottom: 40px;
`;
const PlaceHolder = styled.span`
  margin-right: 24px;
  color: #707070;
  font-size: 20px;
`;
const Input = styled.input`
  border: none;
  font-size: 20px;
  width: 270px;
`;
const Btn = styled.button`
  width: 372px;
  height: 54px;
  background-color: #487aff;
  border-radius: 8px;
  &:disabled {
    background-color: #d4e4ff;
  }
`;
const Text = styled.span`
  font-size: 20px;
  line-height: 100%;
  color: #ffffff; ;
`;
export default InfoInput;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import KakaoBtn from 'components/loginPage/KakaoBtn';
import Logo from '../components/images/Logo_login.png';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { baseURL } from 'api/client';
import { kakaobaseURL } from 'api/client';

const LoginPage = () => {
  // 초대받았다면 팀 이름 출력
  const [teamname, setTeamname] = useState('');
  const [invited, setInvited] = useState(false);
  const navigate = useNavigate();
  const [, , code] = window.location.pathname.split('/');

  const getTeamName = async () => {
    await axios({
      url: `/api/invitations/validation`,
      baseURL: baseURL,
      method: 'get',
      params: {
        code: code,
      },
    })
      .then((res) => {
        if (res.data.data.valid) {
          setTeamname(res.data.data.teamName);
          setInvited(true);
          localStorage.setItem('code', code);
        } else if (res.data.data.valid === false)
          alert('유효하지 않은 초대코드입니다.');
      })
      .catch((e) => {
        console.log(e);
        alert('유효하지 않은 초대코드입니다.');
      });
  };

  useEffect(() => {
    if (code) {
      getTeamName();
    }
  }, []);

  const naviOnBoard = () => {
    navigate('/');
  };

  const joinTeam = async () => {
    await axios({
      url: `/api/invitations`,
      baseURL: baseURL,
      method: 'post',
      params: {
        code: code,
      },
      headers: {
        Authorization: localStorage.getItem('jwt_accessToken'),
      },
    })
      .then((res) => {
        navigate(`/teample-home/${res.data.data.teamId}`);
        window.location.reload();
        localStorage.removeItem('code');
      })
      .catch((e) => {
        console.log(e);
        alert('이미 입장한 팀입니다.');
        navigate('/home');
      });
  };

  return (
    <LoginPageContainer>
      <LogoImg src={Logo} onClick={naviOnBoard} />
      <Desc>서로가 모여 플러스(A+)가 되는 팀쁠</Desc>
      {invited ? (
        <TeamNameContainer>
          <TeamName>{teamname} </TeamName>
          팀메이트로 참여하기
        </TeamNameContainer>
      ) : null}
      {invited && localStorage.getItem('jwt_accessToken') ? (
        <InviteAcceptBtn onClick={joinTeam}>초대 수락하기</InviteAcceptBtn>
      ) : (
        <>
          <KakaoButton>
            <a href={kakaobaseURL}>
              <KakaoBtn />
            </a>
          </KakaoButton>
          <SubDesc>
            계정을 생성하면 서비스이용약관과 개인정보처리방침에 동의하게 됩니다.
          </SubDesc>
        </>
      )}
    </LoginPageContainer>
  );
};
const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f8ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 16vw;
  margin-top: 23.704vh;
  &:hover {
    cursor: pointer;
  }
`;
const Desc = styled.div`
  font-weight: 500;
  font-size: 1vw;
  line-height: 100%;
  color: #707070;
  margin-top: 1.5vh;
`;
const KakaoButton = styled.button`
  margin-top: 7.5vh;
`;
const SubDesc = styled.div`
  font-weight: 500;
  font-size: 1vw;
  line-height: 140%;
  color: #c0c0c0;
  margin-top: 2.96vh;
`;
const TeamNameContainer = styled.div`
  margin-top: 7.4vh;
  font-weight: 600;
  font-size: 2.0833vw;
  line-height: 100%;
`;
const TeamName = styled.span`
  color: #487aff;
  font-weight: 700;
`;

const InviteAcceptBtn = styled.button`
  width: 23vw;
  height: 6vh;
  background-color: #487aff;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2vw;
  line-height: 100%;
  font-weight: 600;
  margin-top: 7.5vh;
`;

export default LoginPage;

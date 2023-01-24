import React from 'react';
import styled from 'styled-components';
import InfoInput from 'components/moreInfoPage/InfoInput';
import Logo from '../components/images/Logo_login.png';
import { useNavigate } from 'react-router-dom';

const MoreInfoPage = () => {
  const navigate = useNavigate();

  const naviLogin = () => {
    navigate('/login');
  };

  return (
    <MoreInfoPageContainer>
      <LogoImg src={Logo} onClick={naviLogin} />
      <InputBox>
        <InfoInput />
      </InputBox>
    </MoreInfoPageContainer>
  );
};

const MoreInfoPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const LogoImg = styled.img`
  width: 237.26px;
  height: 67px;
  position: absolute;
  top: 219px;
  &:hover {
    cursor: pointer;
  }
`;

const InputBox = styled.div`
  position: absolute;
  top: 357px;
`;

export default MoreInfoPage;

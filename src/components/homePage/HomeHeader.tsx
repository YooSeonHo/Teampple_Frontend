import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiFillMessage } from 'react-icons/ai';

const HomeHeader = () => {
  const navigation = useNavigate();
  const onClickMsg = (e: React.MouseEvent<HTMLElement>) => {
    navigation('/feedback');
    console.log(e.target);
  };
  return (
    <HomeHeaderContainer>
      <HomeTitle>홈</HomeTitle>
      <button onClick={onClickMsg}>
        <MsgIcon />
      </button>
    </HomeHeaderContainer>
  );
};

const HomeHeaderContainer = styled.div`
  position: relative;
  width: 1680px;
  height: 72px;
  background-color: lemonchiffon;
`;
const HomeTitle = styled.div`
  position: absolute;
  top: 24px;
  left: 54px;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
`;

const MsgIcon = styled(AiFillMessage)`
  position: absolute;
  top: 20px;
  right: 54px;
  color: #487aff;
  width: 26px;
  height: 26px;
`;

export default HomeHeader;

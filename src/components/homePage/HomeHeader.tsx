import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiFillMessage } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { feedbackState } from 'state';
import Feedbacks from 'components/feedbacks/feedbacks';

const HomeHeader = () => {
  const navigation = useNavigate();
  const onClickMsg = (e: React.MouseEvent<HTMLElement>) => {
    navigation('/feedback');
    console.log(e.target);
  };

  const [isOpen, setIsOpen] = useRecoilState(feedbackState);

  const openFeed = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeHeaderContainer>
      <HomeTitle>홈</HomeTitle>
      <button onClick={openFeed}>
        <MsgIcon />
      </button>
    </HomeHeaderContainer>
  );
};

const HomeHeaderContainer = styled.div`
  position: relative;
  width: 1680px;
  height: 72px;
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
  width: 32px;
  height: 32px;
`;

export default HomeHeader;

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
  width: 87.5vw;
  height: 72px;
  border-bottom: solid;
  border-width: 3px;
  border-color: #edeff6;
`;
const HomeTitle = styled.div`
  position: absolute;
  top: 24px;
  left: 5.20vw;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 100%;
`;

const MsgIcon = styled(AiFillMessage)`
  position: absolute;
  top: 20px;
  right: 2.81vw;
  color: #487aff;
  width: 1.67vw;
  height: 32px;
`;

export default HomeHeader;

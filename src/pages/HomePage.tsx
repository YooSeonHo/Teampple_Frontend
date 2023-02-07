import React from 'react';
import styled from 'styled-components';
import SummaryHome from 'components/homePage/SummaryHome';
import MiniTemplate from 'components/homePage/MiniTemplate';
import HomeHeader from 'components/homePage/HomeHeader';
import SideBar from 'components/layouts/sideBar';
import HomeToDo from 'components/homePage/HomeToDo';
import { useRecoilState } from 'recoil';
import {
  feedbackState,
  isLoading1State,
  isLoading2State,
  isLoading4State,
} from 'state';
import Feedbacks from 'components/feedbacks/feedbacks';
import Loading from 'components/common/Loading';

const HomePage = () => {
  const [isOpen] = useRecoilState(feedbackState);
  const [isLoading1] = useRecoilState(isLoading1State);
  const [isLoading2] = useRecoilState(isLoading2State);
  const [isLoading4] = useRecoilState(isLoading4State);

  return (
    <>
      {isLoading1 && isLoading2 && isLoading4 ? <Loading /> : null}
      <HomePageContainer>
        <HeaderContainer>
          <HomeHeader />
        </HeaderContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <SummaryHomeContainer>
          <SummaryHome />
        </SummaryHomeContainer>
        {isOpen ? <Feedbacks pathname={window.location.pathname} /> : null}
        <TodoContainer>
          <HomeToDo />
        </TodoContainer>
        <MiniTemplateContainer>
          <MiniTemplate />
        </MiniTemplateContainer>
      </HomePageContainer>
    </>
  );
};
const HomePageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 1100px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const SideBarContainer = styled.div`
  position: absolute;
  width: 12.5vw;
  height: 100vh;
  left: 0px;
  top: 0px;
`;

const HeaderContainer = styled.div`
  position: absolute;
  width: 87.5vw;
  height: 6.6666vh;
  left: 12.5vw;
  top: 0px;
`;
const TodoContainer = styled.div`
  position: absolute;
  width: 87.5vw;
  height: 670px;
  left: 12.5vw;
  top: 37vh;
  overflow: hidden;

  .text {
    margin-top: 4.4444vh;
    color: #383838;
    font-weight: 500;
    font-size: 1.458333vw;
    line-height: 100%;
    margin-left: 2.8125vw;
  }
`;

const SummaryHomeContainer = styled.div`
  position: absolute;
  left: 12.5vw;
  top: 6.6666vh;
`;

const MiniTemplateContainer = styled.div`
  position: absolute;
  width: 87.5vw;
  left: 12.5vw;
  top: 92.5926vh;
`;

export default HomePage;

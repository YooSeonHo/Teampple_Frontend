import React from 'react';
import styled from 'styled-components';
import SummaryHome from 'components/homePage/SummaryHome';
import MiniTemplate from 'components/homePage/MiniTemplate';
import HomeHeader from 'components/homePage/HomeHeader';
import SideBar from 'components/layouts/sideBar';
import HomeToDo from 'components/homePage/HomeToDo';
import ToDoBox from 'components/toDo/toDoBox';
import { useRecoilState } from 'recoil';
import { feedbackState } from 'state';
import Feedbacks from 'components/feedbacks/feedbacks';

const HomePage = () => {
  const [isOpen, setIsOpen] = useRecoilState(feedbackState);

  return (
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
        <div className='text'>할 일</div>
        <HomeToDo />
      </TodoContainer>
      <MiniTemplateContainer>
        <MiniTemplate />
      </MiniTemplateContainer>
    </HomePageContainer>
  );
};
const HomePageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 1400px;
  overflow: hidden;
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
  top: 34.074074vh;
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
  top: 92.592593vh;
`;

export default HomePage;

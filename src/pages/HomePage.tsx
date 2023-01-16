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
        <div className="text">할 일</div>
        <ToDoBox pathname={window.location.pathname}/>
      </TodoContainer>
      <MiniTemplateContainer>
        <MiniTemplate />
      </MiniTemplateContainer>
    </HomePageContainer>
  );
};
const HomePageContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 1602px;
  overflow: hidden;
`;

const SideBarContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 1081px;
  left: 0px;
  top: 0px;
`;

const HeaderContainer = styled.div`
  position: absolute;
  width: 1680px;
  height: 72px;
  left: 240px;
  top: 0px;
`;
const TodoContainer = styled.div`
  position: absolute;
  width: 1680px;
  height: 670px;
  left: 240px;
  top: 368px;

  .text {
    margin-top: 48px;
    color: #383838;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-left: 54px;
  }
`;

const SummaryHomeContainer = styled.div`
  position: absolute;
  left: 240px;
  top: 72px;
`;

const MiniTemplateContainer = styled.div`
  position: absolute;
  width: 1680px;
  left: 240px;
  top: 1042px;
`;

export default HomePage;

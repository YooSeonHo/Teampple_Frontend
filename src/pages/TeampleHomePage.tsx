import React from 'react';
import styled from 'styled-components';
import SummaryTeample from 'components/teampleHomePage/SummaryTeample';
import FileInfo from 'components/teampleHomePage/FileInfo';
import AddSchedule from 'components/popup/AddSchedule';
import ModifyTeample from 'components/popup/ModifyTeample';
import AddTask from 'components/popup/AddTask';
import TeamMateInfo from 'components/popup/TeamMateInfo';
import ModifyStep from 'components/popup/ModifyStep';
import AddTeample1 from 'components/popup/AddTeample1';
import AddTeample2 from 'components/popup/AddTeample2';
import SideBar from 'components/layouts/sideBar';
import TeampleHeader from 'components/layouts/teampleHeader';
import ToDoBox from 'components/toDo/toDoBox';
import PlanManager from 'components/teampleHomePage/planManager';
import Layout from 'components/layouts/layout';



const Container = styled.div`

`

const ContentBox = styled.div`
  display : flex;

`;

const MainContentBox = styled.div`
  display : flex;

`;


const AllBox = styled.div`
  display : flex;
`;

const TeampleHomePage = () => {
  return (
    <>
      <Layout>
        <AllBox>
          <div>
          <ContentBox>
            <SummaryTeample />
            <FileInfo/>
          </ContentBox>

          <div className='text'>할 일</div>

          <MainContentBox>
            <ToDoBox/>
          </MainContentBox>
          </div>
        <PlanManager/>
        </AllBox>

      </Layout>


      {/* <AddSchedule /> */}
      {/* <ModifyTeample /> */}
      {/* <AddTask /> */}
      {/* <TeamMateInfo /> */}
      {/* <ModifyStep /> */}
      {/* <AddTeample1 /> */}
      {/* <AddTeample2 /> */}
    </>
  );
};

export default TeampleHomePage;

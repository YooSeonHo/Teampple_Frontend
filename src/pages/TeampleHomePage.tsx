import React, { useEffect } from 'react';
import styled from 'styled-components';
import SummaryTeample from 'components/teampleHomePage/SummaryTeample';
import FileInfo from 'components/teampleHomePage/FileInfo';
import ToDoBox from 'components/toDo/toDoBox';
import PlanManager from 'components/teampleHomePage/planManager';
import Layout from 'components/layouts/layout';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { teamidState } from 'state';

const ContentBox = styled.div`
  display: flex;
`;

const MainContentBox = styled.div`
  display: flex;
`;

const AllBox = styled.div`
  display: flex;
  position: relative;

  .text {
    margin-top: 4.44444vh;
    color: #383838;
    font-weight: 500;
    font-size: 1.25vw;
    line-height: 2.685185vh;
    margin-left: 2.8125vw;
  }
`;

const TeampleHomePage = () => {
  const [teamid, setTeamid] = useRecoilState(teamidState);
  const params = useParams();
  useEffect(() => {
    setTeamid(Number(params.teamid));
  },[])
  return (
    <Layout>
      <AllBox>
        <div>
          <ContentBox>
            <SummaryTeample />
            <FileInfo />
          </ContentBox>
          <div className="text">할 일</div>
          <MainContentBox>
            <ToDoBox pathname={window.location.pathname} />
          </MainContentBox>
        </div>
        <PlanManager />
      </AllBox>
    </Layout>
  );
};

export default TeampleHomePage;

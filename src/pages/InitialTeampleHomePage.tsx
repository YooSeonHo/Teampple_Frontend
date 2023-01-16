import React from 'react';
import styled from 'styled-components';
import Layout from 'components/layouts/layout';
import NotSummaryTeample from 'components/teampleHomePage/nothing/NotSummaryTeample';
import NotToDoBox from '../components/teampleHomePage/nothing/NotToDoBox';
import NotFileInfo from 'components/teampleHomePage/nothing/NotFileInfo';
import NotPlanManager from 'components/teampleHomePage/nothing/NotPlanManager';

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
    margin-top: 48px;
    color: #383838;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-left: 54px;
  }
`;

const InitialTeampleHomePage = () => {
  return (
    <Layout>
      <AllBox>
        <div>
          <ContentBox>
            <NotSummaryTeample />
            <NotFileInfo />
          </ContentBox>
          <div className="text">할 일</div>
          <MainContentBox>
            <NotToDoBox />
          </MainContentBox>
        </div>
        <NotPlanManager />
      </AllBox>
    </Layout>
  );
};

export default InitialTeampleHomePage;

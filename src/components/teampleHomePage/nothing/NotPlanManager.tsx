import styled from 'styled-components';
import React from 'react';
import noplan from '../../images/nothingPlanManager.png';

const NotPlanManager = () => {
  return (
    <ManagerBox>
      <div className="dDayHeader">
        <div className="text">일정 관리자</div>
        <div className="headerBox">
          <div className="headerText">마감 예정인 프로젝트가 없습니다.</div>
          <div className="headerdDay">D-&nbsp;</div>
        </div>
      </div>
      <Content>
        <Img src={noplan} />
      </Content>
    </ManagerBox>
  );
};

const ManagerBox = styled.div`
  width: 326px;
  height: 1008px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 998;

  .dDayHeader {
    width: 324px;
    height: 238px;
  }

  .text {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: #383838;
    margin-left: 24px;
    margin-top: 36px;
    margin-bottom: 32px;
  }

  .headerBox {
    background: #f9fafd;
    border-radius: 12px;
    width: 284px;
    height: 114px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }

  .headerText {
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #707070;
    margin-left: auto;
    margin-right: auto;
    margin-top: 28px;
  }

  .headerdDay {
    font-size: 24px;
    line-height: 100%;
    color: #b8bed1;
    margin-left: auto;
    margin-right: auto;
    margin-top: 18px;
  }

  .contentBox {
    width: 284px;
    height: 620px;
    background: #f9fafd;
    border-radius: 12px;
  }

  .addSch {
    width: 284px;
    height: 56px;
    background: #f4f8ff;
    border-radius: 12px;
    display: flex;
    margin-left: 20px;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 20px;
  }

  .addSch:hover {
    cursor: grab;
  }

  .addText {
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    color: #487aff;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const Content = styled.div`
  width: 284px;
  height: 630px;
  background: #f9fafd;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const Img = styled.img`
  width: 107px;
  height: 117px;
`;

export default NotPlanManager;

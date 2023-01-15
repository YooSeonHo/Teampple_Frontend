import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import AddSchedule from 'components/popup/AddSchedule';
import axios from 'axios';
import { IPlan } from '../../interfaces';

const PlanManager = () => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };
  const [plans, setPlans] = useState([]);
  const [deadDay, setDeadDay] = useState<any | null>(null);
  const [dueDate, setDueDate] = useState();
  const now = new Date();

  const getPlanAPI = async () => {
    await axios({
      url: `/api/teams/schedules`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      params: { teamId: 1 },
    })
      .then((response) => {
        console.log(response.data.data.schedules);
        setPlans(response.data.data.schedules);
        setDueDate(response.data.data.dueDate);
        setDeadDay(getDeadDay(response.data.data.dueDate));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getPlanAPI();
    console.log();
  }, []);

  const getDeadDay = (dueDate: Date) => {
    const setDate = new Date(dueDate);
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    return day + 1;
  };

  const getPlanDay = (dueDate: any) => {
    const setDate = new Date(dueDate);
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    return day + 1;
  };

  return (
    <ManagerBox>
      <div className="dDayHeader">
        <div className="text">일정 관리자</div>
        <div className="headerBox">
          <div className="headerText">프로젝트 마감까지</div>
          <div className="headerdDay">D-{deadDay}</div>
        </div>
      </div>
      <div className="contentBox">
        {/* 시간 형식 바꿔야함 */}
        {plans &&
          plans.map((plan: IPlan, index: number) => (
            <Content key={index}>
              <div className="contentdDay">D-{getPlanDay(plan.dueDate)}</div>
              <div className="contentInfo">
                <div className="contentName">{plan.name}</div>
                <div className="when">{plan.dueDate}</div>
              </div>
            </Content>
          ))}
      </div>
      <div className="addSch" onClick={showModal}>
        <div className="addText">+ 일정 추가하기</div>
      </div>
      <ModalContainer>
        {modal && <AddSchedule setModal={setModal} />}
      </ModalContainer>
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
    background: #f4f8ff;
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
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    color: #487aff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 18px;
  }

  .contentBox {
    margin-top: 32px;
    overflow: auto;
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

  /* 
scroll 투명하게 해야댈듯? */
`;

const ModalContainer = styled.div`
  position: fixed;
  margin: 0 auto;
`;

const Content = styled.div`
  background: #f4f8ff;
  border-radius: 12px;
  width: 284px;
  height: 64px;
  margin-left: 20px;
  display: flex;
  margin-bottom: 8px;

  .contentdDay {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #707070;
    margin: 24px;
    margin-right: 28px;
  }

  .contentInfo {
    display: flex;
    flex-direction: column;
    margin-top: 14px;
  }

  .contentName {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #707070;
    margin-bottom: 8px;
  }

  .when {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #a7a7a7;
  }
`;

export default PlanManager;

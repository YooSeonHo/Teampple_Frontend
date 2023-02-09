import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import AddSchedule from 'components/popup/AddSchedule';
import { useRecoilState } from 'recoil';
import { zIndexState, feedbackState, modal2State, teamidState, teamEndDateState } from 'state';
import axios from 'axios';
import { IPlan } from '../../interfaces';
import { baseURL } from 'api/client';

const PlanManager = () => {
  const [modal, setModal] = useState(false);
  const [zIndex, setZIndex] = useRecoilState(zIndexState);
  const [isOpen, setIsOpen] = useRecoilState(feedbackState);
  const [modal2, setModal2] = useRecoilState(modal2State);
  const showModal = () => {
    setModal(!modal);
    setIsOpen(false);
    setModal2(false);
    setZIndex(999);
  };
  const [plans, setPlans] = useState([]);
  const [deadDay, setDeadDay] = useState<any | null>(null);
  const [dueDate, setDueDate] = useState();
  const [teamid] = useRecoilState(teamidState);
  const token = localStorage.getItem('jwt_accessToken');
  const [teamEndDate,setTeamEndDate] = useRecoilState(teamEndDateState);
  const now = new Date();


  const getPlanAPI = async () => {
    await axios({
      url: `/api/teams/schedules`,
      baseURL: baseURL,
      method: 'get',
      headers: {
        Authorization: token,
      },
      params: { teamId: teamid },
    })
      .then((response) => {
        setPlans(response.data.data.schedules);
        setDueDate(response.data.data.dueDate);
        setDeadDay(getDeadDay(response.data.data.dueDate));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getEndDate = async () =>{
    await axios({
      url: `/api/teams`,
      baseURL: baseURL,
      method: 'get',
      params: { teamId: teamid },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setTeamEndDate(res.data.data.dueDate);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getPlanAPI();
    getEndDate();
  }, [teamid]);

  const getDeadDay = (dueDate: Date) => {
    const setDate = new Date(dueDate);
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (day + 1 === 0) return '-DAY';
    else if (day + 1 < 0) return `+` + Math.abs(day + 1);
    else return `-` + (day + 1);
  };

  const getPlanDay = (dueDate: any) => {
    const setDate = new Date(dueDate);
    const now = new Date();
    const distance = setDate.getDate() - now.getDate();
    const day = Math.floor(distance);
    if (day === 0) return '-DAY';
    else if (day < 0) return `+` + Math.abs(day);
    else return `-` + (day);
  };

  const teamEndCheck = () =>{
    const teamEnd = new Date(teamEndDate);
    teamEnd.setHours(0,0,0);
    teamEnd.setDate(teamEnd.getDate() + 1);
    if (now.getTime() <= teamEnd.getTime()){
      return false;
    }
    else{
      return true;
    }
  }

  return (
    <ManagerBox style={{ zIndex: zIndex }}>
      <div className="dDayHeader">
        <div className="text">일정 관리자</div>
        <div className="headerBox">
          <div className="headerText">프로젝트 마감까지</div>
          <div className="headerdDay">D{deadDay}</div>
        </div>
      </div>
      <div className="contentBox">
        {plans &&
          plans.map((plan: IPlan, index: number) => (
            <Content key={index}>
              <div className="contentdDay">
                D{getPlanDay(plan.dueDate)}
              </div>
              <div className="contentInfo">
                <div className="contentName">{plan.name}</div>
                <div className="when">
                  {plan.dueDate
                    .replace(/-/g, '.')
                    .replace('T', ' ')
                    .replace(/:[0-9]+$/, '')}
                </div>
              </div>
            </Content>
          ))}
      </div>
      {teamEndCheck() ? 
      <div className="EndSch">
        <div className="addText">+ 일정 추가하기</div>
      </div>
       :
      <div className="addSch" onClick={showModal}>
        <div className="addText">+ 일정 추가하기</div>
      </div>
        }
      <ModalContainer>
        {modal && <AddSchedule setModal={setModal} />}
      </ModalContainer>
    </ManagerBox>
  );
};

const ManagerBox = styled.div`
  width: 16.9791vw;
  height: 93.3333vh;
  background-color: #ffffff;
  border-left: solid;
  border-width: 3px;
  border-color: #edeff6;
  display: flex;
  flex-direction: column;
  position: relative;

  .dDayHeader {
    width: 16.875vw;
    height: 22.037vh;
  }

  .text {
    font-weight: 500;
    font-size: 1.25vw;
    line-height: 100%;
    color: #383838;
    margin-left: 1.25vw;
    margin-top: 3.33333vh;
    margin-bottom: 2.9629vh;
  }

  .headerBox {
    background: #f4f8ff;
    border-radius: 12px;
    width: 14.79166vw;
    height: 10.5555vh;
    margin-left: 1.041667vw;
    display: flex;
    flex-direction: column;
  }

  .headerText {
    font-weight: 400;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.592593vh;
  }

  .headerdDay {
    font-weight: 700;
    font-size: 1.25vw;
    line-height: 100%;
    color: #487aff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.66666vh;
  }

  .contentBox {
    margin-top: 2.9629vh;
    overflow: auto;
  }

  .addSch {
    width: 14.791vw;
    height: 5.185vh;
    background: #f4f8ff;
    border-radius: 12px;
    display: flex;
    margin-left: 1.041667vw;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 1.85185vh;
  }

  .addSch:hover {
    cursor: grab;
  }

  .EndSch {
    width: 14.791vw;
    height: 5.185vh;
    background: #f4f8ff;
    border-radius: 12px;
    display: flex;
    margin-left: 1.041667vw;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 1.85185vh;
  }

  .EndSch:hover {
    cursor: not-allowed;
  }


  .addText {
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #487aff;
    margin-top: auto;
    margin-bottom: auto;
  }

  /* 
scroll 투명하게 해야댈듯? */
`;

export const ModalContainer = styled.div`
  position: fixed;
  margin: 0 auto;
`;

const Content = styled.div`
  background: #f4f8ff;
  border-radius: 12px;
  width: 14.7916vw;
  height: 5.92592vh;
  margin-left: 1.04166vw;
  display: flex;
  margin-bottom: 0.7407vh;

  .contentdDay {
    font-weight: 600;
    font-size: 0.83333vw;
    line-height: 100%;
    color: #707070;
    margin-top: 2.2222vh;
    margin-bottom: 2.2222vh;
    margin-left: 1.25vw;
    margin-right: 1vw;
    width: 2.7vw;
  }

  .contentInfo {
    display: flex;
    flex-direction: column;
    margin-top: 1.2962vh;
  }

  .contentName {
    font-weight: 500;
    font-size: 0.8333vw;
    line-height: 100%;
    color: #707070;
    margin-bottom: 8px;
  }

  .when {
    font-weight: 400;
    font-size: 0.625vw;
    line-height: 100%;
    color: #a7a7a7;
  }
`;

export default PlanManager;

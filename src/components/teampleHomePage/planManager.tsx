import React, { useState, useEffect } from 'react';
import AddSchedule from 'components/popup/AddSchedule';
import { useRecoilState } from 'recoil';
import {
  feedbackState,
  modal2State,
  teamidState,
  teamEndDateState,
} from 'state';
import { IPlan } from '../../interfaces/teamType';
import teamAPI from 'api/teamAPI';
import * as Style from '../../css/TeampleHomePage/PlanManagerStyle';

const PlanManager = () => {
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(feedbackState);
  const [modal2, setModal2] = useRecoilState(modal2State);
  const showModal = () => {
    setModal(!modal);
    setIsOpen(false);
    setModal2(false);
  };
  const [plans, setPlans] = useState([]);
  const [deadDay, setDeadDay] = useState<any | null>(null);
  const [dueDate, setDueDate] = useState();
  const [teamid] = useRecoilState(teamidState);
  const [teamEndDate, setTeamEndDate] = useRecoilState(teamEndDateState);
  const now = new Date();

  const getPlanAPI = async () => {
    teamAPI
      .getSch(teamid)
      .then((response) => {
        setPlans(response.data.data.schedules);
        setDueDate(response.data.data.dueDate);
        setDeadDay(getDeadDay(response.data.data.dueDate));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getEndDate = async () => {
    teamAPI
      .get(teamid)
      .then((res) => {
        setTeamEndDate(res.data.data.dueDate);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
    else return `-` + day;
  };

  const teamEndCheck = () => {
    const teamEnd = new Date(teamEndDate);
    teamEnd.setHours(0, 0, 0);
    teamEnd.setDate(teamEnd.getDate() + 1);
    if (now.getTime() <= teamEnd.getTime()) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Style.ManagerBox>
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
            <Style.Content key={index}>
              <div className="contentdDay">D{getPlanDay(plan.dueDate)}</div>
              <div className="contentInfo">
                <div className="contentName">{plan.name}</div>
                <div className="when">
                  {plan.dueDate
                    .replace(/-/g, '.')
                    .replace('T', ' ')
                    .replace(/:[0-9]+$/, '')}
                </div>
              </div>
            </Style.Content>
          ))}
      </div>
      {teamEndCheck() ? (
        <div className="EndSch">
          <div className="addText">+ 일정 추가하기</div>
        </div>
      ) : (
        <div className="addSch" onClick={showModal}>
          <div className="addText">+ 일정 추가하기</div>
        </div>
      )}
      <Style.ModalContainer>
        {modal && <AddSchedule setModal={setModal} />}
      </Style.ModalContainer>
    </Style.ManagerBox>
  );
};

export default PlanManager;

import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import feedback from '../images/feedback.png';
import group from '../images/Group 697.png';
import ModifyTeample from 'components/popup/ModifyTeample';
import TeamMateInfo from 'components/popup/TeamMateInfo';
import { useRecoilState } from 'recoil';
import {
  feedbackState,
  modal2State,
  teamMateNumState,
  teamidState,
} from 'state';
import axios from 'axios';

const HeaderBox = styled.div`
  width: 1680px;
  height: 72px;
  background-color: #ffffff;
  border-bottom: solid;
  border-width: 3px;
  border-color: #edeff6;
  display: flex;
  font-weight: 600;
  font-size: 24px;
  line-height: 72px;
  white-space: nowrap;
  position: relative;
  z-index: 998;

  #main {
    margin-left: 54px;
    width: 250px;
    height: 24px;
    max-width: 250px;
  }

  #sub {
    margin-left: 24px;
    width: 260px;
    height: 20px;
  }

  #dDayBox {
    display: flex;
    padding: 0px;
    gap: 8px;
    width: 58px;
    height: 26px;
    background: #ffffff;
    border: 1px solid #88a9ff;
    border-radius: 8px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 139px;
  }

  #dDay {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #487aff;
    flex-grow: 0;
    margin: auto;
  }

  #date {
    margin-left: 8px;
    width: 260px;
    height: 20px;
    font-size: 18px;
    color: #707070;
  }

  .editBox {
    position: absolute;
    width: 69px;
    height: 28px;
    left: 1054px;
    top: 22px;
    background: #ffffff;
    border: 1px solid #d5dbee;
    border-radius: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  #teamList {
    margin-left: 193px;
    /* 만약 팀장이어서 팀플 수정 버튼 있으면 마진 61  없으면 193*/
    width: 72px;
    height: 40px;
    margin-top: 16px;
    margin-bottom: auto;
    background-image: url(${group});
    background-size: 72px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      cursor: pointer;
    }
  }

  #teamNum {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #a7a7a7;
    margin-left: auto;
    margin-right: 13px;
  }

  .iconBox {
    margin-left: auto;
    margin-right: 54px;
  }

  .iconBox:hover{
    cursor: grab;
  }

  #feedback {
    width: 32px;
    height: 32px;
    margin-top: 20px;
  }
`;

const ModalContainer1 = styled.div`
  position: fixed;
  margin: 0 auto;
`;

const ModalContainer2 = styled.div`
  position: absolute;
  top: 67px;
  right: 360px;
`;

const TeampleHeader = () => {
  const [teamMatesNum,setTeamMatesNum] = useRecoilState(teamMateNumState);
  const [isOpen,setIsOpen] = useRecoilState(feedbackState);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useRecoilState(modal2State);
  const [name, setName] = useState();
  const [goal, setGoal] = useState();
  const [startDate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [deadDay, setDeadDay] = useState<any | null>(null);
  const token = process.env.REACT_APP_JWTTOKEN
  const [teamid] = useRecoilState(teamidState);

  const showModal1 = () => {
    setModal1(!modal1);
    setModal2(false);
    setIsOpen(false);

  };
  const showModal2 = () => {
    setModal2(!modal2);
  };


  const openFeed = () =>{
    setIsOpen(!isOpen);
  }

  const getTHeader = async () => {
    await axios({
      method: 'get',
      baseURL: 'https://www.teampple.site',
      url: '/api/teams',
      params: { teamId: teamid },
      headers : {
        Authorization: token,
      }
    }).then((res) => {
      setName(res.data.data.name);
      setGoal(res.data.data.goal);
      setTeamMatesNum(res.data.data.teammatesNum);
      setStartDate(res.data.data.startDate);
      setDueDate(res.data.data.dueDate);
      setDeadDay(getDeadDay(res.data.data.dueDate));
    });
  };

  useEffect(()=>{
    getTHeader();
  }, [teamid])
  
  const getDeadDay = (dueDate: Date) => {
    const setDate = new Date(dueDate);
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    return day + 1;
  };

  return (
    <HeaderBox>
      <div id="main">{name}</div>

      <div id="sub">{goal}</div>
      <div id="dDayBox">
        <div id="dDay">D-{deadDay}</div>
      </div>
      <div id="date">{startDate}-{dueDate}</div>
      <button className="editBox" onClick={showModal1}>
        팀플 수정
      </button>
      <ModalContainer1>
        {modal1 && <ModifyTeample setModal1={setModal1} />}
      </ModalContainer1>
      <div id="teamList" onClick={showModal2}>
        <a id="teamNum">+{teamMatesNum}</a>
      </div>
      <ModalContainer2>{modal2 && <TeamMateInfo />}</ModalContainer2>
      <div className="iconBox" onClick={openFeed}>
        <img id="feedback" src={feedback}/>
      </div>
      
    </HeaderBox>
  );
};

export default TeampleHeader;

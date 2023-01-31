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
  fbListState,
} from 'state';
import axios from 'axios';
import { AiFillMessage } from 'react-icons/ai';

const MsgIcon = styled(AiFillMessage)`
position: absolute;
top: 1.851852vh;
right: 2.81vw;
color: #487aff;
width: 1.67vw;
height: 2.96293vh;
`;

const HeaderBox = styled.div`
  width: 87.5vw;
  height: 6.6666vh;
  background-color: #ffffff;
  border-bottom: solid;
  border-width: 3px;
  border-color: #edeff6;
  display: flex;
  line-height: 6.66666vh;
  white-space: nowrap;
  position: relative;
  z-index: 998;

  #main {
    margin-left: 2.8125vw;
    width: 13.0208vw;
    height: 2.22222vh;
    max-width: 13.0208vw;
    font-weight: 600;
    font-size: 1.25vw;
    
  }

  #sub {
    margin-left: 1.25vw;
    width: 13.5416vw;
    height: 1.851852vh;
    font-weight: 500;
    font-size: 1.041667vw;
  }

  #dDayBox {
    display: flex;
    padding: 0px;
    gap: 8px;
    width: 3.020833vw;
    height: 2.407504vh;
    background: #ffffff;
    border: 1px solid #88a9ff;
    border-radius: 8px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 7.239583vw;
  }

  #dDay {
    font-weight: 500;
    font-size: 0.625vw;
    line-height: 100%;
    color: #487aff;
    flex-grow: 0;
    margin: auto;
  }

  #date {
    margin-left: 0.416667vw;
    width: 13.541667vw;
    height: 1.851852vh;
    font-weight: 400;
    font-size: 0.9375vw;
    color: #707070;
  }

  .editBox {
    position: absolute;
    width: 3.593vw;
    height: 2.592593vh;
    left: 54.8958vw;
    top: 2.037vh;
    background: #ffffff;
    border: 1px solid #d5dbee;
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.625vw;
    line-height: 100%;
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
  }

  img {
    max-width: 100vw;
    max-height: 100vh;
  }

  #teamList {
    margin-left: 10.052vw;
    /* 만약 팀장이어서 팀플 수정 버튼 있으면 마진 61  없으면 193*/
    width: 3.75vw;
    height: 3.7037vh;
    margin-top: auto;
    margin-bottom: auto;
    background-image: url(${group});
    background-size: 3.75vw 3.7037vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
      cursor: pointer;
    }
  }

  #teamNum {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 100%;
    text-align: center;
    color: #a7a7a7;
    margin-left: auto;
    margin-right: 0.677083vw;
  }

  .iconBox {
    margin-left: auto;
    margin-right: 2.8125vw;
  }

  .iconBox:hover{
    cursor: grab;
  }

  #feedback {
    width: 1.6666vw;
    height: 2.962vh;
    margin-top: 1.8518vh;
  }
`;

const ModalContainer1 = styled.div`
  position: fixed;
  margin: 0 auto;
`;

const ModalContainer2 = styled.div`
  position: absolute;
  top: 6.2037vh;
  right: 19.33333vw;
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
  const token = localStorage.getItem('jwt_accessToken');
  const [teamid] = useRecoilState(teamidState);
  const [fbList,setFbList] = useRecoilState(fbListState)

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

  const getFeedbackAPI = async () => {
    await axios({
      url: `/api/users/feedbacks`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setFbList(response.data.data.feedbacks);
        console.log(response.data.data.feedbacks);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getFeedbackAPI();
  }, []);


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
        {fbList.length === 0? <img id="feedback" src={feedback}/> : <MsgIcon/>}
      </div>
      
    </HeaderBox>
  );
};

export default TeampleHeader;

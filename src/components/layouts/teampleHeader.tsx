import React, { useEffect, useState } from 'react';
import feedback from '../images/feedback.png';
import ModifyTeample from 'components/popup/ModifyTeample';
import TeamMateInfo from 'components/popup/TeamMateInfo';
import { useRecoilState } from 'recoil';
import {
  feedbackState,
  modal2State,
  teamMateNumState,
  teamidState,
  fbListState,
  isCheckedState,
} from 'state';
import axios from 'axios';
import { baseURL } from 'api/client';
import { BsFillPersonFill } from 'react-icons/bs';
import userAPI from 'api/userAPI';
import * as Style from '../../css/Layout/TeampleHeaderStyle';

const TeampleHeader = () => {
  const [teamMatesNum, setTeamMatesNum] = useRecoilState(teamMateNumState);
  const [isOpen, setIsOpen] = useRecoilState(feedbackState);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useRecoilState(modal2State);
  const [name, setName] = useState();
  const [goal, setGoal] = useState();
  const [startDate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [deadDay, setDeadDay] = useState<any | null>(null);
  const token = localStorage.getItem('jwt_accessToken');
  const [teamid] = useRecoilState(teamidState);
  const [fbList, setFbList] = useRecoilState(fbListState);
  const [isCheck, setIsCheck] = useRecoilState(isCheckedState);

  const showModal1 = () => {
    setModal1(!modal1);
    setModal2(false);
    setIsOpen(false);
  };
  const showModal2 = () => {
    setModal2(!modal2);
  };

  const openFeed = () => {
    setIsOpen(!isOpen);
  };

  const getFeedbackAPI = () => {
    userAPI
      .getFeedback()
      .then((response) => {
        setFbList(response.data.data.feedbacks);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const countChecked = () => {
    let cnt = 0;
    fbList &&
      fbList.map((fb) => {
        if (!fb.checked) {
          cnt += 1;
        }
      });
    if (cnt > 0) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    setIsCheck(countChecked());
  }, [fbList]);

  useEffect(() => {
    getFeedbackAPI();
  }, []);

  const getTHeader = async () => {
    await axios({
      method: 'get',
      baseURL: baseURL,
      url: '/api/teams',
      params: { teamId: teamid },
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      setName(res.data.data.name);
      setGoal(res.data.data.goal);
      setTeamMatesNum(res.data.data.teammatesNum);
      setStartDate(res.data.data.startDate);
      setDueDate(res.data.data.dueDate);
      setDeadDay(getDeadDay(res.data.data.dueDate));
    });
  };

  useEffect(() => {
    getTHeader();
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

  return (
    <Style.HeaderBox>
      <div id="main">{name}</div>
      <div id="sub">{goal}</div>
      <div id="dDayBox">
        <div id="dDay">D{deadDay}</div>
      </div>
      <div id="date">
        {startDate}-{dueDate}
      </div>
      <button className="editBox" onClick={showModal1}>
        팀플 수정
      </button>
      <Style.ModalContainer1>
        {modal1 && <ModifyTeample setModal1={setModal1} />}
      </Style.ModalContainer1>
      <div id="teamList" onClick={showModal2}>
        <BsFillPersonFill
          style={{ color: '#707070', marginLeft: '0.5vw', fontSize: '1.2vw' }}
        />
        <a id="teamNum">+{teamMatesNum}</a>
      </div>
      <Style.ModalContainer2>
        {modal2 && <TeamMateInfo />}
      </Style.ModalContainer2>
      <div className="iconBox" onClick={openFeed}>
        {isCheck ? <Style.MsgIcon /> : <img id="feedback" src={feedback} />}
      </div>
    </Style.HeaderBox>
  );
};

export default TeampleHeader;

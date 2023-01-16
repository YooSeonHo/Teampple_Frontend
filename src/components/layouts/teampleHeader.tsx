import styled from 'styled-components';
import React, { useState } from 'react';
import feedback from '../images/feedback.png';
import group from '../images/Group 697.png';
import ModifyTeample from 'components/popup/ModifyTeample';
import TeamMateInfo from 'components/popup/TeamMateInfo';
import { useRecoilState } from 'recoil';
import { feedbackState, modal2State, teamMateNumState } from 'state';

const HeaderBox = styled.div`
  width: 1680px;
  height: 72px;
  background-color: #ffffff;
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
  const [teamMatesNum,] = useRecoilState(teamMateNumState);
  const [isOpen,setIsOpen] = useRecoilState(feedbackState);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useRecoilState(modal2State);


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

  return (
    <HeaderBox>
      <div id="main">홈</div>

      <div id="sub">팀플 가이드 서비스 개발</div>
      <div id="dDayBox">
        <div id="dDay">D-24</div>
      </div>
      <div id="date">2022.11.22-2022.12.21</div>
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

import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import house from '../images/House.png';
import usersThree from '../images/UsersThree.png';
import folderIcon from '../images/FolderSimple.png';
import headset from '../images/Headset.png';
import { Link, useNavigate } from 'react-router-dom';
import prof1 from '../images/profile/proImageU1.png';
import out from '../images/Out.png';
import delSad from '../images/delSad.png';
import {
  usernameState,
  userschoolState,
  usermajorState,
  profileImgState,
} from 'state';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import {
  teamidState,
  AddTeamzIndexState,
  feedbackState,
  modal2State,
} from 'state';
import { ModalContainer } from 'components/teampleHomePage/planManager';
import AddTeample from 'components/popup/AddTeample1';
import AddTeample2 from 'components/popup/AddTeample2';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { baseURL } from 'api/client';

const SideBarBox = styled.div`
  width: 12.5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f4f8ff;
  z-index: 998;
  position: fixed;

  .logo {
    margin-left: 2.5vw;
    margin-top: 1.759259vh;
    width: 7.3vw;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.38888vh;
    margin-left: 1.04vw;
    width: 10.42vw;
    height: 5.925926vh;
    position: relative;
    color: #383838;
    border-radius: 8px;
    overflow: hidden;

    &:hover {
      cursor: pointer;
      background-color: #d4e4ff;
      color: #487aff;
    }
  }

  #userName {
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 2.037037vh;
    position: absolute;
    left: 4.5vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .box {
    color: #707070;
    margin-left: 1.04vw;
    margin-top: 0.6vh;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    width: 10.42vw;
    height: 4.3vh;
    display: flex;
    flex-direction: row;
  }

  .nonbox {
    color: #707070;
    margin-left: 1.04vw;
    margin-top: 0.6vh;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    width: 10.42vw;
    height: 4.3vh;
    display: flex;
    flex-direction: row;
  }

  .box:hover {
    background-color: #d4e4ff;
    color: #487aff;
    cursor: grab;
  }

  #more {
    width: 1.5625vw;
    height: 2.7777vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #moreicon {
    width: 1.041667vw;
    height: 1.851852;
    position: absolute;
    right: 0.5208333vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .endBox {
    color: #707070;
    margin-left: 1.04vw;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    margin-bottom: 0.6vh;
    border-radius: 8px;
    width: 10.42vw;
    height: 4.3vh;
    display: flex;
    flex-direction: row;
  }

  .endBox:hover {
    background-color: #f7b6b5;
    color: #ff5854;
    cursor: grab;
  }
  /* 추가로 클릭 되면 box 색 바뀌게 설정 */

  .newBox {
    color: #707070;
    margin-left: 1.04vw;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    border-radius: 8px;
    width: 10.42vw;
    height: 3.703704vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: grab;
      background-color: #d4e4ff;
      color: #487aff;
    }
  }

  .boxText {
    margin-left: 0.625vw;
    line-height: 3.703704vh;
    font-weight: 600;
    font-size: 0.9375vw;
    color: #707070;
    margin-top: auto;
    margin-bottom: auto;
  }

  .subBoxText {
    margin-left: 2.5vw;
    line-height: 3.703704vh;
    width: 5.5vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: auto;
    margin-bottom: auto;
  }

  #icon {
    width: 1.25vw;
    margin-left: 0.625vw;
  }

  /* 호버 및 클릭시 아이콘 색깔 바뀌게  */

  .iconWrap {
    margin-top: auto;
    margin-bottom: auto;
  }

  #newTeample {
    color: #c0c0c0;
    line-height: 40px;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
  }
  /* 조금 더 왼쪽으로 땡겨야 할 듯 */

  .btm {
    margin-top: auto;
    margin-bottom: 3vh;
  }

  .profileImg {
    width: 2.8vw;
    border-radius: 60%;
    position: absolute;
    left: 1vw;
    padding: 0.2vw;
  }

  #logo {
    &:hover{
      cursor: pointer;
    }
  }
`;

const TeamBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SideBar = () => {
  const [name, setName] = useRecoilState(usernameState);
  const [, setSchool] = useRecoilState(userschoolState);
  const [, setMajor] = useRecoilState(usermajorState);
  const [teamid, setTeamid] = useRecoilState(teamidState);
  const [actTeamList, setActTeamList] = useState([]);
  const [finTeamList, setFinTeamList] = useState([]);
  const [modal, setModal] = useState(false);
  const [nextModal, setNextModal] = useState(false);
  const token = localStorage.getItem('jwt_accessToken');
  const [, setIsOpen] = useRecoilState(feedbackState);
  const [, setModal2] = useRecoilState(modal2State);
  const [zIndex, setZIndex] = useRecoilState(AddTeamzIndexState);
  const [profileImg, setProfileImg] = useRecoilState(profileImgState);
  const navigate = useNavigate();

  const activeButton = {
    background: '#487AFF',
    color: '#ffffff',
    opacity: 1,
  };

  const activeEndButton = {
    background: '#FF5854',
    color: 'white',
    opacity: 1,
  };

  const activeProfBtn = {
    background: '#D4E4FF',
  };

  const showModal = () => {
    setModal(!modal);
    setIsOpen(false);
    setModal2(false);
    if (modal) {
      setZIndex(997);
    } else {
      setZIndex(1000);
    }
  };

  const delTeampleAPI = async () => {
    await axios({
      baseURL: baseURL,
      url: 'api/teams',
      method: 'delete',
      headers: {
        Authorization: token,
      },
      params: { teamId: teamid },
    })
      .then((response) => {
        console.log(response);
        navigate('/home');
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getTeamid = (t: any) => {
    setTeamid(t.id);
  };

  const getProfile = async () => {
    await axios({
      baseURL: baseURL,
      url: 'api/users/userprofiles',
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setName(res.data.data.name);
        setSchool(res.data.data.schoolName);
        setMajor(res.data.data.major);
        setProfileImg(res.data.data.profileImage);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getActiveTeamsAPI = async () => {
    await axios({
      url: `/api/users/teams`,
      baseURL: baseURL,
      method: 'get',
      headers: {
        Authorization: token,
      },
      params: { active: 1 },
    })
      .then((response) => {
        setActTeamList(response.data.data.teams.reverse());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getFinishedTeamsAPI = async () => {
    await axios({
      url: `/api/users/teams`,
      baseURL: baseURL,
      method: 'get',
      headers: {
        Authorization: token,
      },
      params: { active: 0 },
    })
      .then((response) => {
        setFinTeamList(response.data.data.teams);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getProfile();
    getActiveTeamsAPI();
    getFinishedTeamsAPI();
  }, []);

  const alertDelTeample = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Alert>
            <img src={delSad} className="sad" />
            <div className="alertBody">
              팀플에서 나가면 프로젝트 데이터가 삭제됩니다
            </div>
            <div className="alertTitle">정말로 팀플에서 나가시겠어요?</div>
            <div className="alertButtons">
              <button onClick={onClose} className="alertNo">
                취소
              </button>
              <button
                onClick={() => {
                  delTeampleAPI();
                }}
                className="alertYes"
              >
                네,삭제할래요.
              </button>
            </div>
          </Alert>
        );
      },
    });
  };

  const onClickLogo = () => {
    if (localStorage.getItem('jwt_accessToken')) navigate('/home');
    else navigate('/');
  };

  return (
    <SideBarBox style={{ zIndex: zIndex }}>
      <div className="logo">
        <img src={logo} onClick={onClickLogo} id="logo" />
      </div>
      <div
        className="user"
        style={window.location.pathname === '/profile' ? activeProfBtn : {}}
        onClick={() => window.open(`/profile`, '_self')}
      >
        {profileImg ? (
          <img
            className="profileImg"
            src={require(`../images/profile/proImageU` + profileImg + `.png`)}
          />
        ) : (
          <img className="profileImg" src={prof1} />
        )}
        <div id="userName">{name}</div>
      </div>

      <div
        className="box"
        style={window.location.pathname === '/home' ? activeProfBtn : {}}
        onClick={() => window.open(`/home`, '_self')}
      >
        <div className="iconWrap">
          <img
            src={house}
            id="icon"
            style={window.location.pathname === '/home' ? activeProfBtn : {}}
          />
        </div>
        <div
          className="boxText"
          style={window.location.pathname === '/home' ? activeProfBtn : {}}
        >
          홈
        </div>
      </div>

      <div className="nonbox">
        <div className="iconWrap">
          <img src={usersThree} id="icon" />
        </div>
        <div className="boxText">팀플</div>
      </div>
      <div style={{ overflow: 'auto' }}>
        {actTeamList.map((team: any, index: number) => (
          <TeamBox
            className="box"
            id={team.teamId}
            onClick={(e: any) => {
              getTeamid(e.target);
          
            }}
            key={index}
            style={
              window.location.pathname === `/teample-home/${team.teamId}`
                ? activeButton
                : {}
            }
          >
            <div className="subBoxText" id={team.teamId} onClick={() => {
             
              window.open(`/teample-home/${team.teamId}`, '_self');
            }}>
              {team.name}
            </div>
            {window.location.pathname === `/teample-home/${team.teamId}` ? (
              <button id="more" onClick={alertDelTeample}>
                <img
                  src={out}
                  id="moreicon"
                  style={
                    window.location.pathname === `/teample-home/${team.teamId}`
                      ? activeButton
                      : {}
                  }
                />
              </button>
            ) : null}
          </TeamBox>
        ))}

        {/* 끝난 팀플 */}
        {finTeamList.map((team: any, index: number) => (
          <TeamBox
            className="endBox"
            id={team.teamId}
            onClick={(e) => {
              getTeamid(e.target);
             
            }}
            key={index}
            style={
              window.location.pathname === `/teample-home/${team.teamId}`
                ? activeEndButton
                : {}
            }
          >
            <div
              className="subBoxText"
              id={team.teamId}
              onClick={() => {
              
              window.open(`/teample-home/${team.teamId}`, '_self');
            }}
            >
              {team.name}
            </div>
            {window.location.pathname === `/teample-home/${team.teamId}` ? (
              <button id="more" onClick={alertDelTeample}>
                <img
                  src={out}
                  id="moreicon"
                  style={
                    window.location.pathname === `/teample-home/${team.teamId}`
                      ? activeEndButton
                      : {}
                  }
                />
              </button>
            ) : null}
          </TeamBox>
        ))}
        <div id="newTeample" onClick={showModal}>
          <div className="newBox">+ 새 팀플</div>
        </div>
      </div>

      <div className="btm">
        <Link to="/template" style={{ textDecoration: 'none' }}>
          <div className="box">
            <div className="iconWrap">
              <img src={folderIcon} id="icon" />
            </div>
            <div className="boxText">템플릿</div>
          </div>
        </Link>
        <div className="box">
          <div className="iconWrap">
            <img src={headset} id="icon" />
          </div>
          <div className="boxText">고객센터</div>
        </div>
      </div>
      <ModalContainer>
        {modal && (
          <AddTeample setModal={setModal} setNextModal={setNextModal} />
        )}
        {nextModal && (
          <AddTeample2 setModal={setModal} setNextModal={setNextModal} />
        )}
      </ModalContainer>
    </SideBarBox>
  );
};

const Alert = styled.div`
  width: 440px;
  height: 193px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  background-color: white;

  .alertButtons {
    position: absolute;
    bottom: 34px;
    right: 34px;
    display: flex;
    justify-content: right;
  }

  .alertBody {
    position: absolute;
    top: 91px;
    font-size: 14px;
    color: #707070;
    font-weight: 400;
  }

  .alertTitle {
    position: absolute;
    font-size: 18px;
    color: #383838;
    font-weight: 600;
    top: 113px;
  }

  .alertYes {
    color: #487aff;
    font-weight: 600;
    font-size: 16px;
  }

  .alertNo {
    color: #a7a7a7;
    font-weight: 600;
    font-size: 16px;
    margin-right: 20px;
  }

  .sad {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 18px;
  }
`;

export default SideBar;

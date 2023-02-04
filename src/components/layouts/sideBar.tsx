import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import house from '../images/House.png';
import usersThree from '../images/UsersThree.png';
import folderIcon from '../images/FolderSimple.png';
import headset from '../images/Headset.png';
import { Link, useNavigate } from 'react-router-dom';
import prof1 from '../images/profile/proImageU1.png';
import { ImExit } from 'react-icons/im';
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

const SideBarBox = styled.div`
  width: 12.5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f4f8ff;
  z-index: 998;
  position: fixed;

  .logo {
    margin-left: 2.1vw;
    margin-top: 19px;
    width: 7.05vw;
    height: 38px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .user {
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-left: 1.04vw;
    margin-top: 1.111vh;
    width: 10.42vw;
    height: 64px;
    position: relative;
    color: #383838;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      background-color: #d4e4ff;
    }
  }

  #userName {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 22px;
    position: absolute;
    left: 5vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #userImage {
    width: 2.08333vw;
    height: 3.703704vh;
    background-size: cover;
    border-radius: 40px;
    position: absolute;
    left: 1.2vw;
  }

  .box {
    color: #707070;
    margin-left: 1.04vw;
    margin-top: 1.111vh;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    width: 10.42vw;
    height: 40px;
    display: flex;
    flex-direction: row;
  }

  .box:hover {
    background-color: #d4e4ff;
    color: #487aff;
    /* background-color: #487aff;
    color: #d4e4ff; */
    cursor: grab;
  }

  #more {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #moreicon {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
  }

  .endBox {
    color: #707070;
    margin-left: 1.04vw;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    width: 10.42vw;
    height: 40px;
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
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .newBox:hover {
    cursor: grab;
    background-color: #487aff;
    color: #ffffff;
  }

  .boxText {
    margin-left: 0.625vw;
    line-height: 40px;
    font-weight: 600;
    font-size: 0.9375vw;
    color: #707070;
  }

  .subBoxText {
    margin-left: 2.5vw;
    line-height: 40px;
    width: 5.5vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    margin-bottom: 48px;
  }

  .profileImg {
    width: 2.8vw;
    border-radius: 50%;
    position: absolute;
    top: 12px;
    left: 1.5vw;
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
  const [clickHome, setClickHome] = useState(false);

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

  //api 만들어지면 연결
  const delTeampleAPI = async () => {
    await axios({
      baseURL: 'https://www.teampple.site/',
      url: 'api/teams',
      method: 'delete',
      headers: {
        Authorization: token,
      },
      params: { teamId: teamid },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const teampleOut = () => {
    if (window.confirm('정말로 팀플에서 나가시겠어요?')) {
      delTeampleAPI();
      alert('팀플 나가기 성공.');
      navigate('/home');
      location.reload();
    }
  };

  const getTeamid = (t: any) => {
    setTeamid(t.id);
  };

  const getProfile = async () => {
    await axios({
      baseURL: 'https://www.teampple.site/',
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
      baseURL: 'https://www.teampple.site',
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
      baseURL: 'https://www.teampple.site',
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

  return (
    <SideBarBox style={{ zIndex: zIndex }}>
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} />
        </Link>
      </div>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <div
          className="user"
          style={window.location.pathname === '/profile' ? activeProfBtn : {}}
        >
          <div className="profileImg">
            {profileImg ? (
              <img
                src={require(`../images/profile/proImageU` +
                  profileImg +
                  `.png`)}
              />
            ) : (
              <img src={prof1} />
            )}
          </div>
          <a id="userName">{name}</a>
        </div>
      </Link>

      <Link to="/home" style={{ textDecoration: 'none' }}>
        <div
          className="box"
          style={window.location.pathname === '/home' ? activeProfBtn : {}}
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
      </Link>

      <div className="box">
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
            onClick={(e) => {
              getTeamid(e.target);
            }}
            key={index}
            style={
              window.location.pathname === `/teample-home/${team.teamId}`
                ? activeButton
                : {}
            }
          >
            <div
              className="subBoxText"
              id={team.teamId}
              onClick={() =>
                window.open(`/teample-home/${team.teamId}`, '_self')
              }
            >
              {team.name}
            </div>
            <div id="more" onClick={teampleOut}>
              <ImExit
                id="moreicon"
                style={
                  window.location.pathname === `/teample-home/${team.teamId}`
                    ? activeButton
                    : {}
                }
              />
            </div>
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
              onClick={() =>
                window.open(`/teample-home/${team.teamId}`, '_self')
              }
            >
              {team.name}
            </div>
            <div id="more" onClick={teampleOut}>
              <ImExit
                id="moreicon"
                style={
                  window.location.pathname === `/teample-home/${team.teamId}`
                    ? activeEndButton
                    : {}
                }
              />
            </div>
          </TeamBox>
        ))}
        <div className="newBox" id="newTeample" onClick={showModal}>
          <div>+ 새 팀플</div>
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

export default SideBar;

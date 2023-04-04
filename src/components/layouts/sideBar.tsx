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
import {
  teamidState,
  AddTeamzIndexState,
  feedbackState,
  modal2State,
} from 'state';
import { ModalContainer } from '../../css/TeampleHomePage/PlanManagerStyle';
import AddTeample from 'components/popup/AddTeample1';
import AddTeample2 from 'components/popup/AddTeample2';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import userAPI from 'api/userAPI';
import teamAPI from 'api/teamAPI';
import * as Style from '../../css/Layout/SideBarStyle';
import { userTeamInfo } from 'interfaces/userType';

const SideBar = () => {
  const [name, setName] = useRecoilState(usernameState);
  const [, setSchool] = useRecoilState(userschoolState);
  const [, setMajor] = useRecoilState(usermajorState);
  const [teamid, setTeamid] = useRecoilState(teamidState);
  const [actTeamList, setActTeamList] = useState([]);
  const [finTeamList, setFinTeamList] = useState([]);
  const [modal, setModal] = useState(false);
  const [nextModal, setNextModal] = useState(false);
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
    // await axios({
    //   baseURL: baseURL,
    //   url: 'api/teams',
    //   method: 'delete',
    //   headers: {
    //     Authorization: token,
    //   },
    //   params: { teamId: teamid },
    // })
    teamAPI
      .delete(teamid)
      .then(() => {
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

  const getProfile = () => {
    userAPI
      .getUserProfile()
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

  const getActiveTeamsAPI = () => {
    userAPI
      .getActTeams()
      .then((response) => {
        setActTeamList(response.data.data.teams.reverse());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getFinishedTeamsAPI = () => {
    userAPI
      .getFinTeams()
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
          <Style.Alert>
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
          </Style.Alert>
        );
      },
    });
  };

  const onClickLogo = () => {
    if (localStorage.getItem('jwt_accessToken')) navigate('/home');
    else navigate('/');
  };

  return (
    <Style.SideBarBox style={{ zIndex: zIndex }}>
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
        {actTeamList.map((team: userTeamInfo, index: number) => (
          <Style.TeamBox
            className="box"
            id={team.teamId.toString()}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
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
              id={team.teamId.toString()}
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
                      ? activeButton
                      : {}
                  }
                />
              </button>
            ) : null}
          </Style.TeamBox>
        ))}

        {/* 끝난 팀플 */}
        {finTeamList.map((team: userTeamInfo, index: number) => (
          <Style.TeamBox
            className="endBox"
            id={team.teamId.toString()}
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
              id={team.teamId.toString()}
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
          </Style.TeamBox>
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
    </Style.SideBarBox>
  );
};

export default SideBar;

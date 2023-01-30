import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import house from '../images/House.png';
import usersThree from '../images/UsersThree.png';
import folderIcon from '../images/FolderSimple.png';
import headset from '../images/Headset.png';
import { Link } from 'react-router-dom';
import prof1 from '../images/profile/proImageU1.png';
import prof2 from '../images/profile/proImageU2.png';
import prof3 from '../images/profile/proImageU3.png';
import prof4 from '../images/profile/proImageU4.png';
import prof5 from '../images/profile/proImageU5.png';
import prof6 from '../images/profile/proImageU6.png';
import prof7 from '../images/profile/proImageU7.png';
import prof8 from '../images/profile/proImageU8.png';
import prof9 from '../images/profile/proImageU9.png';
// import tnames from '../../data/teamList.json';
import { usernameState, userschoolState, usermajorState, profileImgState } from 'state';
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

const SideBarBox = styled.div<{ userid: string }>`
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
    margin-top: 15px;
    width: 12.5vw;
    height: 64px;
    position: relative;
    color: #383838;
    &:hover {
      cursor: pointer;
    }
  }

  #userName {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 22px;
    position: absolute;
    top: 21px;
    left: 5.5vw;
  }

  #userImage {
    width: 40px;
    height: 40px;
    background-image: url(${(props) => props.userid});
    background-size: cover;
    border-radius: 40px;
    position: absolute;
    top: 12px;
    left: 1.875vw;
  }

  .box {
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

  .box:hover {
    background-color: #d4e4ff;
    color: #487aff;
    cursor: grab;
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
    background-color: #ff5854;
    color: white;
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
    font-size: 18px;
    color: #707070;
  }

  .subBoxText {
    margin-left: 2.5vw;
    line-height: 40px;
  }

  #icon {
    width: 24px;
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
    left: 1.875vw;
  }
`;

const SideBar = () => {
  const [userid, setUserid] = useState(prof1);
  const [name, setName] = useRecoilState(usernameState);
  const [school, setSchool] = useRecoilState(userschoolState);
  const [major, setMajor] = useRecoilState(usermajorState);
  const [teamid, setTeamid] = useRecoilState(teamidState);
  const [actTeamList, setActTeamList] = useState([]);
  const [finTeamList, setFinTeamList] = useState([]);
  const [modal, setModal] = useState(false);
  const [nextModal, setNextModal] = useState(false);
  const token = localStorage.getItem('jwt_accessToken');
  const [isOpen, setIsOpen] = useRecoilState(feedbackState);
  const [modal2, setModal2] = useRecoilState(modal2State);
  const [zIndex, setZIndex] = useRecoilState(AddTeamzIndexState);
  const [profileImg,setProfileImg] = useRecoilState(profileImgState);

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
        setProfileImg(res.data.data.profileImage)
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
        setActTeamList(response.data.data.teams);
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
    <SideBarBox userid={userid} style={{ zIndex: zIndex }}>
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} />
        </Link>
      </div>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <div className="user">
        <div className="profileImg">
                {profileImg && 
                  <img
                    src={require('../images/profile/' +
                      profileImg +
                      '.png')}
                  />}
              </div>
          <a id="userName">{name}</a>
        </div>
      </Link>

      <Link to="/home" style={{ textDecoration: 'none' }}>
        <div className="box" style={{ marginTop: '12px' }}>
          <div className="iconWrap">
            <img src={house} id="icon" />
          </div>
          <div className="boxText">홈</div>
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
          <div
            key={index}
            id={team.teamId}
            onClick={(e) => {
              getTeamid(e.target);
            }}
          >
            <div
              className="box"
              id={team.teamId}
              onClick={() =>
                window.open(`/teample-home/${team.teamId}`, '_self')
              }
            >
              <div className="subBoxText" id={team.teamId}>
                {team.name}
              </div>
            </div>
          </div>
        ))}
        {/* 끝난 팀플 css 수정 필요 */}
        {finTeamList.map((team: any, index: number) => (
          <div
            key={index}
            id={team.teamId}
            onClick={(e) => {
              getTeamid(e.target);
            }}
          >
            <Link
              to={`/teample-home/${team.teamId}`}
              style={{ textDecoration: 'none', color: '#707070' }}
            >
              <div className="endBox" id={team.teamId}>
                <div className="subBoxText" id={team.teamId}>
                  {team.name}
                </div>
              </div>
            </Link>
          </div>
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

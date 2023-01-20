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
import { teamidState } from 'state';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const SideBarBox = styled.div<{ userid: string }>`
  width: 240px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background-color: #f4f8ff;
  z-index: 998;
  position: fixed;

  .logo {
    margin-left: 40px;
    margin-top: 19px;
    width: 135.47px;
    height: 38px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .user {
    display: flex;
    /* margin-left: 36px; */
    /* margin-bottom: 12px; */
    margin-top: 15px;
    width: 240px;
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
    font-size: 18px;
    line-height: 22px;
    /* margin-top: auto;
    margin-bottom: auto; */
    position: absolute;
    top: 21px;
    left: 88px;
  }

  #userImage {
    width: 40px;
    height: 40px;
    background-image: url(${(props) => props.userid});
    background-size: cover;
    border-radius: 40px;
    /* margin-right: 12px;
    margin-top: auto;
    margin-bottom: auto; */
    position: absolute;
    top: 12px;
    left: 36px;
  }

  .box {
    color: #707070;
    margin-left: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    width: 200px;
    height: 40px;
    display: flex;
    flex-direction: row;
  }

  .box:hover {
    background-color: #d4e4ff;
    color: #487aff;
    cursor: grab;
  }
  /* 추가로 클릭 되면 box 색 바뀌게 설정 */

  .newBox {
    color: #707070;
    margin-left: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    border-radius: 8px;
    width: 200px;
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
    margin-left: 12px;
    line-height: 40px;
    font-weight: 600;
    font-size: 18px;
    color: #707070;
  }

  .subBoxText {
    margin-left: 48px;
    line-height: 40px;
  }

  #icon {
    width: 24px;
    height: 24px;
    margin-left: 12px;
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
    font-size: 18px;
    line-height: 100%;
  }
  /* 조금 더 왼쪽으로 땡겨야 할 듯 */

  .btm {
    margin-top: auto;
    margin-bottom: 48px;
  }
`;

const SideBar = () => {
  const [userid, setUserid] = useState(prof1);
  const [teamid, setTeamid] = useRecoilState(teamidState);
  const [actTeamList, setActTeamList] = useState([]);
  const [finTeamList, setFinTeamList] = useState([]);
  const getTeamid = (team: any, e: React.MouseEvent<HTMLElement>) => {
    setTeamid(team.teamId);
  };
  const testtoken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZWFtcHBsZSIsImlhdCI6MTY3NDIzODQ5NSwic3ViIjoia2FrYW9VMiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NzQyNDIwOTV9.pY40z0oK3XdCKI3ynDDlAuVD8LQn9xVPnaSWP0jLvzA';

  const getActiveTeamsAPI = async () => {
    await axios({
      url: `/api/users/teams`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      headers: {
        Authorization: testtoken,
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
        Authorization: testtoken,
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
    getActiveTeamsAPI();
    getFinishedTeamsAPI();
  }, []);

  return (
    <SideBarBox userid={userid}>
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} />
        </Link>
      </div>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <div className="user">
          <div id="userImage"></div>
          <a id="userName">김팀쁠</a>
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

      {actTeamList.map((team: any, index: number) => (
        <div
          key={index}
          onClick={(e) => {
            getTeamid(team, e);
          }}
        >
          <Link
            to={`/teample-home/${team.teamId}`}
            style={{ textDecoration: 'none', color: '#707070' }}
          >
            <div className="box">
              <div className="subBoxText">{team.name}</div>
            </div>
          </Link>
        </div>
      ))}
      {/* 끝난 팀플 css 수정 필요 */}
      {finTeamList.map((team: any, index: number) => ( 
        <div
          key={index}
          onClick={(e) => {
            getTeamid(team, e);
          }}
        >
          <Link
            to={`/teample-home/${team.teamId}`}
            style={{ textDecoration: 'none', color: '#707070' }}
          >
            <div className="box">
              <div className="subBoxText">{team.name}</div>
            </div>
          </Link>
        </div>
      ))}
      <div className="newBox" id="newTeample">
        <div>+ 새 팀플</div>
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
    </SideBarBox>
  );
};

export default SideBar;

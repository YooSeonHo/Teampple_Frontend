import styled from 'styled-components';
import React, { useState } from 'react';
import logo from '../images/logo.png';
import house from '../images/House.png';
import usersThree from '../images/UsersThree.png';
import folderIcon from '../images/FolderSimple.png';
import headset from '../images/Headset.png';
import { Link } from 'react-router-dom';
import prof1 from '../images/profile/prof1.png';
import prof2 from '../images/profile/prof2.png';
import prof3 from '../images/profile/prof3.png';
import prof4 from '../images/profile/prof4.png';
import prof5 from '../images/profile/prof5.png';
import prof6 from '../images/profile/prof6.png';
import prof7 from '../images/profile/prof7.png';
import prof8 from '../images/profile/prof8.png';
import prof9 from '../images/profile/prof9.png';
// import { teamidState } from 'state';
// import { useRecoilState } from 'recoil';

const SideBarBox = styled.div<{ userid: string }>`
  width: 240px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background-color: #f4f8ff;

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
  //임의로 생성
  const tnames = [
    { tname: '경영 전략', tid: 1 },
    { tname: '마케팅 원론', tid: 2 },
    { tname: '팀플 서비스', tid: 3 },
    { tname: '세오스 기획', tid: 4 },
    { tname: '세오스 디자인', tid: 5 },
    { tname: '세오스 개발', tid: 6 },
  ];
  // const [teamid, setTeamid] = useRecoilState(teamidState);

  return (
    <SideBarBox userid={userid}>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="user">
        <div id="userImage"></div>
        <a id="userName">김팀쁠</a>
      </div>

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

      {tnames.map((team, index) => (
        <div key={index}>
          <Link
            to={`/teample-home/${team.tid}`}
            style={{ textDecoration: 'none', color: '#707070' }}
          >
            <div className="box">
              <div className="subBoxText">{team.tname}</div>
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

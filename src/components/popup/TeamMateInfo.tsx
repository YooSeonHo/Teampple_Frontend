import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import prof from '../images/template1.png';
import { FiLink2 } from 'react-icons/fi';
import axios from 'axios';
import { ITeamMate } from '../../interfaces';
import { useRecoilState } from 'recoil';
import { teamMateNumState, modal2State, teamidState } from 'state';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { baseURL } from 'api/client';

const TeamMateInfo = () => {
  const [teamMates, setTeamMates] = useState([]);
  const [user, setUser] = useState<any | undefined>();
  const [modal2, setModal2] = useRecoilState(modal2State);
  const token = localStorage.getItem('jwt_accessToken');
  const [teamid] = useRecoilState(teamidState);

  const getTeamMateAPI = async () => {
    await axios({
      url: `/api/teams/teammates`,
      baseURL: baseURL,
      method: 'get',
      params: { teamId: teamid },
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setTeamMates(response.data.data.teammateInfoVos);
        setUser(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getLink = async () => {
    await axios({
      url: '/api/invitations',
      baseURL: baseURL,
      method: 'get',
      params: { teamId: teamid },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        navigator.clipboard.writeText(res.data.data.url).then(() => {
          alertCopyLink();
          setModal2(false);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTeamMateAPI();
  }, [teamid]);

  const onCopy = async () => {
    await getLink();
  };

  const alertCopyLink = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Alert>
            <div className="alertTitle">링크가 클립보드에 복사되었어요</div>
            <div className="alertBody">
              링크를 팀원들에게 전송해 팀쁠에 초대해주세요
            </div>
            <button onClick={onClose} className="close">
              확인
            </button>
          </Alert>
        );
      },
    });
  };

  return (
    <TeamMateInfoContainer>
      <Title>팀메이트 정보</Title>
      <TeamMateBox>
        {user && (
          <TeamMate>
            <Profile profileImage={user.image} />
            <TextInfo>
              <Name>{user.name}</Name>
              <School>
                {user.schoolName} {user.major}
              </School>
            </TextInfo>
            <Me>(나)</Me>
          </TeamMate>
        )}
        {teamMates &&
          teamMates.map((teamMate: ITeamMate) => (
            <TeamMate key={teamMate.name}>
              <Profile profileImage={teamMate.image} />
              <TextInfo>
                <Name>{teamMate.name}</Name>
                <School>
                  {teamMate.schoolName} {teamMate.major}
                </School>
              </TextInfo>
            </TeamMate>
          ))}
      </TeamMateBox>
      <LinkBtn onClick={onCopy}>
        <FiLink2 style={{ marginRight: '0.416667vw', fontSize: '0.83333vw' }} />
        팀원 초대 링크 복사
      </LinkBtn>
    </TeamMateInfoContainer>
  );
};

const TeamMateInfoContainer = styled.div`
  width: 16.66666vw;
  min-height: 33.0555vh;
  background: #ffffff;
  border: 2px solid #dedede;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  position: relative;
  overflow-x: hidden;
`;

const Title = styled.div`
  position: absolute;
  left: 0.98958vw;
  top: 1.851vh;
  font-weight: 500;
  font-size: 0.72916vw;
  line-height: 1.57407vh;
`;
const TeamMateBox = styled.div`
  width: 16.458333vw;
  height: 23.7037vh;
  position: absolute;
  top: 4.9074vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
const TeamMate = styled.div`
  width: 16.458333vw;
  height: 5.92592vh;
  padding-top: 1.1111vh;
  padding-bottom: 1.1111vh;
  padding-right: 0.9375vh;
  padding-left: 2vh;
  display: flex;
  overflow-x: hidden;
`;

const Profile = styled.div<any>`
  width: 2.08333vw;
  height: 3.7037vh;
  border-radius: 16px;
  background: #fce44c;
  background-image: url(${(props) =>
    require('../images/profile/proImageU' + props.profileImage + '.png')});
  background-size: cover;
`;
const TextInfo = styled.div`
  height: 3.98148vh;
  width: 8.8541vw;
  padding-top: 0vh;
  padding-bottom: 0vh;
  padding-right: 0.83333vw;
  padding-left: 0.83333vw;
`;
const Name = styled.div`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 2.03703vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const School = styled.div`
  font-weight: 400;
  font-size: 0.7291vw;
  line-height: 1.57407vh;
  color: #a7a7a7;
  margin-top: 0.37037vh;
`;

const Me = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7291vw;
  color: #487aff;
  position: absolute;
  right: 1.041667vw;
  top: 0px;
`;

const LinkBtn = styled.div`
  position: absolute;
  width: 6.25vw;
  height: 1.851852vh;
  left: 1.041667vw;
  top: 29.35185vh;
  font-weight: 500;
  font-size: 0.625vw;
  line-height: 100%;
  color: #487aff;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: grab;
  }
`;

const Alert = styled.div`
  width: 440px;
  height: 168px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  .alertBody {
    position: absolute;
    font-size: 18px;
    color: #383838;
    font-weight: 600;
    top: 66px;
  }

  .alertTitle {
    position: absolute;
    top: 40px;
    font-size: 14px;
    color: #707070;
    font-weight: 400;
  }

  .close {
    color: #487aff;
    font-weight: 600;
    font-size: 16px;
    position: absolute;
    bottom: 34px;
  }
`;

export default TeamMateInfo;

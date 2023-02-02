import React, { useState } from 'react';
import styled from 'styled-components';
import ModifyTask from 'components/popup/ModifyTask';
import { useRecoilState } from 'recoil';
import { teampleDetailState } from 'state';
import axios from 'axios';
import { taskIdState, teamidState } from 'state';
import { useNavigate } from 'react-router-dom';

const MoreSideBar = () => {
  const [modal, setModal] = useRecoilState(teampleDetailState);
  const token = localStorage.getItem('jwt_accessToken');
  const [taskId] = useRecoilState(taskIdState);
  const [teamid] = useRecoilState(teamidState);
  const navigate = useNavigate();

  const showModal = () => {
    setModal(!modal);
  };

  const delTeampleAPI = async () => {
    await axios({
      baseURL: 'https://www.teampple.site/',
      url: 'api/tasks',
      method: 'delete',
      headers: {
        Authorization: token,
      },
      params: { taskId: taskId },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onDelete = () => {
    delTeampleAPI();
    alert('팀플 나가기 성공');
    navigate('/home');
  };

  return (
    <MoreSideBarContainer>
      <div style={{ margin: '8px' }}>
        <SmallBox onClick={onDelete}>팀플 나가기</SmallBox>
      </div>
    </MoreSideBarContainer>
  );
};

const MoreSideBarContainer = styled.div`
  width: 164px;
  height: 52px;
  border: 1px solid #dedede;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  background-color: white;
  z-index: 1000;
`;

const SmallBox = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  color: #383838;
  width: 148px;
  height: 36px;
  border-radius: 8px;
  padding: 11px 63px 11px 8px;
  :hover {
    background-color: #eaf2ff;
    cursor: pointer;
  }
`;

const ModalContainer = styled.div``;

export default MoreSideBar;

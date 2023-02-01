import React, { useState } from 'react';
import styled from 'styled-components';
import ModifyTask from 'components/popup/ModifyTask';
import { useRecoilState } from 'recoil';
import { teampleDetailState } from 'state';
import axios from 'axios';
import { taskIdState, teamidState } from 'state';
import { useNavigate } from 'react-router-dom';

const MoreTeampleDetail = () => {
  const [modal, setModal] = useRecoilState(teampleDetailState);
  const token = localStorage.getItem('jwt_accessToken');
  const [taskId] = useRecoilState(taskIdState);
  const [teamid] = useRecoilState(teamidState);
  const navigate = useNavigate();

  const showModal = () => {
    setModal(!modal);
  };

  const delTaskAPI = async () => {
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
    delTaskAPI();
    alert('삭제되었습니다');
    navigate(`/teample-home/${teamid}`);
  };

  return (
    <MoreTeampleDetailContainer>
      <div style={{ margin: '8px' }}>
        <SmallBox onClick={showModal}>할일 수정하기</SmallBox>
        <SmallBox onClick={onDelete}>할일 삭제하기</SmallBox>
      </div>
      <ModalContainer>
        {modal && <ModifyTask setModal={setModal} />}
      </ModalContainer>
    </MoreTeampleDetailContainer>
  );
};

const MoreTeampleDetailContainer = styled.div`
  width: 164px;
  height: 88px;
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

export default MoreTeampleDetail;

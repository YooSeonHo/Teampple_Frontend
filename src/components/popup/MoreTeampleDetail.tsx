import React, { useState } from 'react';
import styled from 'styled-components';
import ModifyTask from 'components/popup/ModifyTask';
import { useRecoilState } from 'recoil';
import { teampleDetailState } from 'state';
import axios from 'axios';
import { taskIdState, teamidState } from 'state';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { baseURL } from 'api/client';

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
      baseURL: baseURL,
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
    navigate(`/teample-home/${teamid}`);
    window.location.reload();
  };

  const alertDelTask = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Alert>
            <div className="alertBody">삭제하시면 복구할 수 없어요.</div>
            <div className="alertTitle">정말 할 일을 삭제하시겠어요?</div>
            <div className="alertButtons">
              <button onClick={onClose} className="alertNo">
                취소
              </button>
              <button
                onClick={() => {
                  onDelete();
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

  return (
    <MoreTeampleDetailContainer>
      <div style={{ margin: '8px' }}>
        <SmallBox onClick={showModal}>할일 수정하기</SmallBox>
        <SmallBox onClick={alertDelTask}>할일 삭제하기</SmallBox>
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

const Alert = styled.div`
  width: 440px;
  height: 168px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
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
    top: 40px;
    font-size: 14px;
    color: #707070;
    font-weight: 400;
  }

  .alertTitle {
    position: absolute;
    font-size: 18px;
    color: #383838;
    font-weight: 600;
    top: 66px;
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

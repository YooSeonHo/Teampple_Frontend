import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import arrow from '../images/ArrowLineRight2.png';
import done from '../images/done icon.png';
import { StyledToDoInfo } from 'interfaces';
import AddTask from 'components/popup/AddTask';
import { useRecoilState } from 'recoil';
import {
  zIndexState,
  feedbackState,
  modal2State,
  AddToDozIndexState,
  stageIdState,
  taskIdState,
  detailState,
} from 'state';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useDidMountEffect from 'components/hooks/useDidMountEffect';

const CardBox = styled.div<StyledToDoInfo>`
  width: 19.375vw;
  height: 51.481vh;
  background-color: ${(props)=>props.isNow? '#f4f8ff' : '#F0F2F7' };
  border : ${(props)=>props.isNow? ' 2px solid #487AFF' : null };
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin-right: 1.45833vw;
  position: relative;
  flex-shrink: 0;
  
  .toDos {
    overflow-x: hidden;
    height: 30vh;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-left: 1.25vw;
    margin-top: 2.22222vh;
    margin-right: 1.25vw;
  }
  .step {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color:${(props)=>props.isNow? '#88A9FF' : '#707070' };
  }
  
  .when {
    font-weight: 400;
    font-size: 0.83333vw;
    line-height: 100%;
    color:${(props)=>props.isNow? '#88A9FF' : '#707070' };
  }
  
  .headerText {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2.407407vh;
  }
  
  .name {
    margin-top: ${(props) => (props.pathname === '/home' ? '2.22222vh' : '1.481481vh')};
    margin-left: 1.25vw;
    font-weight: 600;
    font-size: 1.145833vw;
    line-height: 100%;
    color:${(props)=>props.isNow? '#487AFF' : '#383838' };
  }
  
  .left {
    margin-right: 1.041667vw;
    margin-top: ${(props) => (props.pathname === '/home' ? '1.851852vh' : '1.296296vh')};
    display: flex;
  }
  
  .leftText {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 0.83333vw;
    color:${(props)=>props.isNow? '#487AFF' : '#707070' };
    margin-right: 0.416667vw;
    margin-top: auto;
    margin-bottom: auto;
  }
  
  .leftNumBox {
    background-color:${(props)=>props.isNow? '#487AFF' : '#707070' };
    width: 1.45833vw;
    height: 2.592593vh;
    border-radius: 100px;
    color: white;
    font-weight: 700;
    font-size: 0.833333vw;
    line-height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom : 3px;
  }

  .leftNum {
    margin-top: auto;
    margin-bottom: auto;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .addBox {
    width: 17.291667vw;
    height: 6.66666vh;
    background-color: #ffffff;
    border-radius: 12px;
    display: flex;
    margin-left: 1.041667vw;
    margin-bottom: 1.111vh;
    justify-content: center;
    position: absolute;
    top: 42.962963vh;
  }

  .addBox:hover {
    cursor: grab;
  }

  .addText {
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #487aff;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const ToDoBox = styled.div`
  width: 17.291667vw;
  height: 6.66666vh;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  margin-left: 1.041667vw;
  margin-right: 1.041667vw;
  justify-content: space-between;
  margin-bottom: 12px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .toDoText {
    font-weight: 500;
    font-size: 1.041667vw;
    line-height: 100%;
    color: #505050;
    margin-left: 16px;
    padding-top: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .toDoArr {
    color: #c0c0c0;
    width: 32px;
    height: 32px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 8px;
  }
`;

const Box = styled.div<any>`
  width: 17.291667vw;
  height: 6.66666vh;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  margin-left: 1.041667vw;
  margin-right: 1.041667vw;
  margin-bottom: 1.1111vh;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .doneIcon {
    width: 2.916667vw;
    height: 3.148148vh;
    margin-left: 0.625vw;
    margin-top: 1.94444vh;
  }

  .doneText {
    font-weight: 500;
    font-size: 1.041667vw;
    line-height: 100%;
    color: #505050;
    margin-left: 0.8333vw;
    padding-top: 2.592593vh;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 9.375vw;
  }

  .doneArr {
    color: #c0c0c0;
    width: 1.6666vw;
    height: 2.9629vh;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 0.41666vw;
    margin-left: auto;
  }

  :hover{
    cursor : grab;
  }
  /* 
    스크롤 관련해서 문제 있으면 체크하기 ->호버 할때 보이게해야댐 */
`;

const ModalContainer = styled.div`
  position: fixed;
  margin: 0 auto;
`;

const ToDoCard = ({ todoList }: any) => {
  const [modal, setModal] = useState(false);
  const [zIndex, setZIndex] = useRecoilState(zIndexState);
  const [isOpen, setIsOpen] = useRecoilState(feedbackState);
  const [modal2, setModal2] = useRecoilState(modal2State);
  const [toDoZindex,setToDoZindex] = useRecoilState(AddToDozIndexState);
  const [stageId, setStageId] = useRecoilState(stageIdState);
  const [taskId,setTaskId] = useRecoilState(taskIdState);
  const [detail,setDetail] = useRecoilState(detailState);
  const token = localStorage.getItem('jwt_accessToken');
  const now = new Date();
  const navigate = useNavigate();

  const showModal = () => {
    setModal(!modal);
    setIsOpen(false);
    setModal2(false);
    setToDoZindex(999);
  };

  const onClickedStage = (stage: any) => {
    console.log(Number(stage.id));
    setStageId(Number(stage.id));
  };

  const onClick = async (e : any) =>{
    setTaskId(e.currentTarget.id);
    // taskId && await getDetail().then(()=>{
    //       navigate(`/teample-detail/${taskId}`);
    //   })
  }

  useDidMountEffect(async ()=>{
    taskId && await getDetail().then(()=>{
      navigate(`/teample-detail/${taskId}`) 
    })
  },[taskId])

  const getDetail = async () => {
    await axios({
      url: `/api/tasks`,
      baseURL: 'https://www.teampple.site/',
      method: 'get',
      params: {
        taskId: taskId,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const nowCheck = (startTime : Date , dueTime : Date) =>{
    const start = new Date(startTime);
    const end = new Date(dueTime);
    end.setDate(end.getDate() + 1);
    if (now.getTime() >= start.getTime() && now.getTime() < end.getTime()){
      return true;
    }
    else{
      return false;
    }
  }

  useEffect(()=>{
    console.log(todoList);
  },[])

  return (
    <>
      {todoList.map((todo: any, index: number) => (
        <CardBox
        pathname={window.location.pathname}
        key={index}
        style={{ zIndex: toDoZindex }}
        isNow={nowCheck((todo.startDate.replaceAll('.','-')),(todo.dueDate.replaceAll('.','-')))}
        >
          <>
            <div className="info">
              <div className="step">{todo.sequenceNum}단계</div>
              <div className="when">
                
                {todo.startDate.split('.')[1]+'.' +todo.startDate.split('.')[2]}-
                {todo.dueDate.split('.')[1]+'.' +todo.dueDate.split('.')[2]}
              </div>
            </div>
            <div className="headerText">
              <div className="name">{todo.stageName}</div>
              <div className="left">
                <a className="leftText">남은 일</a>
                <div className="leftNumBox">
                  <a className="leftNum">{todo.totaltask - todo.achievement}</a>
                </div>
              </div>
            </div>
            <div className="toDos">
              {todo.tasks.map((doo: any, index: number) => (
                // <Link
                // to={`/teample-detail/${doo.taskId}`}
                // key={index}
                // style={{ textDecoration: 'none' }}
                // >
                  <Box onClick={onClick} key={index} id={doo.taskId}>
                    {doo.done === true ? (
                      <div className="doneIcon">
                        <img src={done} />
                      </div>
                    ) : <></>
                    }
                    <div className="doneText">{doo.name}</div>
                    <div className="doneArr">
                      <img src={arrow} />
                    </div>
                  </Box>
                // </Link>
              ))}
            </div>
            <div
              className="addBox"
              onClick={(e) => {
                onClickedStage(e.target);
                showModal();
              }}
              id={todo.stageId}
            >
              <div className="addText" id={todo.stageId}>
                + 할 일 추가하기
              </div>
            </div>
            <ModalContainer>
              {modal && <AddTask setModal={setModal} />}
            </ModalContainer>
          </>
        </CardBox>
      ))}
    </>
  );
};

export default ToDoCard;

//해당 기간에 색깔 바꾸는 부분만 손 보면 될듯

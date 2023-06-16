import React, { useState } from 'react';
import arrow from '../images/rightArrow.png';
import done from '../images/done icon.png';
import AddTask from 'components/popup/AddTask';
import { useRecoilState } from 'recoil';
import {
  feedbackState,
  modal2State,
  AddToDozIndexState,
  stageIdState,
  taskIdState,
  detailState,
  teamEndDateState,
} from 'state';
import { useNavigate } from 'react-router-dom';
import useDidMountEffect from 'components/hooks/useDidMountEffect';
import taskAPI from 'api/taskAPI';
import * as Style from '../../css/Todo/TodoCardStyle';

const ToDoCard = ({ todoList }: any) => {
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(feedbackState);
  const [modal2, setModal2] = useRecoilState(modal2State);
  const [toDoZindex, setToDoZindex] = useRecoilState(AddToDozIndexState);
  const [stageId, setStageId] = useRecoilState(stageIdState);
  const [taskId, setTaskId] = useRecoilState(taskIdState);
  const [detail, setDetail] = useRecoilState(detailState);
  const [teamEndDate, setTeamEndDate] = useRecoilState(teamEndDateState);

  const now = new Date();
  const navigate = useNavigate();

  const showModal = () => {
    setModal(!modal);
    setIsOpen(false);
    setModal2(false);
    setToDoZindex(999);
  };

  const onClickedStage = (stage: any) => {
    setStageId(Number(stage.id));
  };

  const onClick = async (e: React.MouseEvent<HTMLElement>) => {
    setTaskId(Number((e.currentTarget as HTMLElement).id));
    // taskId && await getDetail().then(()=>{
    //       navigate(`/teample-detail/${taskId}`);
    //   })
  };

  useDidMountEffect(async () => {
    taskId &&
      (await getDetail().then(() => {
        navigate(`/teample-detail/${taskId}`);
      }));
  }, [taskId]);

  const getDetail = async () => {
    taskAPI
      .get(taskId)
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const nowCheck = (startTime: Date, dueTime: Date) => {
    const start = new Date(startTime);
    const end = new Date(dueTime);
    start.setHours(0, 0, 0);
    end.setHours(0, 0, 0);
    end.setDate(end.getDate() + 1);
    if (now.getTime() >= start.getTime() && now.getTime() <= end.getTime()) {
      return true;
    } else {
      return false;
    }
  };

  const teamEndCheck = () => {
    const teamEnd = new Date(teamEndDate);
    teamEnd.setHours(0, 0, 0);
    teamEnd.setDate(teamEnd.getDate() + 1);
    if (now.getTime() <= teamEnd.getTime()) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {todoList.map((todo: any, index: number) => (
        <Style.CardBox
          pathname={window.location.pathname}
          key={index}
          style={{ zIndex: toDoZindex }}
          isNow={nowCheck(
            todo.startDate.replaceAll('.', '-'),
            todo.dueDate.replaceAll('.', '-'),
          )}
        >
          <>
            <div className="info">
              <div className="step">{todo.sequenceNum}단계</div>
              <div className="when">
                {todo.startDate.split('.')[1] +
                  '.' +
                  todo.startDate.split('.')[2]}
                -{todo.dueDate.split('.')[1] + '.' + todo.dueDate.split('.')[2]}
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
                <Style.Box onClick={onClick} key={index} id={doo.taskId}>
                  {doo.done === true ? (
                    <div className="doneIcon">
                      <img src={done} />
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="doneText">{doo.name}</div>
                  <div className="doneArr">
                    <img src={arrow} />
                  </div>
                </Style.Box>
                // </Link>
              ))}
            </div>

            {teamEndCheck() ? (
              <div className="EndBox" id={todo.stageId}>
                <div
                  className="addText"
                  id={todo.stageId}
                  style={{ color: 'white' }}
                >
                  + 할 일 추가하기
                </div>
              </div>
            ) : (
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
            )}
            <Style.ModalContainer>
              {modal && <AddTask setModal={setModal} />}
            </Style.ModalContainer>
          </>
        </Style.CardBox>
      ))}
    </>
  );
};

export default ToDoCard;

//해당 기간에 색깔 바꾸는 부분만 손 보면 될듯

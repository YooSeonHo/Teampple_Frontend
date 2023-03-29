import React, { useState, useEffect } from 'react';
import arrow from '../images/rightArrow.png';
import done from '../images/done icon.png';
import { useNavigate } from 'react-router-dom';
import NotToDoBox from 'components/teampleHomePage/nothing/NotToDoBox';
import { useRecoilState } from 'recoil';
import {
  detailState,
  taskIdState,
  isLoading1State,
  isLoading2State,
} from 'state';
import useDidMountEffect from 'components/hooks/useDidMountEffect';
import taskAPI from 'api/taskAPI';
import userAPI from 'api/userAPI';
import * as Style from '../../css/HomePage/HomeToDoStyle';

const HomeToDo = () => {
  const [teams, setTeams] = useState([]);
  const [taskId, setTaskId] = useRecoilState(taskIdState);
  const [detail, setDetail] = useRecoilState(detailState);
  const navigate = useNavigate();
  const [isLoading1, setIsLoading1] = useRecoilState(isLoading1State);
  const [isLoading2, setIsLoading2] = useRecoilState(isLoading2State);
  const [isZero, setIsZero] = useState(false);

  const getDetail = async () => {
    setIsLoading1(true);
    taskAPI
      .get(taskId)
      .then((res) => {
        setDetail(res.data.data);
        setIsLoading1(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getTodoAPI = async () => {
    setIsLoading2(true);
    userAPI
      .getTask()
      .then((response) => {
        setTeams(response.data.data.teams);
        setTaskId(0);
        setIsLoading2(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    setTaskId(Number((e.currentTarget as HTMLElement).id));
  };

  useDidMountEffect(async () => {
    taskId &&
      (await getDetail().then(() => {
        navigate(`/teample-detail/${taskId}`);
      }));
  }, [taskId]);

  useEffect(() => {
    getTodoAPI();
  }, []);

  const checkTeams = () => {
    const TaskCheck = teams.filter((t: any) => {
      return t.totalStage !== 0;
      //total이 0이 아닌애들만 필터 -> 테스크체크 길이가 0이면 다 0인거
    });
    if (TaskCheck.length < 1) {
      setIsZero(true);
    } else {
      setIsZero(false);
    }
  };

  useEffect(() => {
    checkTeams();
  }, [teams]);

  return (
    <>
      {teams.length === 0 || isZero ? (
        <NotToDoBox />
      ) : (
        <Style.HomeToDoContainer>
          <Style.Title>할 일</Style.Title>
          <Style.ToDosContainer>
            {teams &&
              teams.map((team: any, index: number) =>
                team.totalStage === 0 ? null : (
                  <Style.ToDoContainer key={index}>
                    <Style.ToDoTitle style={{ color: '#383838' }}>
                      {team.name}
                    </Style.ToDoTitle>
                    <Style.Left>
                      <Style.LeftText>남은 일</Style.LeftText>
                      <Style.LeftNum>
                        {team.totalStage - team.achievement}
                      </Style.LeftNum>
                    </Style.Left>
                    <Style.ToDoList>
                      {team.tasks.map((t: any, index: number) => (
                        <Style.ToDo onClick={onClick} key={index} id={t.taskId}>
                          {t.done === true ? <Style.Done src={done} /> : <></>}
                          <Style.ToDoText>{t.name}</Style.ToDoText>
                          <Style.Arrow src={arrow} />
                        </Style.ToDo>
                      ))}
                    </Style.ToDoList>
                  </Style.ToDoContainer>
                ),
              )}
          </Style.ToDosContainer>
        </Style.HomeToDoContainer>
      )}
    </>
  );
};

export default HomeToDo;

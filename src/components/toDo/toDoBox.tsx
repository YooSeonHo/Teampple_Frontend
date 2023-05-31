import React, { useState, useEffect } from 'react';
import ToDoCard from './toDoCard';
import { teamtasksInfo } from 'interfaces/taskType';
import { useRecoilState } from 'recoil';
import {
  taskIdState,
  teamidState,
  isLoading3State,
  teamEndDateState,
} from 'state';
import teamAPI from 'api/teamAPI';
import * as Style from '../../css/Todo/TodoBoxStyle';

const ToDoBox = ({ pathname }: { pathname: string }) => {
  const [todoList, setTodoList] = useState<teamtasksInfo[]>([]);
  const [teamid] = useRecoilState(teamidState);
  const [taskId, setTaskId] = useRecoilState(taskIdState);
  const [isLoading3, setIsLoading3] = useRecoilState(isLoading3State);
  const [teamEndDate, setTeamEndDate] = useRecoilState(teamEndDateState);

  const getTodoAPI = async () => {
    setIsLoading3(true);
    teamAPI
      .getTask(teamid)
      .then((response) => {
        setTodoList(response.data.data);
        setTaskId(0);
        setIsLoading3(false);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getEndDate = async () => {
    teamAPI
      .get(teamid)
      .then((res) => {
        setTeamEndDate(res.data.data.dueDate);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTodoAPI();
    getEndDate();
  }, [teamid]);
  return (
    <Style.ToDoWrapper pathname={pathname}>
      <ToDoCard todoList={todoList} />
    </Style.ToDoWrapper>
  );
};

export default ToDoBox;

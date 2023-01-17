import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ToDoCard from './toDoCard';
import { StyledToDoBoxInfo } from 'interfaces';
import axios from 'axios';

const ToDoWrapper = styled.div<StyledToDoBoxInfo>`
  width: ${(props) => (props.pathname === '/home' ? '1680px' : '1272px')};
  height: 556px;
  display: flex;
  border-radius: 16px;
  overflow: overlay;
  margin-left: 54px;
  margin-top: 33px;

  // background-color: #F9FAFD;
  background-color: white;

  justify-content: flex-start;
  // justify-content: center;
  /* 만약 박스가 비어 있으면 center, 하나라도 할 일이 있으면 flex-start */

  ::-webkit-scrollbar {
    width: 0.5vw;
    background-color: #f9fafd;
  }

  ::-webkit-scrollbar-thumb:hover {
    width: 0.5vw;
    background-color: gray;
    border-radius: 10px;
  }
  /* 호버 안해도  스크롤 내리면 스크롤 바 보여지게 못하나ㅣ ㅠㅠ */
  /* overlay가 아니라 auto로 하면 스크롤 내려도 보이던데.. 바꾸면 안대나? <- 고민해봐야함 */

  .empty {
    align-self: center;
  }
`;

const ToDoBox = ({ pathname }: { pathname: string }) => {
  const [todoList, setTodoList] = useState([]);
  const [startDate, setStartDate] = useState();
  const [dueDate, setDueDate] = useState();

  const getTodoAPI = async () => {
    await axios({
      url: `/api/teams/tasks`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      params: { teamId: 1 },
    })
      .then((response) => {
        console.log(response.data.data);
        setTodoList(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getTodoAPI();
  }, []);
  return (
    <ToDoWrapper pathname={pathname}>
      <ToDoCard todoList={todoList} />
    </ToDoWrapper>
  );
};

export default ToDoBox;

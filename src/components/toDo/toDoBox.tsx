import styled from 'styled-components';
import React from 'react';
import ToDoCard from './toDoCard';
import { StyledToDoBoxInfo } from 'interfaces';

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
  return (
    <ToDoWrapper pathname={pathname}>
      <ToDoCard />
      {/* <div className="empty">아직 할 일이 없어요.</div> */}
    </ToDoWrapper>
  );
};

export default ToDoBox;

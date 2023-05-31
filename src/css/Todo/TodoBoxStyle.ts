import styled from 'styled-components';
import { StyledToDoBoxInfo } from 'interfaces/taskType';

export const ToDoWrapper = styled.div<StyledToDoBoxInfo>`
  width: 66.25vw;
  height: 53.5vh;
  display: flex;
  overflow: overlay;
  margin-left: 2.8125vw;
  margin-top: 3.0555vh;
  background-color: white;
  z-index: 80; //ㅋㅋ
  justify-content: flex-start;
  // justify-content: center;
  /* 만약 박스가 비어 있으면 center, 하나라도 할 일이 있으면 flex-start */

  // ::-webkit-scrollbar {
  //   width: 0.5vw;
  //   height : 0.5vh;
  //   background-color: #f9fafd;
  // }

  // ::-webkit-scrollbar-thumb:hover {
  //   width: 0.5vw;
  //   background-color: gray;
  //   border-radius: 10px;
  // }
  /* 호버 안해도  스크롤 내리면 스크롤 바 보여지게 못하나ㅣ ㅠㅠ */
  /* overlay가 아니라 auto로 하면 스크롤 내려도 보이던데.. 바꾸면 안대나? <- 고민해봐야함 */

  .empty {
    align-self: center;
  }
`;

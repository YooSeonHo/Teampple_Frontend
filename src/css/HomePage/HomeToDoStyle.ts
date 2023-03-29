import styled from 'styled-components';

export const HomeToDoContainer = styled.div`
  position: relative;
  width: 87.5vw;
  height: 50.926vh;
`;
export const Title = styled.div`
  position: absolute;
  top: 2.222vh;
  left: 2.8125vw;
  font-weight: 500;
  font-size: 1.457vw;
  line-height: 100%;
`;
export const ToDosContainer = styled.div`
  position: absolute;
  top: 7.40741vh;
  left: 2.8125vw;
  width: 87.5vw;
  height: 44.444vh;
  display: flex;
  overflow: auto;
  padding-right: 3vw;
`;
export const ToDoContainer = styled.div`
  width: 19.375vw;
  height: 41.4815vh;
  background: #f4f8ff;
  border-radius: 16px;
  margin-right: 1.4583vw;
  position: relative;
  flex-shrink: 0;
`;
export const ToDoTitle = styled.div`
  position: absolute;
  top: 2.222vh;
  left: 1.25vw;
  font-weight: 600;
  font-size: 1.145vw;
  line-height: 100%;
`;
export const Left = styled.div``;
export const LeftText = styled.span`
  font-weight: 500;
  font-size: 0.833vw;
  line-height: 100%;
  color: #487aff;
  position: absolute;
  right: 3.072vw;
  top: 3vh;
`;
export const LeftNum = styled.span`
  position: absolute;
  right: 1.042vw;
  top: 2.4074vh;
  width: 1.458333vw;
  height: 2.592593vh;
  border-radius: 50px;
  background-color: #487aff;
  color: white;
  font-weight: 700;
  font-size: 0.833vw;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
export const ToDoList = styled.div`
  position: absolute;
  top: 6.6667vh;
  left: 1.041vw;
  width: 18.33vw;
  height: 34.8148vh;
  overflow: auto;
`;
export const ToDo = styled.div`
  width: 17.29vw;
  height: 6.66667vh;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1.111vh;

  :hover {
    cursor: grab;
  }
`;

export const ToDoText = styled.span`
  font-weight: 500;
  font-size: 1.042vw;
  line-height: 100%;
  color: #505050;
  margin-left: 0.83vw;
`;

export const Arrow = styled.img`
  position: absolute;
  right: 1.2vw;
  width: 9px;
`;

export const Done = styled.img`
  width: 2.8vw;
  margin-left: 0.625vw;
`;

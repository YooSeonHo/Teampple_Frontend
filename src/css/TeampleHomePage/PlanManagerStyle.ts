import styled from 'styled-components';

export const ManagerBox = styled.div`
  width: 16.9791vw;
  height: 93.3333vh;
  background-color: #ffffff;
  border-left: solid;
  border-width: 3px;
  border-color: #edeff6;
  display: flex;
  flex-direction: column;
  position: relative;

  .dDayHeader {
    width: 16.875vw;
    height: 22.037vh;
  }

  .text {
    font-weight: 500;
    font-size: 1.25vw;
    line-height: 100%;
    color: #383838;
    margin-left: 1.25vw;
    margin-top: 3.33333vh;
    margin-bottom: 2.9629vh;
  }

  .headerBox {
    background: #f4f8ff;
    border-radius: 12px;
    width: 14.79166vw;
    height: 10.5555vh;
    margin-left: 1.041667vw;
    display: flex;
    flex-direction: column;
  }

  .headerText {
    font-weight: 400;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.592593vh;
  }

  .headerdDay {
    font-weight: 700;
    font-size: 1.25vw;
    line-height: 100%;
    color: #487aff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.66666vh;
  }

  .contentBox {
    margin-top: 2.9629vh;
    overflow: auto;
  }

  .addSch {
    width: 14.791vw;
    height: 5.185vh;
    background: #f4f8ff;
    border-radius: 12px;
    display: flex;
    margin-left: 1.041667vw;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 1.85185vh;
  }

  .addSch:hover {
    cursor: grab;
  }

  .EndSch {
    width: 14.791vw;
    height: 5.185vh;
    background: #f4f8ff;
    border-radius: 12px;
    display: flex;
    margin-left: 1.041667vw;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 1.85185vh;
  }

  .EndSch:hover {
    cursor: not-allowed;
  }

  .addText {
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #487aff;
    margin-top: auto;
    margin-bottom: auto;
  }

  /* 
scroll 투명하게 해야댈듯? */
`;

export const ModalContainer = styled.div`
  position: fixed;
  margin: 0 auto;
`;

export const Content = styled.div`
  background: #f4f8ff;
  border-radius: 12px;
  width: 14.7916vw;
  height: 5.92592vh;
  margin-left: 1.04166vw;
  display: flex;
  margin-bottom: 0.7407vh;

  .contentdDay {
    font-weight: 600;
    font-size: 0.83333vw;
    line-height: 100%;
    color: #707070;
    margin-top: 2.2222vh;
    margin-bottom: 2.2222vh;
    margin-left: 1.25vw;
    margin-right: 1vw;
    width: 2.7vw;
  }

  .contentInfo {
    display: flex;
    flex-direction: column;
    margin-top: 1.2962vh;
  }

  .contentName {
    font-weight: 500;
    font-size: 0.8333vw;
    line-height: 100%;
    color: #707070;
    margin-bottom: 8px;
  }

  .when {
    font-weight: 400;
    font-size: 0.625vw;
    line-height: 100%;
    color: #a7a7a7;
  }
`;

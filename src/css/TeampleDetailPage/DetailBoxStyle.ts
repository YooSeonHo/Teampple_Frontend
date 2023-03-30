import styled from 'styled-components';

export const DetailContainer = styled.div`
  width: 52.0833vw;
  height: 93.333vh;
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;

  .headerBtns {
    display: flex;
    justify-content: space-between;
    z-index: 1000;
  }

  .back {
    width: 1.667vw;
    height: 2.963vh;
    margin-top: 1.7vh;
  }

  .more {
    margin-top: 3.0556vh;
    width: 0.26042vw;
    height: 1.9444vh;
    margin-right: 0.9896vw;
  }

  .more:hover,
  .back:hover {
    cursor: grab;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .toDoInfoBox {
    width: 100%;
    height: 20.1852vh;
    margin-top: 2.963vh;
    margin-bottom: 7.037vh;
  }

  .step {
    display: flex;
  }

  .stepRound {
    width: 2.65625vw;
    height: 2.222vh;
    border: 1px solid #487aff;
    border-radius: 20px;
    display: flex;
  }

  .stepText {
    font-weight: 500;
    font-size: 0.625vw;
    line-height: 100%;
    color: #487aff;
    margin: auto;
  }

  .stepName {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #487aff;
    margin-left: 0.41667vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .subName {
    display: flex;
    justify-content: space-between;
    margin-top: 2.59259vh;
  }

  .taskName {
    font-weight: 600;
    font-size: 1.45833vw;
    line-height: 100%;
    color: #383838;
  }

  .finBtn {
    width: 7.08333vw;
    height: 3.333vh;
    margin-right: 1.04167vw;
  }

  .finBtn:hover {
    cursor: grab;
  }

  .subInfo {
    display: flex;
    flex-direction: column;
    margin-top: 3.425925vh;
  }

  .manager,
  .date,
  .state {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    margin-bottom: 2.31481vh;
  }
  .managerInput {
    margin-left: 2.70833vw;
    font-weight: 400;
    font-size: 1.041667vw;
  }

  .dateInput {
    margin-left: 3.489583vw;
    font-weight: 400;
    font-size: 1.04167vw;
  }

  .stateInput {
    margin-left: 1.6667vw;
    font-weight: 400;
    font-size: 1.04167vw;
  }

  .top {
    margin-bottom: 6.574074vh;
  }

  .file {
    display: flex;
    flex-direction: row;
  }

  .fileText {
    font-weight: 500;
    font-size: 1.04167vw;
    line-height: 100%;
    color: #383838;
    margin-left: 0.3125vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .addFile {
    width: 6.3vw;
    height: 3.5vh;
    margin-left: 24px;
    border: 1px solid #d5dbee;
    border-radius: 8px;
    color: #707070;
    font-size: 0.625vw;
  }

  .addFile:hover {
    cursor: grab;
  }

  .files {
    margin-top: 1.85185vh;
    flex-wrap: nowrap;
    overflow: auto;
    display: flex;
  }
  .uploadDate {
    width: 91px;
    height: 12px;
    left: 614px;
    top: 565px;
  }

  .fileCard {
    width: 14.1667vw;
    height: 8.5185vh;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #d5dbee;
    margin-right: 1.45833vw;
    min-width: 14.1667vw;
  }

  .fileName {
    display: flex;
    margin-top: 1.85195vh;
    margin-left: 1.041667vw;
  }

  .nameText {
    font-weight: 500;
    font-size: 0.8333vw;
    line-height: 100%;
    text-align: center;
    color: #707070;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .icons {
    margin-left: auto;
    margin-right: 2.3vw;
    width: 1.3vw;
    display: flex;
  }

  .download {
    margin-right: 0.41667vw;
    width: 3vw;
    object-fit: cover;
  }

  .trash {
    width: 3vw;
    object-fit: cover;
  }

  .download:hover,
  .trash:hover {
    cursor: grab;
  }

  .fileInfo {
    font-weight: 400;
    font-size: 0.625vw;
    line-height: 100%;
    color: #a7a7a7;
    margin-left: 1.041667vw;
    display: flex;
    margin-top: 1.85185vh;
  }

  .fileSize {
    margin-left: auto;
    margin-right: 1.041667vw;
  }

  .mid {
    margin-bottom: 6.6667vh;
  }

  .feedText {
    font-weight: 500;
    font-size: 1.041667vw;
    line-height: 100%;
    color: #383838;
    margin-left: 0.3125vw;
  }

  .addFeed {
    display: flex;
    margin-top: 2.222vh;
  }

  .profileImg {
    width: 2.5vw;
    height: 4.444vh;
    margin-left: 0.625vw;
  }

  .feedInput {
    width: 42.916667vw;
    height: 4.444vh;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0.8333vw;
    border: 0 solid black;
    padding: 0;
    background: rgba(237, 239, 246, 0.5);
    border-radius: 8px;
    padding-left: 0.83333vw;

    ::-webkit-input-placeholder {
      margin-left: 16px;
      color: '#CCCCCC';
      font-size: 0.83333vw;
      margin-left: 16px;
    }
  }

  .feedInput:focus {
    outline: none;
    border: solid 1px #487aff;
  }

  .inputBox {
    position: relative;
    ::placeholder {
      color: #cccccc;
    }
  }

  .send {
    position: absolute;
    top: 1.2vh;
    left: 44.7vw;
    border: none;
    background-color: transparent;
    color: #a7a7a7;
    width: 17px;
    height: 17px;
  }

  .send:hover {
    cursor: grab;
  }

  .feedbacks {
    display: flex;
    flex-direction: column;
    margin-top: 3.333vh;
  }

  .feedBox {
    width: 50.625vw;
    height: 7.314814vh;
    display: flex;
    margin-bottom: 1.48148vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .fullFeed {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .feedInfo {
    display: flex;
    margin-left: 0.83333vw;
    width: 100%;
  }

  .feedName {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #383838;
  }

  .feedDate {
    font-weight: 500;
    font-size: 0.72917vw;
    line-height: 100%;
    color: #a7a7a7;
    margin-left: 0.625vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .plusBtn {
    height: 0.7604vw;
    width: 2.944vh;
    margin-left: auto;
    margin-right: 1.041667vw;
    margin-top: auto;
  }

  .plusBtn:hover {
    cursor: grab;
  }

  .feedContent {
    font-weight: 400;
    font-size: 0.833vw;
    line-height: 100%;
    color: #383838;
    margin-left: 0.8333vw;
    margin-top: 1.111vh;
    max-width: 70%;
  }
`;

export const Container = styled.div`
  width: 87.5vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 40px;
  left: -140px;
  z-index: 1000;
`;

export const AlertFile = styled.div`
  width: 440px;
  height: 168px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
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

export const AlertFeed = styled.div`
  width: 440px;
  height: 144px;
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

  .alertTitle {
    position: absolute;
    font-size: 18px;
    color: #383838;
    font-weight: 600;
    top: 40px;
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

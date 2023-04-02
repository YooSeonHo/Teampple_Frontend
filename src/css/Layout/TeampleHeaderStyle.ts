import styled from 'styled-components';
import { AiFillMessage } from 'react-icons/ai';

export const MsgIcon = styled(AiFillMessage)`
  color: #487aff;
  font-size: 1.6vw;
  margin-top: 1.6vh;
  display: flex;
  align-items: center;
`;

export const HeaderBox = styled.div`
  width: 87.5vw;
  height: 6.6666vh;
  background-color: #ffffff;
  border-bottom: solid;
  border-width: 3px;
  border-color: #edeff6;
  display: flex;
  line-height: 6.66666vh;
  white-space: nowrap;
  position: relative;
  z-index: 998;

  #main {
    margin-left: 2.8125vw;
    width: 13.0208vw;
    height: 2.22222vh;
    max-width: 13.0208vw;
    font-weight: 600;
    font-size: 1.25vw;
  }

  #sub {
    margin-left: 1.25vw;
    width: 13.5416vw;
    height: 1.851852vh;
    font-weight: 500;
    font-size: 1.041667vw;
  }

  #dDayBox {
    display: flex;
    padding: 0px;
    gap: 8px;
    width: 3.020833vw;
    height: 2.6vh;
    background: #ffffff;
    border: 1px solid #88a9ff;
    border-radius: 7px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 7.239583vw;
  }

  #dDay {
    font-weight: 500;
    font-size: 0.625vw;
    line-height: 100%;
    color: #487aff;
    flex-grow: 0;
    margin: auto;
  }

  #date {
    margin-left: 0.416667vw;
    width: 13.541667vw;
    height: 1.851852vh;
    font-weight: 400;
    font-size: 0.9375vw;
    color: #707070;
  }

  .editBox {
    position: absolute;
    width: 3.8vw;
    height: 2.8vh;
    left: 54.8958vw;
    top: 2.037vh;
    background: #ffffff;
    border: 1px solid #d5dbee;
    border-radius: 7px;
    font-weight: 500;
    font-size: 0.625vw;
    line-height: 100%;
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
  }

  img {
    max-width: 100vw;
    max-height: 100vh;
  }

  #teamList {
    margin-left: 10.052vw;
    /* 만약 팀장이어서 팀플 수정 버튼 있으면 마진 61  없으면 193*/
    width: 3.75vw;
    height: 3.7037vh;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 8px;
    border: 1px solid #d5dbee;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  #teamNum {
    font-weight: 500;
    font-size: 0.9vw;
    line-height: 100%;
    text-align: center;
    color: #a7a7a7;
    margin-left: auto;
    margin-right: 0.677083vw;
    margin-top: 0.3vh;
  }

  .iconBox {
    margin-left: auto;
    margin-right: 2.81vw;
  }

  .iconBox:hover {
    cursor: grab;
  }

  #feedback {
    width: 1.8vw;
    margin-top: 1.3vh;
  }
`;

export const ModalContainer1 = styled.div`
  position: fixed;
  margin: 0 auto;
`;

export const ModalContainer2 = styled.div`
  position: absolute;
  top: 6.2037vh;
  right: 19.33333vw;
`;
import styled from 'styled-components';

export const SideBarBox = styled.div`
  width: 12.5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f4f8ff;
  z-index: 998;
  position: fixed;

  .logo {
    margin-left: 2.5vw;
    margin-top: 1.759259vh;
    width: 7.3vw;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.38888vh;
    margin-left: 1.04vw;
    width: 10.42vw;
    height: 5.925926vh;
    position: relative;
    color: #383838;
    border-radius: 8px;
    overflow: hidden;

    &:hover {
      cursor: pointer;
      background-color: #d4e4ff;
      color: #487aff;
    }
  }

  #userName {
    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 2.037037vh;
    position: absolute;
    left: 4.5vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .box {
    color: #707070;
    margin-left: 1.04vw;
    margin-top: 0.6vh;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    width: 10.42vw;
    height: 4.3vh;
    display: flex;
    flex-direction: row;
  }

  .nonbox {
    color: #707070;
    margin-left: 1.04vw;
    margin-top: 0.6vh;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    width: 10.42vw;
    height: 4.3vh;
    display: flex;
    flex-direction: row;
  }

  .box:hover {
    background-color: #d4e4ff;
    color: #487aff;
    cursor: grab;
  }

  #more {
    width: 1.5625vw;
    height: 2.7777vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #moreicon {
    width: 1.041667vw;
    height: 1.851852;
    position: absolute;
    right: 0.5208333vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .endBox {
    color: #707070;
    margin-left: 1.04vw;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    margin-bottom: 0.6vh;
    border-radius: 8px;
    width: 10.42vw;
    height: 4.3vh;
    display: flex;
    flex-direction: row;
  }

  .endBox:hover {
    background-color: #f7b6b5;
    color: #ff5854;
    cursor: grab;
  }
  /* 추가로 클릭 되면 box 색 바뀌게 설정 */

  .newBox {
    color: #707070;
    margin-left: 1.04vw;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
    border-radius: 8px;
    width: 10.42vw;
    height: 3.703704vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: grab;
      background-color: #d4e4ff;
      color: #487aff;
    }
  }

  .boxText {
    margin-left: 0.625vw;
    line-height: 3.703704vh;
    font-weight: 600;
    font-size: 0.9375vw;
    color: #707070;
    margin-top: auto;
    margin-bottom: auto;
  }

  .subBoxText {
    margin-left: 2.5vw;
    line-height: 3.703704vh;
    width: 5.5vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: auto;
    margin-bottom: auto;
  }

  #icon {
    width: 1.25vw;
    margin-left: 0.625vw;
  }

  /* 호버 및 클릭시 아이콘 색깔 바뀌게  */

  .iconWrap {
    margin-top: auto;
    margin-bottom: auto;
  }

  #newTeample {
    color: #c0c0c0;
    line-height: 40px;
    font-weight: 600;
    font-size: 0.9375vw;
    line-height: 100%;
  }
  /* 조금 더 왼쪽으로 땡겨야 할 듯 */

  .btm {
    margin-top: auto;
    margin-bottom: 3vh;
  }

  .profileImg {
    width: 2.8vw;
    border-radius: 60%;
    position: absolute;
    left: 1vw;
    padding: 0.2vw;
  }

  #logo {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const TeamBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Alert = styled.div`
  width: 440px;
  height: 193px;
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
    top: 91px;
    font-size: 14px;
    color: #707070;
    font-weight: 400;
  }

  .alertTitle {
    position: absolute;
    font-size: 18px;
    color: #383838;
    font-weight: 600;
    top: 113px;
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

  .sad {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 18px;
  }
`;

import styled from 'styled-components';

export const FileInfoContainer = styled.div`
  margin-top: 7.592vh;
`;

export const FileInfoBox = styled.div`
  width: 19.375vw;
  height: 13.5vh;
  background: #fffce3;
  border-radius: 12px;
  position: relative;
`;

export const Title = styled.div`
  font-size: 1.2vw;
  position: absolute;
  top: 2.2222vh;
  left: 1.25vw;
`;

export const FileNum = styled.div`
  position: absolute;
  top: 2.2222vh;
  left: 15.1vw;
  font-size: 1.2vw;
`;

export const FileSize = styled.div`
  color: #707070;
  position: absolute;
  top: 8.1041vh;
  right: 1.25vw;
  height: 1.481481vh;
  font-size: 1vw;
`;

export const BarContainer = styled.div`
  position: absolute;
  bottom: 22px;
  height: 0.8vh;
  ul {
    position: relative;
    padding: 0;
    list-style: none;
    width: 19.375vw;
  }

  li {
    background-color: #fff8b7;
    height: 1.481481vh;
    border-radius: 46px;
  }
`;

export const Bar = styled.span<{ remainPercent: number }>`
  position: absolute;
  border-radius: 46px;
  background-color: #fce44c;
  height: 1.481481vh;
  width: ${(props) => props.remainPercent}%;
  -webkit-animation: file-progressbar 2s ease-out;
  animation: file-progressbar 2s ease-out;

  @keyframes file-progressbar {
    0% {
      width: 0px;
    }

    100% {
      width: ${(props) => props.remainPercent}%;
    }
  }
`;

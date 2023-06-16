import styled from 'styled-components';

export const SummaryContainer = styled.div`
  width: 44.2708vw;
  height: 21.111vh;
  position: relative;
`;

export const DateContainer = styled.div`
  position: absolute;
  left: 2.8125vw;
  top: 36px;
  font-size: 0.8333vw;
  line-height: 100%;
`;

export const RemainContainer = styled.div``;

export const RemainBox = styled.div`
  position: absolute;
  top: 6.851852vh;
  left: 2.8125vw;
`;

export const Big = styled.div`
  font-size: 1.6666vw;
  line-height: 100%;
  font-weight: 500;
`;

export const Text = styled.span`
  font-size: 0.9375vw;
  font-weight: 400;
  color: #707070;
`;

export const Percent = styled.div`
  position: absolute;
  left: 35.5vw;
  top: 8.7962vh;
  line-height: 100%;
  font-size: 0.9375vw;
  letter-spacing: 4px;
  font-weight: 400;
`;

export const BarContainer = styled.div`
  position: absolute;
  top: 17.4074vh;
  left: 2.8125vw;
  ul {
    position: relative;
    padding: 0;
    list-style: none;
    width: 40.20833vw;
  }

  li {
    background-color: #ececec;
    height: 13px;
    border-radius: 46px;
  }
`;

export const Bar = styled.span<{ currentPercent: number; icon: string }>`
  position: absolute;
  border-radius: 46px;
  background-color: #487aff;
  height: 13px;
  width: ${(props) => props.currentPercent}%;
  -webkit-animation: teample-progressbar 2s ease-out;
  animation: teample-progressbar 2s ease-out;

  &::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    top: -0.92592vh;
    right: -0.9vw;
    border-radius: 54px;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @keyframes teample-progressbar {
    0% {
      width: 0px;
    }

    100% {
      width: ${(props) => props.currentPercent}%;
    }
  }
`;

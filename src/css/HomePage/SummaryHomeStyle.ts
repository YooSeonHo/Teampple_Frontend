import styled from 'styled-components'; 
import HomeSummaryBg from '../../components/images/HomeSummaryBg.png';

export const SummaryContainer = styled.div`
  width: 87.5vw;
  height: 30vh;
  position: relative;
  background-color: #f9fafd;
  background-image: url(${HomeSummaryBg});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const DateContainer = styled.div`
  position: absolute;
  left: 2.81vw;
  top: 3.33vh;
  font-size: 0.83vw;
  line-height: 100%;
`;

export const RemainContainer = styled.div``;

export const RemainBox = styled.div`
  position: absolute;
  top: 6.85185vh;
  left: 2.81vw;
`;

export const Big = styled.div`
  font-size: 1.67vw;
  line-height: 100%;
  font-weight: 500;
`;

export const Small = styled.div`
  margin-top: 1.851852vh;
`;

export const Text = styled.span`
  font-size: 0.9375vw;
  font-weight: 400;
`;

export const Percent = styled.span`
  position: absolute;
  left: 43.75vw;
  font-size: 1.25vw;
`;

export const BarContainer = styled.div`
  position: absolute;
  top: 21.2963vh;
  left: 4vw;
  ul {
    position: relative;
    padding: 0;
    list-style: none;
    width: 46.25vw;
  }

  li {
    background-color: #ececec;
    height: 16px;
    border-radius: 46px;
  }
`;

interface IBar {
  remainPercent: number;
  profileImage: string;
}

export const Bar = styled.span<IBar>`
  position: absolute;
  border-radius: 46px;
  background-color: #487aff;
  height: 16px;
  width: ${(props) => props.remainPercent}%;
  -webkit-animation: css-progressbar 2s ease-out;
  animation: css-progressbar 2s ease-out;

  &::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    top: -10px;
    right: -1.5vw;
    border: 1.5px solid #487aff;
    border-radius: 54px;
    background-image: url(${(props) =>
      require(`../../components/images/profile/proImageU` +
        props.profileImage +
        `.png`)});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @keyframes css-progressbar {
    0% {
      width: 0px;
    }

    100% {
      width: ${(props) => props.remainPercent}%;
    }
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import profile1 from '../images/profile1.png';

const SummaryTeample = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const week = weeks[now.getDay()];

  const [doneNum, setDoneNum] = useState(3);
  const [allNum, setAllNum] = useState(11);
  const [currentPercent, setCurrentPercent] = useState(21);

  return (
    <SummaryContainer>
      <DateContainer>
        {year}년 {month}월 {date}일 ({week})
      </DateContainer>
      <RemainContainer>
        <RemainBox>
          <Text>순탄하게 나아가는 중!</Text>
          <Big>
            <div style={{ marginTop: '18px' }}>
              <span>팀플이</span>
              <span style={{ color: '#487AFF', fontWeight: '700' }}>
                &nbsp;{currentPercent}%&nbsp;
              </span>
              <span>
                진행되었어요.
                <br />
              </span>
            </div>
          </Big>
          <Percent>
            ({doneNum}/{allNum})
          </Percent>
        </RemainBox>
      </RemainContainer>
      <BarContainer>
        <ul>
          <li>
            <Bar className="css-progressbar" />
          </li>
        </ul>
      </BarContainer>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  width: 850px;
  height: 228px;
`;

const DateContainer = styled.div`
  position: absolute;
  left: 54px;
  top: 36px;
  font-size: 16px;
  line-height: 100%;
`;

const RemainContainer = styled.div``;

const RemainBox = styled.div`
  position: absolute;
  top: 74px;
  left: 54px;
`;

const Big = styled.div`
  font-size: 32px;
  line-height: 100%;
  font-weight: 500;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #707070;
`;

const Percent = styled.div`
  position: absolute;
  left: 705px;
  top: 95px;
  line-height: 100%;
  font-size: 18px;
  letter-spacing: 4px;
  font-weight: 400;
`;

const BarContainer = styled.div`
  position: absolute;
  top: 188px;
  left: 54px;
  ul {
    position: relative;
    padding: 0;
    list-style: none;
    width: 772px;
  }

  li {
    background-color: #ececec;
    height: 16px;
    border-radius: 46px;
  }
`;

const Bar = styled.span`
  position: absolute;
  border-radius: 46px;
  background-color: #487aff;
  height: 20px;
  width: 80%;
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
    right: -10px;
    border: 1.5px solid #487aff;
    border-radius: 54px;
    background-image: url(${profile1}); //사용자별 프로필 이미지 들어갈 예정
    background-size: cover;
  }

  @keyframes css-progressbar {
    0% {
      width: 0px;
    }

    100% {
      width: 80%;
    }
  }
`;

export default SummaryTeample;

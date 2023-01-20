import React from 'react';
import styled from 'styled-components';
import progress0 from '../../images/progressbar/LoadingIcon_Start.png';
import HomeSummaryBg from '../../images/HomeSummaryBg.png';

const NotSummaryTeample = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const week = weeks[now.getDay()];

  return (
    <SummaryContainer>
      <DateContainer>
        {year}년 {month}월 {date}일 ({week})
      </DateContainer>
      <RemainContainer>
        <RemainBox>
          <Text>팀쁠은 당신을 기다리는 중!</Text>
          <Big>팀메이트들과 함께 팀플을 관리해보세요.</Big>
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
  width: 1680px;
  height: 296px;
  position: relative;
  background-image: url(${HomeSummaryBg});
  background-size: cover;
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
  margin-top: 16px;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #707070;
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
  height: 16px;
  width: 0%;

  &::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 54px;
    background-image: url(${progress0});
    background-size: cover;
  }
`;

export default NotSummaryTeample;

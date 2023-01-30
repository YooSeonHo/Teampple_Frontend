import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import progress0 from '../images/progressbar/LoadingIcon_Start.png';
import progress1 from '../images/progressbar/LoadingIcon_Fire.png';
import progress2 from '../images/progressbar/LoadingIcon_Turtle.png';
import progress3 from '../images/progressbar/LoadingIcon_Boat.png';
import progress4 from '../images/progressbar/LoadingIcon_lightening.png';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { teamidState } from 'state';

const SummaryTeample = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const week = weeks[now.getDay()];

  const [doneNum, setDoneNum] = useState<number>(0);
  const [allNum, setAllNum] = useState<number>(0);
  const [currentPercent, setCurrentPercent] = useState<number>(
    Math.round(Number(doneNum / allNum) * 100),
  );
  const [icon, setIcon] = useState(progress1);
  const [text, setText] = useState('');
  const [teamid] = useRecoilState(teamidState);
  let s1 = 0;
  let s2 = 0;
  const token = localStorage.getItem('jwt_accessToken');

  const changeStatus = () => {
    if (currentPercent >= 1 && currentPercent < 25) {
      setIcon(progress1);
      setText('많이 속도를 내야해요');
    } else if (currentPercent >= 25 && currentPercent < 50) {
      setIcon(progress2);
      setText('조금만 속도를 내어봐요');
    } else if (currentPercent >= 50 && currentPercent < 75) {
      setIcon(progress3);
      setText('순탄하게 나아가는 중!');
    } else if (currentPercent >= 75) {
      setIcon(progress4);
      setText('손발척척 빠른 진행 !');
    } else if (currentPercent === 0) {
      setIcon(progress0);
      setText('많이 속도를 내야해요');
    }
  };

  useEffect(() => {
    changeStatus();
  }, [currentPercent]);

  const getTaskAPI = async () => {
    await axios({
      url: `/api/teams/tasks`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      headers: {
        Authorization: token,
      },
      params: { teamId: teamid },
    })
      .then((response) => {
        const achievementAcum = response.data.data.map((t: any) =>
          setDoneNum((s1 += parseInt(t.achievement))),
        );
        const totaltaskAcum = response.data.data.map((t: any) =>
          setAllNum((s2 += parseInt(t.totaltask))),
        );
        if (allNum === 0) setCurrentPercent(0);
        else setCurrentPercent(Math.round(Number(doneNum / allNum) * 100));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getTaskAPI();
  }, [doneNum, allNum]);

  return (
    <SummaryContainer>
      <DateContainer>
        {year}년 {month}월 {date}일 ({week})
      </DateContainer>
      <RemainContainer>
        <RemainBox>
          <Text>{text}</Text>
          <Big>
            <div style={{ marginTop: '1.6666vh' }}>
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
            <Bar
              className="teample-progressbar"
              currentPercent={currentPercent}
              icon={icon}
            />
          </li>
        </ul>
      </BarContainer>
    </SummaryContainer>
  );
};

const SummaryContainer = styled.div`
  width: 44.2708vw;
  height: 21.111vh;
  position: relative;
`;

const DateContainer = styled.div`
  position: absolute;
  left: 2.8125vw;
  top: 36px;
  font-size: 0.8333vw;
  line-height: 100%;
`;

const RemainContainer = styled.div``;

const RemainBox = styled.div`
  position: absolute;
  top: 6.851852vh;
  left: 2.8125vw;
`;

const Big = styled.div`
  font-size: 1.6666vw;
  line-height: 100%;
  font-weight: 500;
`;

const Text = styled.span`
  font-size: 0.9375vw;
  font-weight: 400;
  color: #707070;
`;

const Percent = styled.div`
  position: absolute;
  left: 36.71875vw;
  top: 8.7962vh;
  line-height: 100%;
  font-size: 0.9375vw;
  letter-spacing: 4px;
  font-weight: 400;
`;

const BarContainer = styled.div`
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
    height: 1.481481vh;
    border-radius: 46px;
  }
`;

const Bar = styled.span<{ currentPercent: number; icon: string }>`
  position: absolute;
  border-radius: 46px;
  background-color: #487aff;
  height: 1.481481vh;
  width: ${(props) => props.currentPercent}%;
  -webkit-animation: teample-progressbar 2s ease-out;
  animation: teample-progressbar 2s ease-out;

  &::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: '';
    width: 2.08333vw;
    height: 3.7037vh;
    position: absolute;
    top: -0.92592vh;
    right: -0.520833vw;
    border-radius: 54px;
    background-image: url(${(props) => props.icon});
    background-size: cover;
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

export default SummaryTeample;

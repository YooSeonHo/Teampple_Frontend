import React, { useState, useEffect } from 'react';
import progress0 from '../images/progressbar/LoadingIcon_Start.png';
import progress1 from '../images/progressbar/LoadingIcon_Fire.png';
import progress2 from '../images/progressbar/LoadingIcon_Turtle.png';
import progress3 from '../images/progressbar/LoadingIcon_Boat.png';
import progress4 from '../images/progressbar/LoadingIcon_lightening.png';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { teamidState, isLoading5State } from 'state';
import { baseURL } from 'api/client';
import * as Style from '../../css/TeampleHomePage/SummaryTeampleStyle';

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
  const [, setIsLoading5] = useRecoilState(isLoading5State);

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
    setIsLoading5(true);
    await axios({
      url: `/api/teams/tasks`,
      baseURL: baseURL,
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
        setIsLoading5(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getTaskAPI();
  }, [doneNum, allNum]);

  return (
    <Style.SummaryContainer>
      <Style.DateContainer>
        {year}년 {month}월 {date}일 ({week})
      </Style.DateContainer>
      <Style.RemainContainer>
        <Style.RemainBox>
          <Style.Text>{text}</Style.Text>
          <Style.Big>
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
          </Style.Big>
          <Style.Percent>
            ({doneNum}/{allNum})
          </Style.Percent>
        </Style.RemainBox>
      </Style.RemainContainer>
      <Style.BarContainer>
        <ul>
          <li>
            <Style.Bar
              className="teample-progressbar"
              currentPercent={currentPercent}
              icon={icon}
            />
          </li>
        </ul>
      </Style.BarContainer>
    </Style.SummaryContainer>
  );
};

export default SummaryTeample;

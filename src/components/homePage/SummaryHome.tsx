import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotSummaryTeample from 'components/teampleHomePage/nothing/NotSummaryTeample';
import { useRecoilState } from 'recoil';
import { profileImgState, isLoading4State } from 'state';
import { baseURL } from 'api/client';
import * as Style from '../../css/HomePage/SummaryHomeStyle';

const SummaryHome = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const week = weeks[now.getDay()];
  const [, setIsLoading4] = useRecoilState(isLoading4State);

  const [username, setUsername] = useState('');
  const [doneNum, setDoneNum] = useState<number>(0);
  const [allNum, setAllNum] = useState<number>(0);
  const [remainPercent, setRemainPercent] = useState<number>(
    Math.round(Number(doneNum / allNum) * 100),
  );
  let s1 = 0;
  let s2 = 0;
  const token = localStorage.getItem('jwt_accessToken');
  const [profileImg] = useRecoilState(profileImgState);

  const getTaskAPI = async () => {
    setIsLoading4(true);
    await axios({
      url: `/api/users/tasks`,
      baseURL: baseURL,
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setUsername(response.data.data.username);
        response.data.data.teams.map((t: any) =>
          setDoneNum((s1 += parseInt(t.achievement))),
        );
        response.data.data.teams.map((t: any) =>
          setAllNum((s2 += parseInt(t.totalStage))),
        );
        if (allNum === 0) setRemainPercent(0);
        else setRemainPercent(Math.round(Number(doneNum / allNum) * 100));
        setIsLoading4(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getTaskAPI();
  }, [doneNum, allNum]);

  return (
    <>
      {allNum === 0 ? (
        <NotSummaryTeample />
      ) : (
        <Style.SummaryContainer>
          <Style.DateContainer>
            {year}년 {month}월 {date}일 ({week})
          </Style.DateContainer>
          <Style.RemainContainer>
            <Style.RemainBox>
              <Style.Big>
                <span>
                  {username}님의
                  <br />
                </span>
                <div style={{ marginTop: '18px' }}>
                  <span>할 일이</span>
                  <span style={{ color: '#487AFF', fontWeight: '700' }}>
                    &nbsp;{allNum - doneNum}개&nbsp;
                  </span>
                  <span>
                    남았어요.
                    <br />
                  </span>
                </div>
              </Style.Big>
              <Style.Small>
                <Style.Text>남은 시간 힘내서 달려보아요</Style.Text>
                <Style.Percent>{remainPercent}%</Style.Percent>
              </Style.Small>
            </Style.RemainBox>
          </Style.RemainContainer>
          <Style.BarContainer>
            <ul>
              <li>
                <Style.Bar
                  className="css-progressbar"
                  remainPercent={remainPercent}
                  profileImage={profileImg}
                />
              </li>
            </ul>
          </Style.BarContainer>
        </Style.SummaryContainer>
      )}
    </>
  );
};

export default SummaryHome;

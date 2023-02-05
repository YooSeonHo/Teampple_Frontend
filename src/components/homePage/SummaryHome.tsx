import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import proImageU1 from '../images/profile/proImageU1.png';
import proImageU2 from '../images/profile/proImageU2.png';
import proImageU3 from '../images/profile/proImageU3.png';
import proImageU4 from '../images/profile/proImageU4.png';
import proImageU5 from '../images/profile/proImageU5.png';
import proImageU6 from '../images/profile/proImageU6.png';
import proImageU7 from '../images/profile/proImageU7.png';
import proImageU8 from '../images/profile/proImageU8.png';
import proImageU9 from '../images/profile/proImageU9.png';
import HomeSummaryBg from '../images/HomeSummaryBg.png';
import axios from 'axios';
import NotSummaryTeample from 'components/teampleHomePage/nothing/NotSummaryTeample';
import { useRecoilState } from 'recoil';
import { profileImgState, isLoading4State } from 'state';
import { baseURL } from 'api/client';

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
  // const [profileImage, setProfileImage] = useState(`proImageU` + profileImg);
  const [profileImage, setProfileImage] = useState(proImageU2);

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
        <SummaryContainer>
          <DateContainer>
            {year}년 {month}월 {date}일 ({week})
          </DateContainer>
          <RemainContainer>
            <RemainBox>
              <Big>
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
              </Big>
              <Small>
                <Text>남은 시간 힘내서 달려보아요</Text>
                <Percent>{remainPercent}%</Percent>
              </Small>
            </RemainBox>
          </RemainContainer>
          <BarContainer>
            <ul>
              <li>
                <Bar
                  className="css-progressbar"
                  remainPercent={remainPercent}
                  profileImage={profileImg}
                />
              </li>
            </ul>
          </BarContainer>
        </SummaryContainer>
      )}
    </>
  );
};

const SummaryContainer = styled.div`
  width: 87.5vw;
  height: 30vh;
  position: relative;
  background-color: #f9fafd;
  background-image: url(${HomeSummaryBg});
  background-size: contain;
  background-repeat: no-repeat;
`;

const DateContainer = styled.div`
  position: absolute;
  left: 2.81vw;
  top: 3.33vh;
  font-size: 0.83vw;
  line-height: 100%;
`;

const RemainContainer = styled.div``;

const RemainBox = styled.div`
  position: absolute;
  top: 6.85185vh;
  left: 2.81vw;
`;

const Big = styled.div`
  font-size: 1.67vw;
  line-height: 100%;
  font-weight: 500;
`;

const Small = styled.div`
  margin-top: 1.851852vh;
`;

const Text = styled.span`
  font-size: 0.9375vw;
  font-weight: 400;
`;

const Percent = styled.span`
  position: absolute;
  left: 43.75vw;
  font-size: 1.25vw;
`;

const BarContainer = styled.div`
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

const Bar = styled.span<IBar>`
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
    background-image: url(${(props) => require('../images/profile/proImageU' + props.profileImage+ '.png')});
    background-size: cover;
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

export default SummaryHome;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrow from '../images/ArrowLineRight2.png';
import done from '../images/done icon.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NotToDoBox from 'components/teampleHomePage/nothing/NotToDoBox';
import { useRecoilState } from 'recoil';
import {
  detailState,
  taskIdState,
  isLoading1State,
  isLoading2State,
} from 'state';
import useDidMountEffect from 'components/hooks/useDidMountEffect';

const HomeToDo = () => {
  const [teams, setTeams] = useState([]);
  const token = localStorage.getItem('jwt_accessToken');
  const [taskId, setTaskId] = useRecoilState(taskIdState);
  const [detail, setDetail] = useRecoilState(detailState);
  const navigate = useNavigate();
  const [isLoading1, setIsLoading1] = useRecoilState(isLoading1State);
  const [isLoading2, setIsLoading2] = useRecoilState(isLoading2State);

  const getDetail = async () => {
    setIsLoading1(true);
    await axios({
      url: `/api/tasks`,
      baseURL: 'https://www.teampple.site/',
      method: 'get',
      params: {
        taskId: taskId,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setDetail(res.data.data);
        setIsLoading1(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getTodoAPI = async () => {
    setIsLoading2(true);
    await axios({
      url: `/api/users/tasks`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setTeams(response.data.data.teams);
        setTaskId(0);
        setIsLoading2(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onClick = (e: any) => {
    setTaskId(e.currentTarget.id);
  };

  useDidMountEffect(async () => {
    taskId &&
      (await getDetail().then(() => {
        navigate(`/teample-detail/${taskId}`);
      }));
  }, [taskId]);

  useEffect(() => {
    getTodoAPI();
  }, []);

  return (
    <>
      {/* {teams.length === 0 ? (
        <NotToDoBox />
      ) : ( */}
      <HomeToDoContainer>
        <Title>할 일</Title>
        <ToDosContainer>
          {teams &&
            teams.map((team: any, index: number) => (
              <ToDoContainer key={index}>
                <ToDoTitle style={{ color: '#383838' }}>{team.name}</ToDoTitle>
                <Left>
                  <LeftText>남은 일</LeftText>
                  <LeftNum>{team.totalStage - team.achievement}</LeftNum>
                </Left>
                <ToDoList>
                  {team.tasks.map((t: any, index: number) => (
                    <ToDo onClick={onClick} key={index} id={t.taskId}>
                      {t.done === true ? <Done src={done} /> : <></>}
                      <ToDoText>{t.name}</ToDoText>
                      <Arrow src={arrow} />
                    </ToDo>
                  ))}
                </ToDoList>
              </ToDoContainer>
            ))}
        </ToDosContainer>
      </HomeToDoContainer>
      {/* )} */}
    </>
  );
};

const HomeToDoContainer = styled.div`
  position: relative;
  width: 87.5vw;
  height: 50.926vh;
  overflow: auto;
`;
const Title = styled.div`
  position: absolute;
  top: 2.222vh;
  left: 2.8125vw;
  font-weight: 500;
  font-size: 1.457vw;
  line-height: 100%;
`;
const ToDosContainer = styled.div`
  position: absolute;
  top: 7.40741vh;
  left: 2.8125vw;
  width: 87.5vw;
  height: 44.444vh;
  display: flex;
`;
const ToDoContainer = styled.div`
  width: 19.375vw;
  height: 41.4815vh;
  background: #f4f8ff;
  border-radius: 16px;
  margin-right: 1.4583vw;
  position: relative;
  flex-shrink: 0;
`;
const ToDoTitle = styled.div`
  position: absolute;
  top: 2.222vh;
  left: 1.25vw;
  font-weight: 600;
  font-size: 1.145vw;
  line-height: 100%;
`;
const Left = styled.div``;
const LeftText = styled.span`
  font-weight: 500;
  font-size: 0.833vw;
  line-height: 100%;
  color: #487aff;
  position: absolute;
  right: 3.072vw;
  top: 2.4074vh;
`;
const LeftNum = styled.span`
  position: absolute;
  right: 1.042vw;
  top: 20px;
  width: 1.458333vw;
  height: 2.592593vh;
  border-radius: 50px;
  background-color: #487aff;
  color: white;
  font-weight: 700;
  font-size: 0.833vw;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
const ToDoList = styled.div`
  position: absolute;
  top: 6.6667vh;
  left: 1.041vw;
  width: 18.33vw;
  height: 34.8148vh;
  overflow: auto;
`;
const ToDo = styled.div`
  width: 17.29vw;
  height: 6.66667vh;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1.111vh;

  :hover {
    cursor: grab;
  }
`;

const ToDoText = styled.span`
  font-weight: 500;
  font-size: 1.042vw;
  line-height: 100%;
  color: #505050;
  margin-left: 0.83vw;
`;

const Arrow = styled.img`
  position: absolute;
  right: 0.9375vw;
`;

const Done = styled.img`
  width: 2.8vw;
  margin-left: 0.625vw;
`;

export default HomeToDo;

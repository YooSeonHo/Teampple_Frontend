import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrow from '../images/ArrowLineRight2.png';
import done from '../images/done icon.png';
import axios from 'axios';

const HomeToDo = () => {
  const [teams, setTeams] = useState([]);
  const token = localStorage.getItem('jwt_accessToken');

  const getTodoAPI = async () => {
    await axios({
      url: `/api/users/tasks`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data.data.teams);
        setTeams(response.data.data.teams);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getTodoAPI();
  }, []);

  return (
    <HomeToDoContainer>
      <Title>할 일</Title>
      <ToDosContainer>
        {teams && teams.map((team: any, index: number) => (
          <ToDoContainer key={index}>
            <ToDoTitle>{team.name}</ToDoTitle>
            <Left>
              <LeftText>남은 일</LeftText>
              <LeftNum>{team.totalStage - team.achievement}</LeftNum>
            </Left>
            <ToDoList>
              {team.tasks.map((t: any, index: number) => (
                <ToDo key={index}>
                  {t.done === 'true' ? <Done src={done} /> : <></>}
                  <ToDoText>{t.name}</ToDoText>
                  <Arrow src={arrow} />
                </ToDo>
              ))}
            </ToDoList>
          </ToDoContainer>
        ))}
      </ToDosContainer>
    </HomeToDoContainer>
  );
};

const HomeToDoContainer = styled.div`
  position: relative;
  width: 87.5vw;
  height: 550px;
  overflow: auto;
`;
const Title = styled.div`
  position: absolute;
  top: 24px;
  left: 2.8125vw;
  font-weight: 500;
  font-size: 1.457vw;
  line-height: 100%;
`;
const ToDosContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 2.8125vw;
  width: 87.5vw;
  height: 480px;
  display: flex;
`;
const ToDoContainer = styled.div`
  width: 19.375vw;
  height: 448px;
  background: #f4f8ff;
  border-radius: 16px;
  margin-right: 1.4583vw;
  position: relative;
  flex-shrink: 0;
`;
const ToDoTitle = styled.div`
  position: absolute;
  top: 24px;
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
  top: 26px;
`;
const LeftNum = styled.span`
  position: absolute;
  right: 1.042vw;
  top: 20px;
  width: 28px;
  height: 28px;
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
  top: 72px;
  left: 1.041vw;
  width: 18.33vw;
  height: 376px;
  overflow: auto;
`;
const ToDo = styled.div`
  width: 17.29vw;
  height: 72px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
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
  width: 2.92vw;
  height: 34px;
  margin-left: 0.052vw;
`;

export default HomeToDo;

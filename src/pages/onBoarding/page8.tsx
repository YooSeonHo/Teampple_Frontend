import React from 'react';
import styled from 'styled-components';
import page8 from './images/Component 8.png';
import btn from './images/Group 310.png';

export const Background = styled.div`
  background-image: url('${page8}');
  width: 100%;
  text-align: center;
  height: 63vh;
  background-size: 100vw;
  background-repeat: no-repeat;
  margin: auto;
  background-color: #487aff;
  margin-top: 0;
`;

const Contents = styled.div`
  font-weight: 600;
  font-size: 1.66666vw;
  line-height: 160%;
  color: #ffffff;
  padding-top: 18.51851vh;
  display: flex;
  flex-direction: column;

  .btn {
    width: 9.53125vw;
    height: 5.55555vh;
    margin: auto;
    margin-top: 53px;
    :hover {
      cursor: pointer;
    }

  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Page8 = () => {

  const onClickBtn = () => {
    {
      localStorage.getItem('jwt_accessToken')
        ? window.location.replace('/home')
        : window.location.replace('/login');
    }
  };
  return (
    <Background>
      <Contents>
        <div>
        대학생들을 위한, <br/>체계적인 팀프로젝트 협업 툴
        </div>
        <div className="btn">
          <img src={btn} onClick={onClickBtn} />
        </div>
      </Contents>
    </Background>
  );
};

export default Page8;

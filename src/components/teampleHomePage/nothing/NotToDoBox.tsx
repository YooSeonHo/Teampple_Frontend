import React from 'react';
import styled from 'styled-components';
import Nothing from '../../images/nothingToDo.png';

const NotToDoBox = () => {
  return (
    <Wrapper>
      <NotToDoContainer>
        <Img src={Nothing} />
      </NotToDoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
width:  87.5vw;
height: 51.481481vh;
display: flex;
border-radius: 16px;
overflow: overlay;
margin-top : 3.05555vh;
`

const NotToDoContainer = styled.div`
background: #f9fafd;
border-radius: 16px;
width: 85.937vw;
height: 41.6666vh;
display: flex;
justify-content: center;
align-items: center;
margin-left :2.8125vw;
margin-right :2.8125vw;
`;

const Img = styled.img`
  width: 9.427083vw;
  height: 28.148148vh;
`;

export default NotToDoBox;

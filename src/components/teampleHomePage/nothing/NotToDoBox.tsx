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
  width: 1272px;
height: 556px;
display: flex;
border-radius: 16px;
overflow: overlay;
margin-left : 54px;
margin-top : 33px;
`

const NotToDoContainer = styled.div`
  background: #f9fafd;
  border-radius: 16px;
  width: 1172px;
  height: 556px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 181px;
  height: 304px;
`;

export default NotToDoBox;

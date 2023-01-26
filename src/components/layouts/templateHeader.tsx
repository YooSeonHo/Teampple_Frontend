import React from 'react';
import styled from 'styled-components';

const templateHeader = () => {
  return (
    <HomeHeaderContainer>
      <HomeTitle>템플릿</HomeTitle>
    </HomeHeaderContainer>
  );
};

const HomeHeaderContainer = styled.div`
  position: relative;
  width: 87.5vw;
  height: 72px;
  border-bottom: solid;
  border-width: 3px;
  border-color: #edeff6;
`;
const HomeTitle = styled.div`
  position: absolute;
  top: 24px;
  left: 5.2vw;
  font-weight: 600;
  font-size: 1.25vw;
  line-height: 100%;
`;

export default templateHeader;

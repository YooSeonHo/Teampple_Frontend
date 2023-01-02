import React from 'react';
import styled from 'styled-components';
import StartBtn from 'components/moreInfoPage/StartBtn';
import InfoInput from 'components/moreInfoPage/InfoInput';

const MoreInfoPage = () => {
  return (
    <MoreInfoPageContainer>
      <InfoInput />
      <StartBtn />
    </MoreInfoPageContainer>
  );
};

const MoreInfoPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f8ff;
`;

export default MoreInfoPage;

import React from 'react';
import styled from 'styled-components';
import KakaoBtn from 'components/loginPage/KakaoBtn';

const LoginPage = () => {
  return(
  <LoginPageContainer>
    <KakaoBtn />
  </LoginPageContainer>
  )
};
  
const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f8ff;
`;

export default LoginPage;

import styled from 'styled-components';
import React from 'react';
import OnBoardingHeader from './onBoardingHeader';
import OnBoardingFooter from './onBoardingFooter';

const Children = styled.div`
  width: 100%;
`;

const SkipNav = styled.a`
  position: absolute;
  width: 1px;
  height: 1px;
  z-index: 999;
  overflow: hidden;

  &:focus,
  &:active {
    width: auto;
    height: auto;
    background-color: #487aff;
    padding: 10px;
    color: white;
    border: none;
    outline: none;
    border-radius: 0px 0px 12px 0px;
  }
`;

const OnBoardingLayOut = ({ children }: { children: any }) => {
  return (
    <body>
      <SkipNav href="#main">주요 컨텐츠로 건너뛰기</SkipNav>
      <OnBoardingHeader />
      <Children>{children}</Children>
      <OnBoardingFooter />
    </body>
  );
};

export default OnBoardingLayOut;

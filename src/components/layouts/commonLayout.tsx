import styled from 'styled-components';
import React, { useState } from 'react';
import SideBar from './sideBar';
import * as Style from '../../css/Layout/Header';

const Container = styled.div`
  margin-left: 12.5vw;
`;

const LayoutBox = styled.div`
  display: flex;
`;

const Children = styled.div``;

const CommonLayout = ({ children,title }: { children: any, title : string }) => {
  return (
    <LayoutBox>
      <SideBar />
      <Container>
        <Style.Header isTeample={false}>
          <Style.HomeTitle>{title}</Style.HomeTitle>
        </Style.Header>
        <Children>{children}</Children>
      </Container>
    </LayoutBox>
  );
};

export default CommonLayout;

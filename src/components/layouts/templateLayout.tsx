import styled from 'styled-components';
import React, { useState } from 'react';
import SideBar from './sideBar';
import TemplateHeader from './templateHeader';

const Container = styled.div`
  margin-left: 240px;
`;

const LayoutBox = styled.div`
  display: flex;
`;

const Children = styled.div``;

const profileLayout = ({ children }: { children: any }) => {
  return (
    <LayoutBox>
      <SideBar />
      <Container>
        <TemplateHeader />
        <Children>{children}</Children>
      </Container>
    </LayoutBox>
  );
};

export default profileLayout;

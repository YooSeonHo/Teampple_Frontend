import styled from 'styled-components';
import React, { useState } from 'react';
import SideBar from './sideBar';
import ProfileHeader from './profileHeader';

const Container = styled.div`
margin-left : 12.5vw;
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
        <ProfileHeader />
        <Children>{children}</Children>
      </Container>
    </LayoutBox>
  );
};

export default profileLayout;
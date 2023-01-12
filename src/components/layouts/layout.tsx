import styled from "styled-components";
import React from "react";
import SideBar from "./sideBar";
import TeampleHeader from "./teampleHeader";
import { useRecoilState } from 'recoil';
import { feedbackState } from 'state';
import Feedbacks from 'components/feedbacks/feedbacks';

const Container = styled.div`
`

const LayoutBox = styled.div`
display : flex;

`;

const AllBox = styled.div`
  display : flex;
  position : relative;`;

const Layout = ({children} : {children : any}) =>{
    const [isOpen,setIsOpen] = useRecoilState(feedbackState);

    return(
        <LayoutBox>
            <SideBar/>
            <Container>
                <TeampleHeader/>
                <AllBox>
                    {isOpen? <Feedbacks  pathname={window.location.pathname}/> : null}
                </AllBox>
                {children}
            </Container>
            
        </LayoutBox>


    );
}

export default Layout;
import styled from "styled-components";
import React from "react";
import SideBar from "./sideBar";
import TeampleHeader from "./teampleHeader";

const Container = styled.div`

`

const LayoutBox = styled.div`
display : flex;

`;

const Layout = ({children} : {children : any}) =>{

    return(
        <LayoutBox>
            <SideBar/>

            <Container>
            <TeampleHeader/>
            {children}
            </Container>
        </LayoutBox>


    );
}

export default Layout;
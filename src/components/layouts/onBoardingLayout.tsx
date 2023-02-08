import styled from "styled-components";
import React from "react";
import OnBoardingHeader from "./onBoardingHeader";
import OnBoardingFooter from "./onBoardingFooter";

const Children = styled.div`
    width : 100%;
`;

const OnBoardingLayOut = ({children} : {children : any}) =>{
    return(
        <>
            <OnBoardingHeader/>
            <Children>
                {children}
            </Children>
            <OnBoardingFooter/>
        </>
    )
}

export default OnBoardingLayOut;
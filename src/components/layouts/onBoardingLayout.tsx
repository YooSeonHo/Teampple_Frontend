import styled from "styled-components";
import React from "react";
import OnBoardingHeader from "./onBoardingHeader";
import OnBoardingFooter from "./onBoardingFooter";

const OnBoardingLayOut = ({children} : {children : any}) =>{
    return(
        <>
            <OnBoardingHeader/>
            {children}
            <OnBoardingFooter/>
        </>
    )
}

export default OnBoardingLayOut;
import styled from "styled-components";
import React from "react";

const Box = styled.div`
width: 100%;
height: 88px;
background-color : #F4F8FF;
`;

const Contents = styled.div`
    font-weight: 400;
    font-size: 24px;
    color: #707070;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    margin-left : 374px;
    margin-right : 374px;
    padding-top : 27px;
`;

const OnBoardingFooter = () =>{
    return(
        <Box>
            <Contents>
                <div>http://teampple.com</div>
                <div>고객센터</div>
            </Contents>
        </Box>
    )
}

export default OnBoardingFooter
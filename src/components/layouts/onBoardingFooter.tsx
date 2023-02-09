import styled from "styled-components";
import React from "react";

const Box = styled.div`
width: 100%;
height: 8.1vh;
background-color : #F4F8FF;
`;

const Contents = styled.div`
height : 8.1vh;
font-weight: 400;
    font-size: 1.25vw;
    color: #707070;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    margin-left : 19.4vw;
    margin-right : 19.4vw;
    align-items : center;
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
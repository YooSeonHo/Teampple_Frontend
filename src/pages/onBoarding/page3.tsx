import React from "react";
import styled from "styled-components";
import page3 from './images/Component 3.png';

const Box = styled.div`
    width :100%;
    position : relative;
    margin-top : 179px;

    .content{
        font-weight: 400;
        font-size: 28px;
        line-height: 160%;
        text-align: center;
        color: #505050;

        span{
            color : #487AFF;
        }

        margin-bottom : 142px;
    }

`;


const Background = styled.div`
    background-image : url('${page3}');
    width: 1172px;
    height : 586px;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;
    
`;


const Page3 = () =>{
    return(
        <Box>
            <div className="content">걱정마세요!<br/> 이젠 <span>팀쁠</span>이 도와드려요!</div>
            <Background/>
        </Box>
    )
}

export default Page3;
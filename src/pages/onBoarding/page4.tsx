import React from "react";
import styled from "styled-components";
import page4 from './images/Component 4.png';

export const Box = styled.div`
    width : 100%;
    text-align : center;
    margin-top : 116px;
`;
    
export const Contents = styled.div`
    margin-left : auto;
    margin-right: auto;
    .top{
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #487AFF;
        margin-bottom : 32px;
    }
    
    .mid{
        font-weight: 400;
        font-size: 20px;
        line-height: 160%;
        color: #383838;
        margin-bottom : 72px;
        
        span{
            font-weight : bold;
        }
        
    }
`;
    
export const Background = styled.div`
    background-image : url('${page4}');
    width: 1172px;
    height : 793px;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;

`;

const Page4 = () =>{
    return(
        <Box>
            <Contents>
                <div className="top">처음이지만 체계적으로!</div>
                <div className="mid">팀플을 어떻게 체계적으로 진행해야할지 막막하셨나요?<br/>
                <span>일정조율, 역할분담</span>부터 <span>프로젝트 완수</span>까지 팀플의 A to Z를 도와줍니다.</div>
            </Contents>
            <Background/>
        </Box>
    )
}

export default Page4;
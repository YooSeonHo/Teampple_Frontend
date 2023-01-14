import React from "react";
import styled from "styled-components";
import page6 from './images/Component 6.png';
import { Box,Contents } from "./page4";

export const Background = styled.div`
    background-image : url('${page6}');
    width: 1172px;
    height : 447px;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;

`;


const Page6 = () =>{
    return(
        <Box>
            <Contents>
                <div className="top">알짜배기 템플릿 / 꿀팁 컨텐츠!</div>
                <div className="mid">PPT 템플릿, 보고서 양식이 너무 많아 고르기 어려우셨나요?<br/> 팀플에 꼭 필요한 템플릿, 꿀팁 정보를 선별해 제공합니다.</div>
            </Contents>
            <Background/>
        </Box>
    )
}

export default Page6;
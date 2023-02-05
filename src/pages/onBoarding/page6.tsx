import React from "react";
import styled from "styled-components";
import page6 from './images/Component 6.png';
import { Contents } from "./page4";
import { Box } from "./page5";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Background = styled.div`
    background-image : url('${page6}');
    width: 61.041667vw;
    height : 41.38888vh;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;
    margin-top : 4.259259vh;
`;


const Page6 = () =>{

    useEffect(()=>{
        AOS.init({
            duration : 1500,
        });
        
      })

    return(
        <Box data-aos="fade-up">
            <Contents style={{width : '467px', height : '125px'}}>
                <div className="top">알짜배기 템플릿 / 꿀팁 컨텐츠!</div>
                <div className="mid">PPT 템플릿, 보고서 양식이 너무 많아 고르기 어려우셨나요?<br/> 팀플에 꼭 필요한 템플릿, 꿀팁 정보를 선별해 제공합니다.</div>
            </Contents>
            <Background/>
        </Box>
    )
}

export default Page6;
import React from "react";
import styled from "styled-components";
import page5 from './images/Component 5.png';
import {Contents } from "./page4";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Background = styled.div`
    background-image : url('${page5}');
    width: 61.041667vw;
    height : 37.037037vh;
    background-size: contain;
    background-repeat : no-repeat;
    margin: auto;
    margin-top : 4.7222vh;
`;

export const Box = styled.div`
  width: 100%;
  text-align: center;
  height: 75vh;
  display: flex;
  flex-direction: column;
`;


const Page5 = () =>{
    useEffect(()=>{
        AOS.init({
            duration : 1500,
        });
        
      })

    return(
        <Box data-aos="fade-up">
            <Contents style={{width : '416px', height : '122px'}}>
                <div className="top">파일 관리도 간편하게!</div>
                <div className="mid">채팅방에 뒤죽박죽 섞인 파일을 찾기 어려우셨나요?<br/> 파일 모아보기로 간편하게 파일을 관리할 수 있습니다.</div>
            </Contents>
            <Background/>
        </Box>
    )
}

export default Page5;
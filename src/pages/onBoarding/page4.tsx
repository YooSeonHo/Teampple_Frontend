import React from "react";
import styled from "styled-components";
import page4 from './images/Component 4.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";


export const Box = styled.div`
    width : 100%;
    text-align : center;
    height : 100vh;
    display : flex;
    flex-direction : column;

`;
    
export const Contents = styled.div`
    margin-left : auto;
    margin-right: auto;
    margin-top : auto;
    .top{
        font-weight: 700;
        font-size: 1.25vw;
        line-height: 29px;
        color: #487AFF;
        margin-bottom : 2.962963vh;
    }
    
    .mid{
        font-weight: 400;
        font-size: 1.041667vw;
        line-height: 160%;
        color: #383838;
        margin-bottom : 6.66666vh;
        
        span{
            font-weight : bold;
        }
        
    }
`;
    
export const Background = styled.div`
    background-image : url('${page4}');
    width: 61.041667vw;
    height : 73.425926vh;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;

`;

const Page4 = () =>{

    useEffect(()=>{
        AOS.init({
            duration : 1500,
        });
        
      })

    return(
        <Box data-aos="fade-up">
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
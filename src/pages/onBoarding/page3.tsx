import React from "react";
import styled from "styled-components";
import page3 from './images/Component 3.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";


const Box = styled.div`
    width :100%;
    height : 100vh;
    position : relative;
    margin : auto;
    display : flex;
    flex-direction : column;

    .content{
        font-weight: 400;
        font-size: 1.45833vw;
        line-height: 160%;
        text-align: center;
        color: #505050;
        margin-top : auto;
        span{
            color : #487AFF;
        }

    }
    
    `;
    
    
    const Background = styled.div`
    background-image : url('${page3}');
    width: 61.04166vw;
    height : 54.259259vh;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;
    margin-top : 13.148148vh;
    
`;


const Page3 = () =>{
    useEffect(()=>{
        AOS.init({
            duration : 1500,
        });
        
      })

    return(
        <Box data-aos="fade-up">
            <div className="content">걱정마세요!<br/> 이젠 <span>팀쁠</span>이 도와드려요!</div>
            <Background/>
        </Box>
    )
}

export default Page3;
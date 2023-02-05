import React from "react";
import styled from "styled-components";
import page2 from './images/Component 2.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";



const Box = styled.div`
    width :100%;
    // height : 499px;
    height : 75vh;
    position : relative;
    margin-top : auto;
    display : flex;
`;

const Background = styled.div`
    background-image : url('${page2}');
    width : 39.427083vw;
    height : 43.796vh;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;
    margin-left : 35.885vw;
    margin-right:24.6875vw;
    
`;

const Contents = styled.div`
    display : flex;
    flex-direction : column;
    position : absolute;
    left : 23.2291vw;
    top : 12.44375vh;
    width : 23.2291vw;
    height: 12.4074vh;

    .header{
        font-weight: 500;
        font-size: 1.6666667vw;
        line-height: 150%;
        color: #383838;
    }

    .mid{
        font-weight: 400;
        font-size: 0.9375vw;
        margin-top : 1.351852vh;
        line-height: 150%;
        color: #A7A7A7;
    }
`;


const Page2 = () =>{

    useEffect(()=>{
        AOS.init({
            duration : 1500,
        });
        
      })

    return(
        <Box data-aos="fade-up">
            <Background/>
                <Contents>
                    <div className="header">대학에 갓 입학했는데<br/>전공에도 교양에도..팀플이..</div>
                    <div className="mid">학교, 대외활동, 공모전 ...<br/> 각종 팀프로젝트를 진행 하느라 지치셨나요?</div>
                </Contents>
        </Box>
    )
}

export default Page2;
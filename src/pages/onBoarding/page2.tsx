import React from "react";
import styled from "styled-components";
import page2 from './images/Component 2.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";



const Box = styled.div`
    width :100%;
    // height : 499px;
    height : 100vh;
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
    
`;

const Contents = styled.div`
    display : flex;
    flex-direction : column;
    position : absolute;
    left : 18.2291vw;
    top : 25.925vh;
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
        font-size: 1.66667vw;
        line-height: 100%;
        color: #A7A7A7;
    }
`;


const Page2 = () =>{

    useEffect(()=>{
        AOS.init({
            duration : 2000,
        });
        
      })

    return(
        <Box data-aos="fade-up">
            <Background/>
                <Contents>
                    <div className="header">대학에 갓 입학했는데<br/>전공에도 교양에도..팀플이..</div>
                    <div className="mid">잘 해보고 싶었지만 쉽게 알 수 없어서 나서기 힘들었던 새내기들</div>
                </Contents>
        </Box>
    )
}

export default Page2;
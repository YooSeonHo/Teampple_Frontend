import React from "react";
import styled from "styled-components";
import page7 from './images/Component 7.png';
import { Box } from "./page4";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Background = styled.div`
    background-image : url('${page7}');
    width: 61.041667vw;
    height : 25.55555vh;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;
    margin-top : 0;
    `;
    
    const Content = styled.div`
    font-weight: 600;
    font-size: 1.66666vw;
    line-height: 38px;
    color: #383838;
    margin : auto;
    margin-bottom : 4.44444vh;
`;

const Page7 = () =>{
    useEffect(()=>{
        AOS.init({
            duration : 1500,
        });
        
      })

    return(
        <Box data-aos="fade-up">
            <Content>
                <div>또, 이런 사람들에게 필요해요</div>
            </Content>
            <Background/>
        </Box>
    );
}

export default Page7;
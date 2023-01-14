import React from "react";
import styled from "styled-components";
import page7 from './images/Component 7.png';
import { Box } from "./page4";

export const Background = styled.div`
    background-image : url('${page7}');
    width: 1172px;
    height : 276px;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;

`;

const Content = styled.div`
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: #383838;
    margin-bottom : 48px;
`;

const Page7 = () =>{
    return(
        <Box>
            <Content>
                <div>또, 이런 사람들에게 필요해요</div>
            </Content>
            <Background/>
        </Box>
    );
}

export default Page7;
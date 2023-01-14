import React from "react";
import styled from "styled-components";
import page2 from './images/Component 2.png';


const Box = styled.div`
    width :100%;
    height : 499px;
    position : relative;
`;

const Background = styled.div`
    background-image : url('${page2}');
    width : 757px;
    height : 473px;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;
    
`;

const Contents = styled.div`
    display : flex;
    flex-direction : column;
    position : absolute;
    left : 350px;
    top : 5px;
    width : 446px;
    height: 134px;

    .header{
        font-weight: 500;
        font-size: 32px;
        line-height: 150%;
        color: #383838;
    }

    .mid{
        font-weight: 400;
        font-size: 18px;
        line-height: 100%;
        color: #A7A7A7;
    }
`;


const Page2 = () =>{
    return(
        <Box>
            <Background>
            </Background>
                <Contents>
                    <div className="header">대학에 갓 입학했는데<br/>전공에도 교양에도..팀플이..</div>
                    <div className="mid">잘 해보고 싶었지만 쉽게 알 수 없어서 나서기 힘들었던 새내기들</div>
                </Contents>
        </Box>
    )
}

export default Page2;
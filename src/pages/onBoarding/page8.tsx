import React from "react";
import styled from "styled-components";
import page8 from './images/Component 8.png';
import btn from './images/Group 310.png';
import { Link } from "react-router-dom";

export const Background = styled.div`
    background-image : url('${page8}');
    width: 100%;
    text-align : center;
    height : 614px;
    background-size: contain;
    background-repeat : no-repeat;
    margin : auto;
    background-color: #487AFF;
    margin-top : 310px;
`;

const Contents = styled.div`
    font-weight: 600;
    font-size: 32px;
    line-height: 160%;
    color: #FFFFFF;
    padding-top : 200px;
    display : flex;
    flex-direction : column;

    .btn{
        width: 183px;
        height: 60px;
        margin : auto;
        margin-top : 53px;
    }
    img{
        max-width : 100%;
        max-height : 100%;
    }
`

const Page8 = () =>{
    return(
        <Background>
            <Contents>
                <div>건강하고 성공적인 팀플을 위해<br/> 팀쁠의 가이드를 받아 볼 준비가 되셨나요?</div>
                <div className="btn">
                    <Link to='/home' style={{textDecoration : 'none'}}>
                        <img src={btn}/>
                    </Link>
                </div>
            </Contents>
        </Background>
    )
}

export default Page8;
import styled from "styled-components";
import React from "react";
import editBtn from '../images/edit_btn.png';
import feedback from '../images/feedback.png';
import group from '../images/Group 697.png';

const HeaderBox = styled.div`

width: 1680px;
height: 72px;
background-color: #FFFFFF;
display: flex;
font-weight: 600;
font-size: 24px;
line-height: 72px;
white-space: nowrap;
overflow: hidden;



#main{
    margin-left: 54px;
    width: 250px;
    height: 24px;
    max-width: 250px;
}

#sub{
    margin-left: 24px;
    width: 260px;
    height: 20px;
}

#dDayBox{
    display: flex;
    padding: 0px;
    gap: 8px;
    width: 58px;
    height: 26px;
    background: #FFFFFF;
    border: 1px solid #88A9FF;
    border-radius: 8px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 139px;
}

#dDay{
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #487AFF;
    flex-grow: 0;
    margin: auto;
}

#date{
    margin-left: 8px;
    width: 260px;
    height: 20px;
    font-size: 18px;
    color: #707070;
}

/* .editBox{
    width: 69px;
    height: 28px;
    margin-top: 5px;
    margin-left: 53px;
} */

img{
    max-width: 100%;
    max-height: 100%;
}

#teamList{
    margin-left: 193px;
    /* 만약 팀장이어서 팀플 수정 버튼 있으면 마진 61  없으면 193*/
    width: 72px;
    height: 40px;
    margin-top: auto;
    margin-bottom: auto;
    background-image: url(${group});
    background-size: 72px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#teamNum{
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #A7A7A7;
    margin-left: auto;
    margin-right: 13px;
}

.iconBox{
    margin-left: auto;
    margin-right: 54px;
}

#feedback{
    width: 32px;
    height: 32px;
    margin-top: 20px;
}
`;

const TeampleHeader = () =>{
    return(
        <HeaderBox>
            <div id="main">홈</div>

            <div id="sub">팀플 가이드 서비스 개발</div>
            <div id="dDayBox">
                <div id="dDay">
                    D-24
                </div>
            </div>
            <div id="date">2022.11.22-2022.12.21</div>
            {/* <div className="editBox">
                <img src={editBtn}>
            </div> */}
            <div id="teamList">
                <a id="teamNum">+3</a>
            </div>
            <div className="iconBox">
                <img id='feedback' src={feedback}/>
            </div>
            
    </HeaderBox>
    )
}

export default TeampleHeader;
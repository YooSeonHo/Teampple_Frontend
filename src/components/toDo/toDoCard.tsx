import styled from "styled-components";
import React from "react";
import arrow from '../images/ArrowLineRight2.png';
import done from '../images/done icon.png';
import { StyledToDoInfo } from "interfaces";

const CardBox = styled.div<StyledToDoInfo>`
    width: 372px;
    height: ${(props) => props.pathname === '/home'? '448px' : '556px' };
    background-color: #F4F8FF;
    /* border: 2px solid #487AFF; */
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    margin-right:28px;

.toDos{
    overflow-x: hidden;


}

.info{
    display: flex;
    justify-content: space-between;
    margin-left: 24px;
    margin-top: 24px;
    margin-right: 24px;
}
.step{
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #707070;
    /* color: #88A9FF; */
}

.when{
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #707070;
    /* color: #88A9FF; */
}

.headerText{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 26px;
}

.name{
    margin-top :${(props) => props.pathname === '/home'? '24px' : '16px' };
    margin-left : 24px;
    font-weight: 600;
    font-size: 22px;
    line-height: 100%;
    color: #383838;
}

.left{
    margin-right: 20px;
    margin-top: ${(props) => props.pathname === '/home'? '20px' : '14px' };
    display: flex;
}

.leftText{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #487AFF;
    margin-right: 8px;
    margin-top : auto;
    margin-bottom: auto;
}


.leftNumBox{
    background-color: #487AFF;
    width :28px;
    height: 28px;
    border-radius: 100px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    justify-content: center;
}

.leftNum{
    margin-top: auto;
    margin-bottom: auto;
}


 

img{
    max-width:100%;
max-height:100%;
}



.addBox{
    width: 332px;
    height: 72px;
    background-color: #FFFFFF;
    border-radius: 12px;
    display: flex;
    margin-left:20px;
    margin-bottom: 12px;
    justify-content: center;
    margin-top: 26px;
}

.addBox:hover{
    cursor :grab;
}

.addText{
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    color: #487AFF;
    margin-top: auto;
    margin-bottom: auto;
}
`;

const ToDoBox = styled.div`
    width: 332px;
    height: 72px;
    background-color: #FFFFFF;
    border-radius: 12px;
    display: flex;
    margin-left:20px;
    margin-right: 20px;
    justify-content: space-between;
    margin-bottom: 12px;
    

    img{
        max-width:100%;
        max-height:100%;
    }

    .toDoText{
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
        color: #505050;
        margin-left:16px;
        padding-top:28px;
        overflow : hidden;
        white-space : nowrap; 
        text-overflow: ellipsis;
        max-width: 180px;
    }
    
    .toDoArr{
        color: #C0C0C0;
        width: 32px;
        height: 32px;  
        margin-top: auto; 
        margin-bottom: auto;
        margin-right: 8px;
    }  
`;

const DoneBox = styled.div`
        width: 332px;
        height: 72px;
        background-color: #FFFFFF;
        border-radius: 12px;
        display: flex;
        margin-left:20px;
        margin-right: 20px;
        margin-bottom: 12px;

        img{
            max-width:100%;
            max-height:100%;
        }

    .doneIcon{
        width: 56px;
        height: 34px;
        margin-left: 12px;
        margin-top: 21px;
    }

    .doneText{
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
        color: #505050;
        margin-left:16px;
        padding-top:28px;
        overflow : hidden;
        white-space : nowrap; 
        text-overflow: ellipsis;
        max-width: 180px;
    }

    .doneArr{
        color: #C0C0C0;
        width: 32px;
        height: 32px;  
        margin-top: auto; 
        margin-bottom: auto;
        margin-right: 8px;
        margin-left: auto;
    }
    /* 
    스크롤 관련해서 문제 있으면 체크하기 ->호버 할때 보이게해야댐 */
`

const ToDoCard = () =>{
    return(
        <CardBox pathname={window.location.pathname}>
            {window.location.pathname === '/home' ? null :
            <div className="info">
            <div className="step">1단계</div>
            <div className="when">11.22~11.25</div>
        </div> }
        <div className="headerText">
            <div className="name">마케팅 원론</div>
            <div className="left">
                <a className="leftText">남은 일</a>
                <div className="leftNumBox">
                    <a className="leftNum">2</a>
                </div>
            </div>
        </div>
        <div className="toDos">
            <ToDoBox>
                <div className="toDoText">해외 시장 조사</div>
                <div  className="toDoArr">
                    <img src={arrow}/>
                </div>
            </ToDoBox>
            <ToDoBox>
                <div className="toDoText">국내 시장 조사</div>
                <div  className="toDoArr">
                    <img src={arrow}/>
                </div>
            </ToDoBox>
            <DoneBox>
                <div className="doneIcon">
                    <img src={done}/>
                </div>
                <div className="doneText">협업툴 시장 조사</div>
                <div  className="doneArr">
                    <img src={arrow}/>
                </div>
            </DoneBox>
            <DoneBox>
                <div className="doneIcon">
                    <img src={done}/>
                </div>
                <div className="doneText">12345678901234123123</div>
                <div  className="doneArr">
                    <img src={arrow}/>
                </div>
            </DoneBox>
            <DoneBox>
                <div className="doneIcon">
                    <img src={done}/>
                </div>
                <div className="doneText">12345678901234123123</div>
                <div  className="doneArr">
                    <img src={arrow}/>
                </div>
            </DoneBox>
        </div>
        {
            window.location.pathname === '/home' ? null :
            <div className="addBox">
                <div className="addText">+ 할 일 추가하기</div>
            </div>
        }
        </CardBox>
    )
}

export default ToDoCard;

//해당 기간에 색깔 바꾸는 부분만 손 보면 될듯
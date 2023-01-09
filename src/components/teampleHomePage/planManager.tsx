import styled from "styled-components";
import React from "react";

const ManagerBox = styled.div`

    width: 326px;
    height: 1008px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;

.dDayHeader{
    width: 324px;
    height: 238px;
}

.text{
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: #383838;
    margin-left: 24px;
    margin-top: 36px;
    margin-bottom: 32px;
}

.headerBox{
    background: #F4F8FF;
    border-radius: 12px;
    width: 284px;
    height: 114px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
}

.headerText{
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #707070;
    margin-left : auto;
    margin-right: auto;
    margin-top: 28px;
}

.headerdDay{
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    color: #487AFF;
    margin-left : auto;
    margin-right: auto;
    margin-top: 18px;
}

.contentBox{
    margin-top: 32px;
    overflow: auto;
}

.content{
    background: #F4F8FF;
    border-radius: 12px;
    width: 284px;
    height: 64px;
    margin-left: 20px;
    display: flex;
    margin-bottom: 8px;
}

.contentdDay{
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #707070;
    margin: 24px;
    margin-right: 28px;
}

.contentInfo{
    display: flex;
    flex-direction: column;
    margin-top: 14px;
}

.contentName{
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #707070;
    margin-bottom: 8px;
}

.when{
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #A7A7A7;
}

.fixedSize{
    margin-top: 14px;
}

.addSch{
    width: 284px;
    height: 56px;
    background: #F4F8FF;
    border-radius: 12px;
    display: flex;
    margin-left:20px;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 20px;
}

.addSch:hover{
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

/* 
scroll 투명하게 해야댈듯? */
`;

const PlanManager = () =>{

    return(
        <ManagerBox>
        <div className="dDayHeader">
            <div className="text">일정 관리자</div>
            <div className="headerBox">
                <div className="headerText">프로젝트 마감까지</div>
                <div className="headerdDay">D-28</div>
            </div>
        </div>
        <div className="contentBox">
            <div className="content">
                <div className="contentdDay">D-6</div>
                <div className="contentInfo">
                    <div className="contentName">중간 발표</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
            <div className="content">
                <div className="contentdDay">D-15</div>
                <div className="contentInfo">
                    <div className="contentName">3차 온라인 회의</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
            <div className="content">
                <div className="contentdDay">D-16</div>
                <div className="contentInfo">
                    <div className="contentName">4차 온라인 회의</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
            <div className="content">
                <div className="contentdDay">D-24</div>
                <div className="contentInfo">
                    <div className="contentName">5차 온라인 회의</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
            <div className="content">
                <div className="contentdDay">D-24</div>
                <div className="contentInfo">
                    <div className="contentName">5차 온라인 회의</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
            <div className="content">
                <div className="contentdDay">D-24</div>
                <div className="contentInfo">
                    <div className="contentName">5차 온라인 회의</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
            <div className="content">
                <div className="contentdDay">D-24</div>
                <div className="contentInfo">
                    <div className="contentName">5차 온라인 회의</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
            <div className="content">
                <div className="contentdDay">D-24</div>
                <div className="contentInfo">
                    <div className="contentName">5차 온라인 회의</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
            <div className="content">
                <div className="contentdDay">D-24</div>
                <div className="contentInfo">
                    <div className="contentName">5차 온라인 회의</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
            <div className="content">
                <div className="contentdDay">D-24</div>
                <div className="contentInfo">
                    <div className="contentName">5차 온라인 회의</div>
                    <div className="when">2022.12.14  18:00</div>
                </div>
            </div>
        </div>
        <div className="fixedSize">
            <div className="addSch">
                <div className="addText">+ 일정 추가하기</div>
            </div>
        </div>
    </ManagerBox>

    );
}

export default PlanManager
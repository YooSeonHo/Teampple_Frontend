import styled from "styled-components";
import React, { useState } from "react";
import prof1 from '../images/profile/prof1.png';
import editBtn from '../images/Frame 299.png';
import { useNavigate } from "react-router-dom";

const EditBox = styled.div`
    width: 972px;
    height: 688px;
    border: 2px solid #D5DBEE;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    margin-top: 44px;
    margin-left :auto;
    margin-right : auto;

.profileImg{
    width: 220px;
    height: 220px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 36px;
}

img{
    max-width: 100%;
    max-height: 100%;
}

input{
    background-color:transparent;
    border: none;
    flex-wrap: nowrap;
}

input:focus{
    outline: none;
}

.profileInfo{
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
}

.profileName{
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    text-align: center;
}

.profileEmail{
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: #383838;
    margin-top: 20px;
}

.logout{
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #487AFF;
    margin-top: 21px;
}

.logout:hover{
    cursor : grab;
}

.schoolInfo{
    margin-top: 56px;
    margin-left: 100px;
}

.infoBox{
    width: 372px;
    height: 50px;
    background-color: rgba(237, 239, 246, 0.5);
    border-radius: 12px;
    display: flex;
    margin-right: 28px;
}

.infoText{
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #707070;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 16px;
    margin-right: 28px;
}

.schoolInfoLine2{
    display: flex;
    margin-top: 24px;
    margin-left: 100px;
}

.school, .major, .grade{
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #383838;
    margin-top: auto;
    margin-bottom: auto;
}

.editBtn{
    width: 114px;
    height: 40px;
    margin-top: 41px;
    margin-left: auto;
    margin-right: auto;
}

.editBtn:hover{
    cursor: grab;
}

.extraText{
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: #383838;
    margin-top : 88px;

    .myPlan{
        margin-bottom : 28px;
    }

    .myPlan:hover,
    .delete:hover{
        cursor : grab;
    }
}
`;

const EditProfile = ()=>{
    const [school,setSchool] = useState("홍익대학교");
    const [major,setMajor] = useState("컴퓨터공학과");
    const [grade,setGrade] = useState("17");
    const navigate = useNavigate();

    const onSchool = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setSchool(e.target.value)
    }
    const onMajor = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setMajor(e.target.value)
    }
    const onGrade = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setGrade(e.target.value)
    }

    const onClick = () =>{
        alert("프로필 수정이 완료되었습니다.")
        navigate('/home')
        //임시!
    }

    return(
        <EditBox>
        <div className="profileImg">
            <img src={prof1}/>
        </div>
        <div className="profileInfo">
            <div className="profileName">김팀쁠</div>
            <div className="profileEmail">teampple2022@naver.com</div>
            <div className="logout">로그아웃</div>
        </div>
        <div className="schoolInfo">
            <div className="infoBox">
                <div className="infoText">학교</div>
                <input className="school" value={school} onChange={onSchool}></input>
            </div>
        </div>
        <div className="schoolInfoLine2">
            <div className="infoBox">
                <div className="infoText">전공</div>
                <input className="major" value={major} onChange={onMajor}></input>
            </div>
            <div className="infoBox">
                <div className="infoText">학번</div>
                <input className="grade" value={grade} onChange={onGrade}></input>
            </div>
        </div>
        <div className="editBtn" onClick={onClick}>
            <img src={editBtn}/>
        </div>
        <div className="extraText">
            <div className="myPlan">나의 구독 플랜</div>
            <div className="delete">탈퇴하기</div>
        </div>
    </EditBox>
    );
}

export default EditProfile;
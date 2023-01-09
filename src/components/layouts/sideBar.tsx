import styled from "styled-components";
import React from "react";
import logo from '../images/logo.png';
import house from '../images/House.png';
import usersThree from '../images/UsersThree.png';
import folderIcon from '../images/FolderSimple.png';
import headset from '../images/Headset.png';
import { Link } from "react-router-dom";

const SideBarBox = styled.div`

width: 240px;
height: 1080px;
display : flex;
flex-direction: column;
background-color: #F4F8FF;


.logo{
    margin-left: 40px;
    margin-top: 19px;
    width: 135.47px;
    height: 38px;
}

img{
    max-width: 100%;
    max-height: 100%;
}


.user{
    display: flex;
    margin-left: 36px;
    margin-bottom: 12px;
    width: 240px;
    height: 64px;
}

#userName{
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-top: auto;
    margin-bottom: auto;
}

#userImage{
    width: 40px;
    height: 40px;
    background-color: #FCE44C;
    border-radius: 40px;
    margin-right: 12px;
    margin-top: auto;
    margin-bottom: auto;
}


.box{
    color : #707070;
    margin-left: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    width: 200px;
    height: 40px;
    display: flex;
    flex-direction: row;
}



.box:hover{
    background-color: #D4E4FF;
    color: #487AFF;
    cursor:grab;
}
/* 추가로 클릭 되면 box 색 바뀌게 설정 */

.newBox{
    color : #707070;
    margin-left: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    width: 200px;
    height: 40px;
    display: flex;
    flex-direction: row;
}

.newBox:hover{
    cursor:grab;
}

.boxText{
    margin-left: 12px;
    line-height: 40px;
    font-weight: 600;
    font-size: 18px;
    color: #707070;
}

.subBoxText{
    margin-left: 48px;
    line-height: 40px;
}

#icon{
    width: 24px;
    height: 24px;
    margin-left: 12px;
}

/* 호버 및 클릭시 아이콘 색깔 바뀌게  */

.iconWrap{
    margin-top : auto;
    margin-bottom : auto;
}

#newTeample{
    color: #C0C0C0;
    line-height: 40px;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
}
/* 조금 더 왼쪽으로 땡겨야 할 듯 */

.btm{
    margin-top: auto;
    margin-bottom: 48px;
}
`

const SideBar = () =>{

    return(
        <SideBarBox>
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="user">
                <div id="userImage"></div>
                <a id="userName">김팀쁠</a>
            </div>

            <Link to='/home' style={{ textDecoration: 'none' }}>
            <div className="box">
                <div className="iconWrap">
                    <img src={house} id="icon"/>
                </div>
                <div className="boxText">홈</div>
            </div>
            </Link>

            <div className="box">
                <div className="iconWrap">
                    <img src={usersThree} id="icon"/>
                </div>
                <div className="boxText">팀플</div>
            </div>

            <div className="box">
                <div className="subBoxText">경영 전략</div>
            </div>

            <div className="box">
                <div className="subBoxText">마케팅 원론</div>
            </div>

            <div className="newBox" id="newTeample">
                <div>+ 새 팀플</div>
            </div>

            <div className="btm">
                <Link to="/template" style={{ textDecoration: 'none' }}>
                <div className="box">            
                    <div className="iconWrap">
                        <img src={folderIcon} id="icon"/>
                    </div>
                <div className="boxText">템플릿</div>
                </div>
                </Link>
                <div className="box">          
                    <div className="iconWrap">
                        <img src={headset} id="icon"/>
                    </div>
                <div className="boxText">고객센터</div>
                </div>
            </div>
    </SideBarBox>
    )
}

export default SideBar;
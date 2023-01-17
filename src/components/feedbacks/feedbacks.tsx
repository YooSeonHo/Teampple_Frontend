import React from "react";
import styled from "styled-components";
import profile1 from '../images/profile/proImageU1.png';
import { StyledFeedInfo } from "interfaces";

const FeedBox = styled.div<StyledFeedInfo>`
border: 1px solid #DEDEDE;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
background-color : white;
border-radius: 12px;
width: 372px;
height: 471px;
display: flex;
flex-direction: column;

left : 0;
right: 0;
position : absolute;
margin-right : 54px;
margin-top: ${(props) => props.pathname === '/home'? '84px' : '12px' };
margin-left : auto;
z-index : 1001;

.feedText{
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #383838;
    margin-top: 24px;
    margin-left: 20px;
}

.feedList{
    display: flex;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    overflow: auto;
}


img{
    max-width: 100%;
    max-height: 100%;
}
`;

const Feed = styled.div`
    width: 330px;
    height: 64px;
    margin-left: 20px;
    display: flex;

.icon{
    width: 40px;
    height: 40px;
    margin-right: 16px;
    margin-bottom: 12px;
}

.feedContent{
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: #383838;
    text-overflow: ellipsis;  
	overflow : hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 250px;
    max-height: 40px;
    white-space: normal;
}


img{
    max-width: 100%;
    max-height: 100%;
}

`;

const Feedbacks = ({pathname} : {pathname : string}) => {
    return(
        <FeedBox pathname={pathname}>
            <div className="feedText">피드백</div>
            <div className="feedList">
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
                <Feed>
                    <div className="icon">
                        <img src={profile1}/>
                    </div>
                    <div className="feedContent">
                        [경영 전략] 세부 할 일에 적힌 피드백 입니다. 안녕하세요 저는 유선호입니다 안녕하세요 반갑습니다 방가방가
                    </div>
                </Feed>
            </div>
    </FeedBox>
    )
}

export default Feedbacks 
import styled from "styled-components";
import React from "react";
import vector from '../images/Vector.png';
import more from "../images/Group 419.png";
import finBtn from "../images/Group 435.png";
import addFile from "../images/Frame 295.png";
import download from "../images/DownloadSimple.png";
import trash from "../images/Trash.png";
import ellipse from "../images/Ellipse 1.png";
import send from "../images/send.png";



const DetailContainer = styled.div`
    width: 1000px;
    height: 1008px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;

.headerBtns{
    display: flex;
    justify-content: space-between;
    z-index: 1000;
}


.back{
    width: 32px;
    height: 32px;
    margin-top: 28px;
}

.more{
    margin-top: 33px;
    width: 5px;
    height: 21px;
    margin-right: 19px;
}

.more:hover,
.back:hover{
    cursor: grab;
}

img{
    max-width: 100%;
    max-height: 100%;
}

.toDoInfoBox{
    width: 100%;
    height: 218px;
    margin-top: 32px;
    margin-bottom : 76px;
}

.step{
   display: flex;
}

.stepRound{
    width: 51px;
    height: 24px;
    border: 1px solid #487AFF;
    border-radius: 20px;
    display: flex;
}

.stepText{
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: #487AFF;
    margin: auto;
}

.stepName{
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #487AFF;
    margin-left: 8px;
    margin-top: auto;
    margin-bottom: auto;
}

.subName{
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
}

.taskName{
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
    color: #383838;
}

.finBtn{
    width: 136px;
    height: 36px;
    margin-right: 20px;
}

.finBtn:hover{
    cursor: grab;
}

.subInfo{
    display: flex;
    flex-direction: column;
    margin-top: 37px;
}

.manager
, .date
, .state{
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #707070;
    margin-bottom: 25px;
}
.managerInput{
    margin-left: 52px;
    font-weight: 400;
    font-size: 20px;
}

.dateInput{
    margin-left: 67px;
    font-weight: 400;
    font-size: 20px;
}

.stateInput{
    margin-left: 32px;
    font-weight: 400;
    font-size: 20px;
}

.top{
    margin-bottom: 71px;
}

.file{
    display: flex;
    flex-direction: row;
}

.fileText{
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: #383838;
    margin-left: 6px;
    margin-top: auto;
    margin-bottom: auto;
}

.addFile{
    width: 100px;
    height: 28px;
    margin-left: 24px;
    margin-top: auto;
    margin-bottom: auto;
}

.addFile:hover{
    cursor: grab;
}

.files{
    margin-top: 20px;
    flex-wrap: nowrap;
    overflow: auto;
    display: flex;
}

.fileCard{
    width: 272px;
    height: 92px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #D5DBEE;
    margin-right: 28px;
    min-width: 272px;
}

.fileName{
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
}

.nameText{
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #707070;
}

.icons{
    margin-left: auto;
    margin-right: 40px;
    width: 20px;
    height: 20px;
    display: flex;
}

.download{
    margin-right: 8px;
}

.download:hover,
.trash:hover{
    cursor: grab;
}

.fileInfo{
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #A7A7A7;
    margin-left: 20px;
    display: flex;
    margin-top: 20px;
}

.fileSize{
    margin-left: auto;
    margin-right: 20px;
}

.mid{
    margin-bottom: 72px;
}

.feedText{
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: #383838;
    margin-left: 6px;
}

.addFeed{
    display: flex;
    margin-top: 24px;
}

.profileImg{
    width: 48px;
    height: 48px;
    margin-left: 12px;
}

.feedInput{
    width: 896px;
    height: 48px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 16px;
    border:0 solid black;
    border-bottom: 1px solid #D5DBEE;
    padding: 0;
}

.feedInput:focus{
    outline: none;
}

.inputBox{
    position: relative;
}

.send{
    position: absolute;
    top :16px;
    left : 889px;
    border:none;
    background-color:transparent;
    width: 24px;
    height: 24px;
    background-image: url(${send});
}

.send:hover{
    cursor: grab;
}

.feedbacks{
    display: flex;
    flex-direction: column;
    margin-top: 36px;
}

.feedBox{
    width: 972px;
    height: 79px;
    display: flex;
    margin-bottom: 16px;
    overflow-y: auto;
    overflow-x: hidden;
}

.fullFeed{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.feedInfo{
    display: flex;
    margin-left: 16px;
    width: 100%;
}

.feedName{
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #383838;
}

.feedDate{
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #A7A7A7;
    margin-left: 12px;
    margin-top: auto;
    margin-bottom: auto;
}

.plusBtn{
    width: 5px;
    height: 21px;
    margin-left: auto;
    margin-right: 20px;
}

.plusBtn:hover{
    cursor: grab;
}

.feedContent{
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #383838;
    margin-left: 16px;
    margin-top: 12px;
    max-width: 70%;
}

`;

const DetailBox = () =>{

    return(
        <DetailContainer>
            <div className="headerBtns">
                <div className="back">
                    <img src={vector}/>
                </div>
                <div className="more">
                    <img src={more}/>
                </div>
            </div>
            <div className="toDoInfoBox">
                <div className="top">
                    <div className="step">
                        <div className="stepRound">
                            <a className="stepText">1단계</a>
                        </div>
                        <div className="stepName">자료 조사</div>
                    </div>
                    <div className="subName">
                        <div className="taskName">협업툴 시장 조사</div>
                        <div className="finBtn">
                            <img src={finBtn}/>
                        </div>
                    </div>
                    <div className="subInfo">
                        <div className="manager">
                            담당자
                            <a className="managerInput">안수빈</a>
                        </div>
                        <div className="date">
                            기간
                            <a className="dateInput">2022.11.22-2022.11.23</a>
                        </div>
                        <div className="state">
                            진행 상태
                            <a className="stateInput">완료</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mid">
                <div className="file">
                    <div className="fileText">파일</div>
                    <div className="addFile">
                        <img src={addFile}/>
                    </div>
                </div>
                <div className="files">
                    <div className="fileCard">
                        <div className="fileName">
                            <div className="nameText">협업툴 시장 조사.docs</div>
                            <div className="icons">
                                <img src={download} className="download"/>
                                <img src={trash} className="trash"/>
                            </div>
                        </div>
                        <div className="fileInfo">
                            <div className="uploadDate">2022.11.25 12:30</div>
                            <div className="fileSize">85.0KB</div>
                        </div>
                    </div>
                    <div className="fileCard">
                        <div className="fileName">
                            <div className="nameText">이미지.docs</div>
                            <div className="icons">
                                <img src={download} className="download"/>
                                <img src={trash} className="trash"/>
                            </div>
                        </div>
                        <div className="fileInfo">
                            <div className="uploadDate">2022.11.25 12:30</div>
                            <div className="fileSize">85.0KB</div>
                        </div>
                    </div>
                    <div className="fileCard">
                        <div className="fileName">
                            <div className="nameText">장표 정리.docs</div>
                            <div className="icons">
                                <img src={download} className="download"/>
                                <img src={trash} className="trash"/>
                            </div>
                        </div>
                        <div className="fileInfo">
                            <div className="uploadDate">2022.11.25 12:30</div>
                            <div className="fileSize">85.0KB</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btm">
                <div className="feedText">피드백</div>
                <div className="addFeed">
                    <div className="profileImg">
                        <img src={ellipse}/>
                    </div>
                    <div className="inputBox">
                        <input className="feedInput" placeholder="피드백을 입력해주세요."/>
                        <button className="send">
                        </button>
                    </div>
                </div>
                <div className="feedbacks">
                    <div className="feedBox">
                        <div className="profileImg">
                            <img src={ellipse}/>
                        </div>
                        <div className="fullFeed">
                            <div className="feedInfo">
                                <div className="feedName">정서윤</div>
                                <div className="feedDate">8일전</div>
                                <div className="plusBtn">
                                    <img src={more}/>
                                </div>
                            </div>
                            <div className="feedContent">해외 시장조사도 추가하면 좋겠습니다.</div>
                        </div>
                    </div>
                    <div className="feedBox">
                        <div className="profileImg">
                            <img src={ellipse}/>
                        </div>
                        <div className="fullFeed">
                            <div className="feedInfo">
                                <div className="feedName">안수빈</div>
                                <div className="feedDate">8일전</div>
                                <div className="plusBtn">
                                    <img src={more}/>
                                </div>
                            </div>
                            <div className="feedContent">해외 시장조사도 추가하면 좋겠습니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </DetailContainer>
    );
}

export default DetailBox;


//피드백 부분 스크롤 필요하면 추가하기~
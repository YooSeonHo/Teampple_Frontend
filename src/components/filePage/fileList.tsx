import styled from "styled-components";
import React from "react";
import arrow from '../images/ArrowLineRight2.png';

const ListBox = styled.div`

    width: 1172px;
    height: 810px;
    display: flex;
    flex-direction: column;
    margin-left : auto;
    margin-right : auto;

.fileHeader{
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #707070;
    display: flex;
    margin-top: 20px;
    height: 52px;
}

.fileName{
    width: 400px;
}

.fileLoc{
    width: 200px;
}

.fileOwner{
    width: 200px;
}

.fileSize{
    width: 100px;
}

.fileDate{
    width: 200px;
}

.fileList{
    display: flex;
    flex-direction: column;
}

.file{
    display: flex;
    width: 1172px;
    height: 72px;
}

.file:hover{
    background-color: #EAF2FF;
    cursor: grab;
}

.name{
    width: 376px;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #707070;
    max-width: 376px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 24px;
}

.loc{
    width: 200px;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #A7A7A7;
    max-width: 200px;
    margin-top: auto;
    margin-bottom: auto;
}

.owner,
.date{
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #A7A7A7;
    width: 200px;
    max-width: 200px;
    margin-top: auto;
    margin-bottom: auto;
}

.size{
    width: 100px;
    max-width: 100px;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #A7A7A7;
    margin-top: auto;
    margin-bottom: auto;
}

.icon{
    height: 16px;
    width: 15px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 29px;
}

.icon:hover{
    cursor: grab;
}

img{
    max-width: 100%;
    max-height: 100%;
}
`;

const FileList = () =>{
    return(
        <ListBox>
            <div className="fileHeader">
                <div className="fileName">파일명</div>
                <div className="fileLoc">파일 경로</div>
                <div className="fileOwner">파일 업로더</div>
                <div className="fileSize">크기</div>
                <div className="fileDate">날짜</div>
            </div>
            <div className="fileList">
                <div className="file">
                    <div className="name">협업툴 시장 조사.docs</div>
                    <div className="loc">협업툴 시장조사...</div>
                    <div className="owner">안수빈</div>
                    <div className="size">85.0KB</div>
                    <div className="date">2022.11.24 20:34</div>
                    <div className="icon">
                        <img src={arrow}/>
                    </div>
                </div>
                <div className="file">
                    <div className="name">협업툴 시장 조사.docs</div>
                    <div className="loc">협업툴 시장조사...</div>
                    <div className="owner">안수빈</div>
                    <div className="size">85.0KB</div>
                    <div className="date">2022.11.24 20:34</div>
                    <div className="icon">
                        <img src={arrow}/>
                    </div>
                </div>
                <div className="file">
                    <div className="name">협업툴 시장 조사.docs</div>
                    <div className="loc">협업툴 시장조사...</div>
                    <div className="owner">안수빈</div>
                    <div className="size">85.0KB</div>
                    <div className="date">2022.11.24 20:34</div>
                    <div className="icon">
                        <img src={arrow}/>
                    </div>
                </div>
                <div className="file">
                    <div className="name">협업툴 시장 조사.docs</div>
                    <div className="loc">협업툴 시장조사...</div>
                    <div className="owner">안수빈</div>
                    <div className="size">85.0KB</div>
                    <div className="date">2022.11.24 20:34</div>
                    <div className="icon">
                        <img src={arrow}/>
                    </div>
                </div>
                <div className="file">
                    <div className="name">협업툴 시장 조사.docs</div>
                    <div className="loc">협업툴 시장조사...</div>
                    <div className="owner">안수빈</div>
                    <div className="size">85.0KB</div>
                    <div className="date">2022.11.24 20:34</div>
                    <div className="icon">
                        <img src={arrow}/>
                    </div>
                </div>
            </div>
        </ListBox>
    );
}

export default FileList;
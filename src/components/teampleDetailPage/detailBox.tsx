import styled from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import vector from '../images/Vector.png';
import more from '../images/Group 419.png';
import finBtn from '../images/Group 435.png';
import addFile from '../images/Frame 295.png';
import download from '../images/DownloadSimple.png';
import trash from '../images/Trash.png';
import ellipse from '../images/Ellipse 1.png';
import send from '../images/send.png';
import axios from 'axios';
import { detailInfo } from 'interfaces';
import S3 from 'react-aws-s3-typescript';
import { config } from 'config';

const DetailContainer = styled.div`
  width: 1000px;
  height: 1008px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;

  .headerBtns {
    display: flex;
    justify-content: space-between;
    z-index: 1000;
  }

  .back {
    width: 32px;
    height: 32px;
    margin-top: 28px;
  }

  .more {
    margin-top: 33px;
    width: 5px;
    height: 21px;
    margin-right: 19px;
  }

  .more:hover,
  .back:hover {
    cursor: grab;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .toDoInfoBox {
    width: 100%;
    height: 218px;
    margin-top: 32px;
    margin-bottom: 76px;
  }

  .step {
    display: flex;
  }

  .stepRound {
    width: 51px;
    height: 24px;
    border: 1px solid #487aff;
    border-radius: 20px;
    display: flex;
  }

  .stepText {
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: #487aff;
    margin: auto;
  }

  .stepName {
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #487aff;
    margin-left: 8px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .subName {
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
  }

  .taskName {
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
    color: #383838;
  }

  .finBtn {
    width: 136px;
    height: 36px;
    margin-right: 20px;
  }

  .finBtn:hover {
    cursor: grab;
  }

  .subInfo {
    display: flex;
    flex-direction: column;
    margin-top: 37px;
  }

  .manager,
  .date,
  .state {
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #707070;
    margin-bottom: 25px;
  }
  .managerInput {
    margin-left: 52px;
    font-weight: 400;
    font-size: 20px;
  }

  .dateInput {
    margin-left: 67px;
    font-weight: 400;
    font-size: 20px;
  }

  .stateInput {
    margin-left: 32px;
    font-weight: 400;
    font-size: 20px;
  }

  .top {
    margin-bottom: 71px;
  }

  .file {
    display: flex;
    flex-direction: row;
  }

  .fileText {
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: #383838;
    margin-left: 6px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .addFile {
    width: 100px;
    height: 28px;
    margin-left: 24px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .addFile:hover {
    cursor: grab;
  }

  .files {
    margin-top: 20px;
    flex-wrap: nowrap;
    overflow: auto;
    display: flex;
  }

  .fileCard {
    width: 272px;
    height: 92px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #d5dbee;
    margin-right: 28px;
    min-width: 272px;
  }

  .fileName {
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
  }

  .nameText {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #707070;
  }

  .icons {
    margin-left: auto;
    margin-right: 40px;
    width: 20px;
    height: 20px;
    display: flex;
  }

  .download {
    margin-right: 8px;
  }

  .download:hover,
  .trash:hover {
    cursor: grab;
  }

  .fileInfo {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #a7a7a7;
    margin-left: 20px;
    display: flex;
    margin-top: 20px;
  }

  .fileSize {
    margin-left: auto;
    margin-right: 20px;
  }

  .mid {
    margin-bottom: 72px;
  }

  .feedText {
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: #383838;
    margin-left: 6px;
  }

  .addFeed {
    display: flex;
    margin-top: 24px;
  }

  .profileImg {
    width: 48px;
    height: 48px;
    margin-left: 12px;
  }

  .feedInput {
    width: 896px;
    height: 48px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 16px;
    border: 0 solid black;
    border-bottom: 1px solid #d5dbee;
    padding: 0;
  }

  .feedInput:focus {
    outline: none;
  }

  .inputBox {
    position: relative;
  }

  .send {
    position: absolute;
    top: 16px;
    left: 889px;
    border: none;
    background-color: transparent;
    width: 24px;
    height: 24px;
    background-image: url(${send});
  }

  .send:hover {
    cursor: grab;
  }

  .feedbacks {
    display: flex;
    flex-direction: column;
    margin-top: 36px;
  }

  .feedBox {
    width: 972px;
    height: 79px;
    display: flex;
    margin-bottom: 16px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .fullFeed {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .feedInfo {
    display: flex;
    margin-left: 16px;
    width: 100%;
  }

  .feedName {
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #383838;
  }

  .feedDate {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #a7a7a7;
    margin-left: 12px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .plusBtn {
    width: 5px;
    height: 21px;
    margin-left: auto;
    margin-right: 20px;
  }

  .plusBtn:hover {
    cursor: grab;
  }

  .feedContent {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #383838;
    margin-left: 16px;
    margin-top: 12px;
    max-width: 70%;
  }
`;

const DetailBox = () => {
  const testtoken = process.env.REACT_APP_JWTTOKEN;
  const [detail, setDetail] = useState<detailInfo | undefined>();
  const [file, setFile] = useState<File>();
  const [fileLoc, setFileLoc] = useState('');
  const fileInput = useRef<any>();

  const onClick = () => {
    fileInput.current && fileInput.current.click();
  };

  const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      if (e.target.files[0].name.length > 0) {
        uploadFile(e.target.files[0]);
      }
    }
  };

  const uploadFile = async (file: File) => {
    const S3Client = new S3(config);
    await S3Client.uploadFile(file, file.name.replace(/.[a-z]*$/, ''))
      .then((data: any) => {
        setFileLoc(data.location);
        alert('파일 등록이 완료되었습니다.');
        //후에 이 부분 지우고 post만 남겨두면 됨.
      })
      .catch((e: any) => {
        console.log(e);
      });
    // postFile();
  };

  const onReset = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.value = '';
  };
  //동일한 파일도 업로드 할 수 있도록 계속 초기화 시켜주는 부분입니당.

  const postFile = async () => {
    await axios({
      url: `/api/files`,
      baseURL: 'https://www.teampple.site/',
      method: 'post',
      data: {
        fileName: file?.name,
        size: file?.size,
        url: fileLoc,
      },
      params: {
        taskId: 1,
        teamId: 1,
      },
      headers: {
        Authorization: testtoken,
      },
    })
      .then(() => {
        alert('파일 등록이 완료되었습니다.');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getDetail = async () => {
    await axios({
      url: `/api/tasks`,
      baseURL: 'https://www.teampple.site/',
      method: 'get',
      params: {
        taskId: 1,
      },
      headers: {
        Authorization: testtoken,
      },
    })
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {detail && (
        <DetailContainer>
          <div className="headerBtns">
            <div className="back">
              <img src={vector} />
            </div>
            <div className="more">
              <img src={more} />
            </div>
          </div>
          <div className="toDoInfoBox">
            <div className="top">
              <div className="step">
                <div className="stepRound">
                  <span className="stepText">{`${detail.sequenceNum}단계`}</span>
                </div>
                <div className="stepName">{detail.stageName}</div>
              </div>
              <div className="subName">
                <div className="taskName">{detail.taskName}</div>
                <div className="finBtn">
                  <img src={finBtn} />
                </div>
              </div>
              <div className="subInfo">
                <div className="manager">
                  담당자
                  <span className="managerInput">{detail.operators}</span>
                </div>
                <div className="date">
                  기간
                  <span className="dateInput">
                    {`${detail.startDate
                      .replace(/-/g, '.')
                      .replace('T', ' ')
                      .replace(/:[0-9]+$/, '')} - ${detail.dueDate
                      .replace(/-/g, '.')
                      .replace('T', ' ')
                      .replace(/:[0-9]+$/, '')}`}
                  </span>
                  {/* <span className="dateInput">2022.11.22-2022.11.23</span> */}
                </div>
                <div className="state">
                  진행 상태
                  {detail.done ? (
                    <span className="stateInput">완료</span>
                  ) : (
                    <span className="stateInput">미완료</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mid">
            <div className="file">
              <div className="fileText">파일</div>
              <input
                accept="image/*, .docs, .key, .ppt, .pdf"
                style={{ display: 'none' }}
                type="file"
                ref={fileInput}
                multiple={false}
                onChange={onFileUpload}
                onClick={onReset}
              />

              <button
                style={{
                  backgroundImage: `url(${addFile})`,
                  border: 'none',
                  backgroundSize: 'cover',
                }}
                className="addFile"
                onClick={onClick}
              />
            </div>
            {detail.files && (
              <div className="files">
                {detail.files.map((file, index) => (
                  <div className="fileCard" key={index}>
                    <div className="fileName">
                      <div className="nameText">{file.filename}</div>
                      <div className="icons">
                        <img src={download} className="download" />
                        <img src={trash} className="trash" />
                      </div>
                    </div>
                    <div className="fileInfo">
                      <div className="uploadDate">
                        {file.updatedAt
                          .replace(/-/g, '.')
                          .replace('T', ' ')
                          .replace(/:[0-9]+$/, '')}
                      </div>
                      {/* <div className="uploadDate">2022.11.25 12:30</div> */}
                      <div className="fileSize">
                        {Math.round(file.size / 1024)}MB
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="btm">
            <div className="feedText">피드백</div>
            <div className="addFeed">
              <div className="profileImg">
                <img src={ellipse} />
              </div>
              <div className="inputBox">
                <input
                  className="feedInput"
                  placeholder="피드백을 입력해주세요."
                />
                <button className="send"></button>
              </div>
            </div>
            {detail.feedbacks && (
              <div className="feedbacks">
                {detail.feedbacks.map((feedback, index) => (
                  <div className="feedBox" key={index}>
                    <div className="profileImg">
                      <img
                        src={require('../images/profile/' +
                          feedback.adviserImage +
                          '.png')}
                      />
                    </div>
                    <div className="fullFeed">
                      <div className="feedInfo">
                        <div className="feedName">{feedback.adviser}</div>
                        <div className="feedDate">
                          {feedback.createdAt
                            .replace(/-/g, '.')
                            .replace('T', ' ')}
                        </div>
                        <div className="plusBtn">
                          <img src={more} />
                        </div>
                      </div>
                      <div className="feedContent">{feedback.comment}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DetailContainer>
      )}
    </>
  );
};

export default DetailBox;

//피드백 부분 스크롤 필요하면 추가하기~

import styled from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import vector from '../images/Vector.png';
import more from '../images/Group 419.png';
import finBtn from '../images/Group 435.png';
import addFile from '../images/Frame 295.png';
import download from '../images/DownloadSimple.png';
import trash from '../images/Trash.png';
import ellipse from '../images/Ellipse 1.png';
import Send from '../images/send.png';
import axios from 'axios';
import { detailInfo, userInfo } from 'interfaces';
import S3 from 'react-aws-s3-typescript';
import { config } from 'config';
import { useRecoilState } from 'recoil';
import { taskIdState, teamidState } from 'state';
import useDidMountEffect from 'components/hooks/useDidMountEffect';
import { useNavigate } from 'react-router-dom';

const DetailContainer = styled.div`
  width: 52.0833vw;
  height: 93.333vh;
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
    width: 1.667vw;
    height: 2.963vh;
    margin-top: 1.7vh;
  }

  .more {
    margin-top: 3.0556vh;
    width: 0.26042vw;
    height: 1.9444vh;
    margin-right: 0.9896vw;
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
    height: 20.1852vh;
    margin-top: 2.963vh;
    margin-bottom: 7.037vh;
  }

  .step {
    display: flex;
  }

  .stepRound {
    width: 2.65625vw;
    height: 2.222vh;
    border: 1px solid #487aff;
    border-radius: 20px;
    display: flex;
  }

  .stepText {
    font-weight: 500;
    font-size: 0.625vw;
    line-height: 100%;
    color: #487aff;
    margin: auto;
  }

  .stepName {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #487aff;
    margin-left: 0.41667vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .subName {
    display: flex;
    justify-content: space-between;
    margin-top: 2.59259vh;
  }

  .taskName {
    font-weight: 600;
    font-size: 1.45833vw;
    line-height: 100%;
    color: #383838;
  }

  .finBtn {
    width: 7.08333vw;
    height: 3.333vh;
    margin-right: 1.04167vw;
  }

  .finBtn:hover {
    cursor: grab;
  }

  .subInfo {
    display: flex;
    flex-direction: column;
    margin-top: 3.425925vh;
  }

  .manager,
  .date,
  .state {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    margin-bottom: 2.31481vh;
  }
  .managerInput {
    margin-left: 2.70833vw;
    font-weight: 400;
    font-size: 1.041667vw;
  }

  .dateInput {
    margin-left: 3.489583vw;
    font-weight: 400;
    font-size: 1.04167vw;
  }

  .stateInput {
    margin-left: 1.6667vw;
    font-weight: 400;
    font-size: 1.04167vw;
  }

  .top {
    margin-bottom: 6.574074vh;
  }

  .file {
    display: flex;
    flex-direction: row;
  }

  .fileText {
    font-weight: 500;
    font-size: 1.04167vw;
    line-height: 100%;
    color: #383838;
    margin-left: 0.3125vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .addFile {
    width: 5.75vw;
    height: 3.2vh;
    margin-left: 24px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .addFile:hover {
    cursor: grab;
  }

  .files {
    margin-top: 1.85185vh;
    flex-wrap: nowrap;
    overflow: auto;
    display: flex;
  }
  .uploadDate {
    width: 91px;
    height: 12px;
    left: 614px;
    top: 565px;
  }

  .fileCard {
    width: 14.1667vw;
    height: 8.5185vh;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #d5dbee;
    margin-right: 1.45833vw;
    min-width: 14.1667vw;
  }

  .fileName {
    display: flex;
    margin-top: 1.85195vh;
    margin-left: 1.041667vw;
  }

  .nameText {
    font-weight: 500;
    font-size: 0.8333vw;
    line-height: 100%;
    text-align: center;
    color: #707070;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .icons {
    margin-left: auto;
    margin-right: 2.08333vw;
    width: 1.041667vw;
    height: 1.85185vh;
    display: flex;
  }

  .download {
    margin-right: 0.41667vw;
  }

  .download:hover,
  .trash:hover {
    cursor: grab;
  }

  .fileInfo {
    font-weight: 400;
    font-size: 0.625vw;
    line-height: 100%;
    color: #a7a7a7;
    margin-left: 1.041667vw;
    display: flex;
    margin-top: 1.85185vh;
  }

  .fileSize {
    margin-left: auto;
    margin-right: 1.041667vw;
  }

  .mid {
    margin-bottom: 6.6667vh;
  }

  .feedText {
    font-weight: 500;
    font-size: 1.041667vw;
    line-height: 100%;
    color: #383838;
    margin-left: 0.3125vw;
  }

  .addFeed {
    display: flex;
    margin-top: 2.222vh;
  }

  .profileImg {
    width: 2.5vw;
    height: 4.444vh;
    margin-left: 0.625vw;
  }

  .feedInput {
    width: 46.6667vw;
    height: 4.444vh;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0.8333vw;
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
    top: 1.2vh;
    left: 45.7vw;
    border: none;
    background-color: transparent;
    color: #A7A7A7;
    width: 17px;
    height: 17px;
  }

  .send:hover {
    cursor: grab;
  }

  .feedbacks {
    display: flex;
    flex-direction: column;
    margin-top: 3.333vh;
  }

  .feedBox {
    width: 50.625vw;
    height: 7.314814vh;
    display: flex;
    margin-bottom: 1.48148vh;
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
    margin-left: 0.83333vw;
    width: 100%;
  }

  .feedName {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #383838;
  }

  .feedDate {
    font-weight: 500;
    font-size: 0.72917vw;
    line-height: 100%;
    color: #a7a7a7;
    margin-left: 0.625vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .plusBtn {
    width: 0.2604vw;
    height: 1.944vh;
    margin-left: auto;
    margin-right: 1.041667vw;
  }

  .plusBtn:hover {
    cursor: grab;
  }

  .feedContent {
    font-weight: 400;
    font-size: 0.833vw;
    line-height: 100%;
    color: #383838;
    margin-left: 0.8333vw;
    margin-top: 1.111vh;
    max-width: 70%;
  }
`;

const Container = styled.div`
  width: 87.5vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const DetailBox = () => {
  const token = localStorage.getItem('jwt_accessToken');

  const [detail, setDetail] = useState<detailInfo | undefined>();
  const [file, setFile] = useState<File>();
  const [fileLoc, setFileLoc] = useState('');
  const fileInput = useRef<any>();
  const [teamid] = useRecoilState(teamidState);
  const [user, setUser] = useState<userInfo>();
  const [addFeed, setAddFeed] = useState('');
  const [taskId,] = useRecoilState(taskIdState);
  const navigate = useNavigate();

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
      })
      .catch((e: any) => {
        console.log(e);
      });
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
        taskId: taskId,
        teamId: teamid,
      },
      headers: {
        Authorization: token,
      },
    })
      .then(() => {
        alert('파일 등록이 완료되었습니다.');
        location.reload();
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
        taskId: taskId,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res.data)
        setDetail(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getUser = async () => {
    await axios({
      url: '/api/users/userprofiles',
      baseURL: 'https://www.teampple.site/',
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const postFeedback = async () => {
    await axios({
      url: '/api/feedbacks',
      baseURL: 'https://www.teampple.site/',
      method: 'post',
      headers: {
        Authorization: token,
      },
      params: {
        taskId: taskId,
      },
      data: { comment: addFeed },
    })
      .then(() => {
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUser();
    getDetail();
  }, []);

  useDidMountEffect(() => {
    postFile();
  }, [file]);

  const onChangeFeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddFeed(e.target.value);
  };

  return (
    <Container>
      {detail && (
        <DetailContainer>
          <div className="headerBtns">
            <div className="back" onClick={() => navigate(-1)}>
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
                      <div className="fileSize">
                        {(file.size / (1024 * 1024)).toFixed(1)}MB
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
                {user && (
                  <img
                    src={require('../images/profile/' +
                      user.profileImage +
                      '.png')}
                  />
                )}
              </div>
              <div className="inputBox">
                <input
                  className="feedInput"
                  placeholder="피드백을 입력해주세요."
                  value={addFeed}
                  onChange={onChangeFeed}
                />
                <img src={Send} className="send" onClick={postFeedback}></img>
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
    </Container>
  );
};

export default DetailBox;

//피드백 부분 스크롤 필요하면 추가하기~

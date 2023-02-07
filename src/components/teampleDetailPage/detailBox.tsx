import styled from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import vector from '../images/Vector.png';
import more from '../images/Group 419.png';
import startBtn from '../images/Group 435.png';
import finBtn from '../images/Group 437.png';
import download from '../images/DownloadSimple.png';
import trash from '../images/Trash.png';
import deleteBtn from '../images/delete.png';
import ellipse from '../images/Ellipse 1.png';
import Send from '../images/send.png';
import axios from 'axios';
import { detailInfo, userInfo } from 'interfaces';
import S3 from 'react-aws-s3-typescript';
import { config } from 'config';
import { useRecoilState } from 'recoil';
import {
  taskIdState,
  teamidState,
  teampleDetailState,
  detailState,
} from 'state';
import useDidMountEffect from 'components/hooks/useDidMountEffect';
import { useNavigate } from 'react-router-dom';
import MoreTeampleDetail from 'components/popup/MoreTeampleDetail';
import ModifyTask from 'components/popup/ModifyTask';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { baseURL } from 'api/client';

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
    width: 6.3vw;
    height: 3.5vh;
    margin-left: 24px;
    border: 1px solid #d5dbee;
    border-radius: 8px;
    color: #707070;
    font-size: 0.625vw;
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
    margin-right: 2.3vw;
    width: 1.3vw;
    display: flex;
  }

  .download {
    margin-right: 0.41667vw;
    width: 3vw;
    object-fit: cover;
  }

  .trash {
    width: 3vw;
    object-fit: cover;
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
    ::placeholder {
      color: #cccccc;
    }
  }

  .send {
    position: absolute;
    top: 1.2vh;
    left: 45.7vw;
    border: none;
    background-color: transparent;
    color: #a7a7a7;
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
    height: 0.7604vw;
    width: 2.944vh;
    margin-left: auto;
    margin-right: 1.041667vw;
    margin-top: auto;
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

const ModalContainer = styled.div`
  position: absolute;
  top: 40px;
  left: -140px;
  z-index: 1000;
`;

const DetailBox = () => {
  const token = localStorage.getItem('jwt_accessToken');

  const [detail, setDetail] = useRecoilState(detailState);
  const [file, setFile] = useState<File>();
  const [fileLoc, setFileLoc] = useState('');
  const fileInput = useRef<any>();
  const [teamid] = useRecoilState(teamidState);
  const [user, setUser] = useState<userInfo>();
  const [addFeed, setAddFeed] = useState('');
  const [taskId, setTaskId] = useRecoilState(taskIdState);
  const navigate = useNavigate();
  const [smallModal, setSmallModal] = useState(false);
  const [bigModal, setBigModal] = useRecoilState(teampleDetailState);

  const AddFile = () => {
    fileInput.current && fileInput.current.click();
  };

  const showSmallModal = () => {
    setSmallModal(!smallModal);
  };

  const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      if (e.target.files[0].name.length > 0) {
        uploadFile(e.target.files[0]);
      }
    }
  };

  const uploadFile = async (file: File) => {
    const S3Client = new S3(config);
    console.log(S3Client)
    console.log(file)
    await S3Client.uploadFile(file, file && file.name.replace(/.[a-z]*$/, ''))
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
      baseURL: baseURL,
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
      baseURL: baseURL,
      method: 'get',
      params: {
        taskId: taskId,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getUser = async () => {
    await axios({
      url: '/api/users/userprofiles',
      baseURL: baseURL,
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
  //새로고침 시에도 taskId에 맞는 디테일 정보를 가져와야 해서 양쪽에서 모두 get함수를..;;

  const postFeedback = async () => {
    if (addFeed.trim() === '') {
      alert('댓글 내용을 입력해주세요.');
    } else {
      await axios({
        url: '/api/feedbacks',
        baseURL: baseURL,
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
          setAddFeed('');
          location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    getUser();
    getDetail();
  }, []);

  useDidMountEffect(() => {
    postFile();
  }, [fileLoc]);

  const onChangeStatus = async () => {
    await axios({
      url: '/api/tasks/status',
      baseURL: baseURL,
      method: 'post',
      headers: {
        Authorization: token,
      },
      params: { taskId: taskId },
    })
      .then(() => {
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onDeleteFeed = async (feedId: number) => {
    await axios({
      url: '/api/feedbacks',
      baseURL: baseURL,
      method: 'delete',
      headers: {
        Authorization: token,
      },
      params: { feedbackId: feedId },
    })
      .then(() => {
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeFeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddFeed(e.target.value);
  };

  const downloadFile = (url: any, filename: string) => {
    console.log(url);
    fetch(url, { method: 'GET' })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout((_) => {
          window.URL.revokeObjectURL(url);
        }, 60000);
        a.remove();
      })
      .catch((err) => {
        console.error('err: ', err);
      });
  };

  const delTaskAPI = async (fileId: number) => {
    await axios({
      baseURL: baseURL,
      url: 'api/files',
      method: 'delete',
      headers: {
        Authorization: token,
      },
      params: { fileId: fileId },
    })
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const alertDelFile = (e: any) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertFile>
            <div className="alertBody">삭제하시면 복구할 수 없어요.</div>
            <div className="alertTitle">정말 파일을 삭제하시겠어요?</div>
            <div className="alertButtons">
              <button onClick={onClose} className="alertNo">
                취소
              </button>
              <button
                onClick={() => {
                  delTaskAPI(Number(e.target.id));
                }}
                className="alertYes"
              >
                네,삭제할래요.
              </button>
            </div>
          </AlertFile>
        );
      },
    });
  };

  const alertDelFeed = (e: any) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertFeed>
            <div className="alertTitle">피드백을 삭제하시겠어요?</div>
            <div className="alertButtons">
              <button onClick={onClose} className="alertNo">
                취소
              </button>
              <button
                onClick={() => {
                  onDeleteFeed(Number(e.target.id));
                }}
                className="alertYes"
              >
                네,삭제할래요.
              </button>
            </div>
          </AlertFeed>
        );
      },
    });
  };

  return (
    <Container>
      <ModalContainer>
        {bigModal && <ModifyTask setBigModal={setBigModal} />}
      </ModalContainer>
      {detail && (
        <DetailContainer>
          <div className="headerBtns">
            <div className="back" onClick={() => navigate(-1)}>
              <img src={vector} />
            </div>
            <div
              className="more"
              onClick={showSmallModal}
              style={{ position: 'relative' }}
            >
              <img src={more} />
              <ModalContainer>
                {smallModal && <MoreTeampleDetail />}
              </ModalContainer>
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

                <div className="finBtn" onClick={onChangeStatus}>
                  {detail.done ? <img src={startBtn} /> : <img src={finBtn} />}
                </div>
              </div>
              <div className="subInfo">
                <div className="manager">
                  담당자
                  <span className="managerInput">
                    {detail.operators.map((op) => `${op} `)}
                  </span>
                </div>
                <div className="date">
                  기간
                  <span className="dateInput">
                    {`${
                      detail.startDate
                        .replace(/-/g, '.')
                        .replace('T', ' ')
                        .split(' ')[0]
                    } 
                      - ${
                        detail.dueDate
                          .replace(/-/g, '.')
                          .replace('T', ' ')
                          .replace(/:[0-9]+$/, '')
                          .split(' ')[0]
                      }`}
                  </span>
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

              <button className="addFile" onClick={AddFile}>
                + 파일 첨부하기
              </button>
            </div>
            {detail.files && (
              <div className="files">
                {detail.files.map((file, index) => (
                  <div className="fileCard" key={index}>
                    <div className="fileName">
                      <div className="nameText">{file.filename}</div>
                      <div className="icons">
                        <img
                          src={download}
                          className="download"
                          onClick={() => downloadFile(file.url, file.filename)}
                        />
                        <img
                          src={trash}
                          className="trash"
                          id={file.fileId?.toString()}
                          onClick={alertDelFile}
                        />
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
                    src={require('../images/profile/proImageU' +
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
                {detail.feedbacks.map((feedback) => (
                  <div className="feedBox" key={feedback.feedbackId}>
                    <div className="profileImg">
                      <img
                        src={require('../images/profile/proImageU' +
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
                        {feedback.adviser === user?.name ? (
                          <div
                            className="plusBtn"
                            id={feedback.feedbackId?.toString()}
                          >
                            <img
                              src={deleteBtn}
                              onClick={alertDelFeed}
                              id={feedback.feedbackId?.toString()}
                            />
                          </div>
                        ) : null}
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

const AlertFile = styled.div`
  width: 440px;
  height: 168px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  background-color: white;

  .alertButtons {
    position: absolute;
    bottom: 34px;
    right: 34px;
    display: flex;
    justify-content: right;
  }

  .alertBody {
    position: absolute;
    top: 40px;
    font-size: 14px;
    color: #707070;
    font-weight: 400;
  }

  .alertTitle {
    position: absolute;
    font-size: 18px;
    color: #383838;
    font-weight: 600;
    top: 66px;
  }

  .alertYes {
    color: #487aff;
    font-weight: 600;
    font-size: 16px;
  }

  .alertNo {
    color: #a7a7a7;
    font-weight: 600;
    font-size: 16px;
    margin-right: 20px;
  }
`;

const AlertFeed = styled.div`
  width: 440px;
  height: 144px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  background-color: white;

  .alertButtons {
    position: absolute;
    bottom: 34px;
    right: 34px;
    display: flex;
    justify-content: right;
  }

  .alertTitle {
    position: absolute;
    font-size: 18px;
    color: #383838;
    font-weight: 600;
    top: 40px;
  }

  .alertYes {
    color: #487aff;
    font-weight: 600;
    font-size: 16px;
  }

  .alertNo {
    color: #a7a7a7;
    font-weight: 600;
    font-size: 16px;
    margin-right: 20px;
  }
`;

export default DetailBox;

//피드백 부분 스크롤 필요하면 추가하기~

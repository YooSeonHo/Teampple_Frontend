import React, { useEffect, useState, useRef } from 'react';
import vector from '../images/Vector.png';
import more from '../images/Group 419.png';
import startBtn from '../images/Group 435.png';
import finBtn from '../images/Group 879.png';
import download from '../images/DownloadSimple.png';
import trash from '../images/Trash.png';
import deleteBtn from '../images/delete.png';
import Send from '../images/send.png';
import axios from 'axios';
import { userInfo } from 'interfaces/userType';
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
import filesApi from 'api/fileAPI';
import feedbackAPI from 'api/feedbackAPI';
import taskAPI from 'api/taskAPI';
import userAPI from 'api/userAPI';
import * as Style from '../../css/TeampleDetailPage/DetailBoxStyle';

const DetailBox = () => {
  const token = localStorage.getItem('jwt_accessToken');

  const [detail, setDetail] = useRecoilState(detailState);
  const [file, setFile] = useState<File>();
  const [fileLoc, setFileLoc] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);
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
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const onReset = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.value = '';
  };
  //동일한 파일도 업로드 할 수 있도록 계속 초기화 시켜주는 부분입니당.

  const getDetail = async () => {
    taskAPI.get(taskId)
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getUser = async () => {
    userAPI
      .getUserProfile()
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  //새로고침 시에도 taskId에 맞는 디테일 정보를 가져와야 해서 양쪽에서 모두 get함수를..;;

  const postFeedback = async () => {
    feedbackAPI
      .post(taskId, addFeed)
      .then(() => {
        setAddFeed('');
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getDetail();
  }, [taskId]);

  useDidMountEffect(() => {
    filesApi
      .postFile(file?.name, file?.size, fileLoc, taskId, teamid)
      .then(() => {
        alert('파일 등록이 완료되었습니다.');
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  }, [fileLoc]);

  const onChangeStatus = async () => {
    taskAPI
      .toggle(taskId)
      .then(() => {
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onDeleteFeed = async (feedId: number) => {
    feedbackAPI
      .delete(feedId)
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

  const downloadFile = (url: string, filename: string) => {
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

  const delTaskAPI = (fileId: number) => {
    filesApi
      .delFileAPI(fileId)
      .then(() => {
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const alertDelFile = (e: React.MouseEvent<HTMLElement>) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Style.AlertFile>
            <div className="alertBody">삭제하시면 복구할 수 없어요.</div>
            <div className="alertTitle">정말 파일을 삭제하시겠어요?</div>
            <div className="alertButtons">
              <button onClick={onClose} className="alertNo">
                취소
              </button>
              <button
                onClick={() => {
                  delTaskAPI(Number((e.target as HTMLElement).id));
                }}
                className="alertYes"
              >
                네,삭제할래요.
              </button>
            </div>
          </Style.AlertFile>
        );
      },
    });
  };

  const alertDelFeed = (e: React.MouseEvent<HTMLElement>) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Style.AlertFeed>
            <div className="alertTitle">피드백을 삭제하시겠어요?</div>
            <div className="alertButtons">
              <button onClick={onClose} className="alertNo">
                취소
              </button>
              <button
                onClick={() => {
                  onDeleteFeed(Number((e.target as HTMLElement).id));
                }}
                className="alertYes"
              >
                네,삭제할래요.
              </button>
            </div>
          </Style.AlertFeed>
        );
      },
    });
  };

  return (
    <Style.Container>
      <Style.ModalContainer>
        {bigModal && <ModifyTask setBigModal={setBigModal} />}
      </Style.ModalContainer>
      {detail && (
        <Style.DetailContainer>
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
              <Style.ModalContainer>
                {smallModal && <MoreTeampleDetail />}
              </Style.ModalContainer>
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
                  {detail.done ? <img src={finBtn} /> : <img src={startBtn} />}
                </div>
              </div>
              <div className="subInfo">
                <div className="manager">
                  담당자
                  <span className="managerInput">
                    {detail.operators.map((op) => `${op.name} `)}
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
        </Style.DetailContainer>
      )}
    </Style.Container>
  );
};

export default DetailBox;

//피드백 부분 스크롤 필요하면 추가하기~

import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import arrow from '../images/ArrowLineRight2.png';
import axios from 'axios';
import { FileInfo } from 'interfaces';
import { useRecoilState } from 'recoil';
import { IsSearchState, searchFileState, teamidState } from 'state';
import { Link } from 'react-router-dom';

const ListBox = styled.div`
  width: 61.042vw;
  height: 75vh;
  display: flex;
  flex-direction: column;

  .fileHeader {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    display: flex;
    margin-top: 1.85185vh;
    height: 4.8148vh;
  }

  .fileName {
    width: 20.833vw;
  }

  .fileLoc {
    width: 10.4167vw;
  }

  .fileOwner {
    width: 10.4167vw;
  }

  .fileSize {
    width: 5.2083vw;
  }

  .fileDate {
    width: 10.4167vw;
  }

  .fileList {
    display: flex;
    flex-direction: column;
  }
`;

const File = styled.div`
  display: flex;
  width: 61.042vw;
  height: 6.6667vh;

  :hover {
    background-color: #eaf2ff;
    cursor: grab;
  }

  .name {
    width: 19.583vw;
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    max-width: 19.583vw;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1.25vw;
  }

  .loc {
    width: 10.41667vw;
    font-weight: 500;
    font-size: 0.8333vw;
    line-height: 100%;
    color: #a7a7a7;
    max-width: 10.41667vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .owner,
  .date {
    font-weight: 400;
    font-size: 0.8333vw;
    line-height: 100%;
    color: #a7a7a7;
    width: 10.41667vw;
    max-width: 10.41667vw;
    margin-top: auto;
    margin-bottom: auto;
  }

  .size {
    width: 5.2083vw;
    max-width: 5.2083vw;
    font-weight: 400;
    font-size: 0.8333vw;
    line-height: 100%;
    color: #a7a7a7;
    margin-top: auto;
    margin-bottom: auto;
  }

  .icon {
    height: 16px;
    width: 15px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 1.51042vw;
  }

  .icon:hover {
    cursor: grab;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 87.5vw;
`;

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [searchFile, setSearchFile] = useRecoilState(searchFileState);
  const [isSearch, setIsSearch] = useRecoilState(IsSearchState);
  const [teamid] = useRecoilState(teamidState);
  const token = localStorage.getItem('jwt_accessToken');

  useEffect(() => {
    const getFiles = async () => {
      await axios({
        url: `/api/files`,
        baseURL: 'https://www.teampple.site/',
        method: 'get',
        params: {
          teamId: teamid,
        },
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          setFiles(res.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    getFiles();
  }, []);

  return (
    <Container>
      <ListBox>
        <div className="fileHeader">
          <div className="fileName">파일명</div>
          <div className="fileLoc">파일 경로</div>
          <div className="fileOwner">파일 업로더</div>
          <div className="fileSize">크기</div>
          <div className="fileDate">날짜</div>
        </div>
        <div className="fileList">
          {files && isSearch
            ? files
                .filter((file: FileInfo) => {
                  return file.fileName
                    .toLowerCase()
                    .includes(searchFile.toLowerCase());
                })
                .map((file: FileInfo) => {
                  return (
                    <Link
                      to={`/teample-detail/${file.taskId}`}
                      key={file.fileId}
                      style={{ textDecoration: 'none' }}
                    >
                      <File key={file.updatedAt}>
                        <div className="name">{file.fileName}</div>
                        <div className="loc">{file.route}</div>
                        <div className="owner">{file.uploader}</div>
                        <div className="size">
                          {Math.round(file.size / 1024)}MB
                        </div>
                        <div className="date">
                          {file.updatedAt
                            .replace(/-/g, '.')
                            .replace('T', ' ')
                            .replace(/:[0-9]+$/, '')}
                        </div>
                        <div className="icon">
                          <img src={arrow} />
                        </div>
                      </File>
                    </Link>
                  );
                })
            : files &&
              files.map(
                (file: FileInfo) =>
                  file && (
                    <Link
                      to={`/teample-detail/${file.taskId}`}
                      key={file.fileId}
                      style={{ textDecoration: 'none' }}
                    >
                      <File key={file.updatedAt}>
                        <div className="name">{file.fileName}</div>
                        <div className="loc">{file.route}</div>
                        <div className="owner">{file.uploader}</div>
                        <div className="size">
                          {Math.round(file.size / 1024)}MB
                        </div>
                        <div className="date">
                          {file.updatedAt
                            .replace(/-/g, '.')
                            .replace('T', ' ')
                            .replace(/:[0-9]+$/, '')}
                        </div>
                        <div className="icon">
                          <img src={arrow} />
                        </div>
                      </File>
                    </Link>
                  ),
              )}
        </div>
      </ListBox>
    </Container>
  );
};

export default FileList;

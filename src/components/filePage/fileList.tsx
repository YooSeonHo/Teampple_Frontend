import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import arrow from '../images/ArrowLineRight2.png';
import axios from 'axios';
import { FileInfo } from 'interfaces';
import { useRecoilState } from 'recoil';
import { IsSearchState, searchFileState } from 'state';

const ListBox = styled.div`
  width: 1172px;
  height: 810px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  .fileHeader {
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    color: #707070;
    display: flex;
    margin-top: 20px;
    height: 52px;
  }

  .fileName {
    width: 400px;
  }

  .fileLoc {
    width: 200px;
  }

  .fileOwner {
    width: 200px;
  }

  .fileSize {
    width: 100px;
  }

  .fileDate {
    width: 200px;
  }

  .fileList {
    display: flex;
    flex-direction: column;
  }
`;

const File = styled.div`
  display: flex;
  width: 1172px;
  height: 72px;

  :hover {
    background-color: #eaf2ff;
    cursor: grab;
  }

  .name {
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

  .loc {
    width: 200px;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #a7a7a7;
    max-width: 200px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .owner,
  .date {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #a7a7a7;
    width: 200px;
    max-width: 200px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .size {
    width: 100px;
    max-width: 100px;
    font-weight: 400;
    font-size: 16px;
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
    margin-right: 29px;
  }

  .icon:hover {
    cursor: grab;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [searchFile, setSearchFile] = useRecoilState(searchFileState);
  const [isSearch, setIsSearch] = useRecoilState(IsSearchState);
  const testtoken = process.env.REACT_APP_JWTTOKEN;
  useEffect(() => {
    const getFiles = async () => {
      await axios({
        url: `/api/files`,
        baseURL: 'https://www.teampple.site/',
        method: 'get',
        params: {
          teamId: 1,
        },
        headers : {
          Authorization : testtoken
        }
        //파람스 부분 바꾸면 댐
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
                  <File key={file.updatedAt}>
                    <div className="name">{file.fileName}</div>
                    <div className="loc">{file.url}</div>
                    <div className="owner">{file.uploader}</div>
                    <div className="size">{Math.round(file.size / 1024)}MB</div>
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
                );
              })
          : files &&
            files.map(
              (file: FileInfo) =>
                file && (
                  <File key={file.updatedAt}>
                    <div className="name">{file.fileName}</div>
                    <div className="loc">{file.url}</div>
                    <div className="owner">{file.uploader}</div>
                    <div className="size">{Math.round(file.size / 1024)}MB</div>
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
                ),
            )}
      </div>
    </ListBox>
  );
};

export default FileList;

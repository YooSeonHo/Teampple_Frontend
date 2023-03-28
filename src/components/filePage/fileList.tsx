import React, { useEffect, useState } from 'react';
import arrow from '../images/rightArrow.png';
import axios from 'axios';
import { FileInfo } from 'interfaces/fileType';
import { useRecoilState } from 'recoil';
import {
  IsSearchState,
  searchFileState,
  teamidState,
  taskIdState,
} from 'state';
import { Link } from 'react-router-dom';
import { baseURL } from 'api/client';
import filesApi from 'api/fileAPI';
import * as Style from '../../css/FilePage/FileListStyle';


const FileList = () => {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [searchFile, setSearchFile] = useRecoilState(searchFileState);
  const [isSearch, setIsSearch] = useRecoilState(IsSearchState);
  const [teamid] = useRecoilState(teamidState);
  const token = localStorage.getItem('jwt_accessToken');
  const [taskId, setTaskId] = useRecoilState(taskIdState);

  useEffect(() => {
    filesApi.getFiles(teamid)
    .then((res) => {
      setFiles(res.data.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);

  const getTaskId = (e: React.MouseEvent<HTMLElement>) => {
    setTaskId(Number((e.target as HTMLElement).id));
  };

  return (
    <Style.Container>
      <Style.ListBox>
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
                .filter((filtfile: FileInfo) => {
                  return filtfile.fileName.normalize()
                    .toLowerCase()
                    .includes(searchFile.normalize().toLowerCase());
                })
                .map((file: FileInfo) => (
                  <Link
                    to={`/teample-detail/${file.taskId}`}
                    key={file.fileId}
                    style={{ textDecoration: 'none' }}
                    id={file.taskId.toString()}
                  >
                    <Style.File
                      key={file.fileId}
                      onClick={getTaskId}
                      id={file.taskId.toString()}
                    >
                      <div className="name" id={file.taskId.toString()}>
                        {file.fileName}
                      </div>
                      <div className="loc" id={file.taskId.toString()}>
                        {file.route}
                      </div>
                      <div className="owner" id={file.taskId.toString()}>
                        {file.uploader}
                      </div>
                      <div className="size" id={file.taskId.toString()}>
                        {Math.round(file.size / 1024)}MB
                      </div>
                      <div className="date" id={file.taskId.toString()}>
                        {file.updatedAt
                          .replace(/-/g, '.')
                          .replace('T', ' ')
                          .replace(/:[0-9]+$/, '')}
                      </div>
                      <div className="icon" id={file.taskId.toString()}>
                        <img src={arrow} id={file.taskId.toString()} />
                      </div>
                    </Style.File>
                  </Link>
                ))
            : files.map((file: FileInfo) => (
                <Link
                  to={`/teample-detail/${file.taskId}`}
                  key={file.fileId}
                  style={{ textDecoration: 'none' }}
                  id={file.taskId.toString()}
                >
                  <Style.File
                    key={file.fileId}
                    onClick={getTaskId}
                    id={file.taskId.toString()}
                  >
                    <div className="name" id={file.taskId.toString()}>
                      {file.fileName}
                    </div>
                    <div className="loc" id={file.taskId.toString()}>
                      {file.route}
                    </div>
                    <div className="owner" id={file.taskId.toString()}>
                      {file.uploader}
                    </div>
                    <div className="size" id={file.taskId.toString()}>
                      {(file.size / (1024 * 1024)).toFixed(1)}MB
                    </div>
                    <div className="date" id={file.taskId.toString()}>
                      {file.updatedAt
                        .replace(/-/g, '.')
                        .replace('T', ' ')
                        .replace(/:[0-9]+$/, '')}
                    </div>
                    <div className="icon" id={file.taskId.toString()}>
                      <img src={arrow} id={file.taskId.toString()} />
                    </div>
                  </Style.File>
                </Link>
              ))}
        </div>
      </Style.ListBox>
    </Style.Container>
  );
};

export default FileList;

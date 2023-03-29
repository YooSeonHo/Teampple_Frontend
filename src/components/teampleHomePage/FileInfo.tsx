import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { teamidState } from 'state';
import fileAPI from 'api/fileAPI';
import * as Style from '../../css/TeampleHomePage/FileInfoStyle';

interface IFileMap {
  size: number;
}

const FileInfo = () => {
  const [fileNum, setFileNum] = useState(0);
  const [nowFileSize, setNowFileSize] = useState(0);
  const [remainPercent, setRemainPercent] = useState((nowFileSize / 5) * 100);
  let fsize = 0;
  const [teamid] = useRecoilState(teamidState);

  useEffect(() => {
    fileAPI
      .getFiles(teamid)
      .then((res) => {
        setFileNum(res.data.data.length);
        {
          res.data.data.map((file: IFileMap) => {
            fsize += file.size;
            setNowFileSize(fsize);
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [teamid]);

  return (
    <Style.FileInfoContainer>
      <Link style={{ textDecoration: 'none', color: 'black' }} to="/file">
        <Style.FileInfoBox>
          <Style.Title>공유 파일함</Style.Title>
          <Style.FileNum>
            <span style={{ fontSize: '1.25vw' }}>{fileNum}</span>
            <span style={{ color: '#707070' }}>&nbsp;파일</span>
          </Style.FileNum>
          <Style.FileSize>
            {(nowFileSize / (1024 * 1024)).toFixed(1)}MB/5GB
          </Style.FileSize>
          <Style.BarContainer>
            <ul>
              <li>
                <Style.Bar
                  className="file-progressbar"
                  remainPercent={remainPercent}
                />
              </li>
            </ul>
          </Style.BarContainer>
        </Style.FileInfoBox>
      </Link>
    </Style.FileInfoContainer>
  );
};

export default FileInfo;

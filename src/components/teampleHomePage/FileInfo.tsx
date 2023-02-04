import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { teamidState } from 'state';

interface IFileMap {
  size: number;
}

const FileInfo = () => {
  const [fileNum, setFileNum] = useState(0);
  const [nowFileSize, setNowFileSize] = useState(0);
  const [remainPercent, setRemainPercent] = useState((nowFileSize / 5) * 100);
  const [count, setCount] = useState(0);
  let fsize = 0;
  const [teamid] = useRecoilState(teamidState);
  const token = localStorage.getItem('jwt_accessToken');

  useEffect(() => {
    const getFiles = async () => {
      await axios({
        url: `/api/files`,
        baseURL: 'https://www.teampple.site/',
        method: 'get',
        headers: {
          Authorization: token,
        },
        params: {
          teamId: teamid,
        },
      })
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
    };
    getFiles();
  }, [teamid]);

  return (
    <FileInfoContainer>
      <Link style={{ textDecoration: 'none', color: 'black' }} to="/file">
        <FileInfoBox>
          <Title>공유 파일함</Title>
          <FileNum>
            <span style={{ fontSize: '1.25vw' }}>{fileNum}</span>
            <span style={{ color: '#707070' }}>&nbsp;파일</span>
          </FileNum>
          <FileSize>{(nowFileSize / (1024 * 1024)).toFixed(1)}MB/5GB</FileSize>
          <BarContainer>
            <ul>
              <li>
                <Bar
                  className="file-progressbar"
                  remainPercent={remainPercent}
                />
              </li>
            </ul>
          </BarContainer>
        </FileInfoBox>
      </Link>
    </FileInfoContainer>
  );
};

const FileInfoContainer = styled.div`
  margin-top: 7.592vh;
`;

const FileInfoBox = styled.div`
  width: 19.375vw;
  height: 13.5vh;
  background: #fffce3;
  border-radius: 12px;
  position: relative;
`;

const Title = styled.div`
  font-size: 1.2vw;
  position: absolute;
  top: 2.2222vh;
  left: 1.25vw;
`;

const FileNum = styled.div`
  position: absolute;
  top: 2.2222vh;
  left: 15.1vw;
  font-size: 1.2vw;
`;

const FileSize = styled.div`
  color: #707070;
  position: absolute;
  top: 8.1041vh;
  right: 1.25vw;
  height: 1.481481vh;
  font-size: 1vw;
`;

const BarContainer = styled.div`
  position: absolute;
  bottom: 22px;
  height: 0.8vh;
  ul {
    position: relative;
    padding: 0;
    list-style: none;
    width: 19.375vw;
  }

  li {
    background-color: #fff8b7;
    height: 1.481481vh;
    border-radius: 46px;
  }
`;

const Bar = styled.span<{ remainPercent: number }>`
  position: absolute;
  border-radius: 46px;
  background-color: #fce44c;
  height: 1.481481vh;
  width: ${(props) => props.remainPercent}%;
  -webkit-animation: file-progressbar 2s ease-out;
  animation: file-progressbar 2s ease-out;

  @keyframes file-progressbar {
    0% {
      width: 0px;
    }

    100% {
      width: ${(props) => props.remainPercent}%;
    }
  }
`;

export default FileInfo;

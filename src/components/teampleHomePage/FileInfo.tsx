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
  const testtoken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZWFtcHBsZSIsImlhdCI6MTY3NDQ2MzIzNCwic3ViIjoia2FrYW9VMiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NzQ0NjY4MzR9.E2omeLTLlDZ3mcVA7E6FVzq97BXn3Km2H2xwFiC7Cr0';

  useEffect(() => {
    const getFiles = async () => {
      await axios({
        url: `/api/files`,
        baseURL: 'https://www.teampple.site/',
        method: 'get',
        headers: {
          Authorization: testtoken,
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
            <span style={{ fontSize: '24px' }}>{fileNum}</span>
            <span style={{ color: '#707070' }}>&nbsp;파일</span>
          </FileNum>
          <FileSize>{Math.round(nowFileSize / 1024)}MB/5GB</FileSize>
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
  margin-top: 82px;
`;

const FileInfoBox = styled.div`
  width: 372px;
  height: 136px;
  background: #fffce3;
  border-radius: 12px;
  position: relative;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 100%;
  position: absolute;
  top: 24px;
  left: 24px;
`;

const FileNum = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const FileSize = styled.div`
  color: #707070;
  position: absolute;
  top: 90px;
  right: 24px;
  height: 16px;
`;

const BarContainer = styled.div`
  position: absolute;
  top: 106px;
  height: 10px;
  ul {
    position: relative;
    padding: 0;
    list-style: none;
    width: 372px;
  }

  li {
    background-color: #fff8b7;
    height: 16px;
    border-radius: 46px;
  }
`;

const Bar = styled.span<{ remainPercent: number }>`
  position: absolute;
  border-radius: 46px;
  background-color: #fce44c;
  height: 16px;
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

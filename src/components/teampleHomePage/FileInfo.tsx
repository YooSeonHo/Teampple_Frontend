import React, { useState } from 'react';
import styled from 'styled-components';

const FileInfo = () => {
  const [fileNum, setFileNum] = useState(5);
  const [nowFileSize, setNowFileSize] = useState(2);
  const [remainPercent, setRemainPercent] = useState(nowFileSize/8*100);

  return (
    <FileInfoContainer>
      <FileInfoBox>
        <Title>공유 파일함</Title>
        <FileNum>
          <span style={{ fontSize: '24px' }}>{fileNum}</span>
          <span style={{ color: '#707070' }}>&nbsp;파일</span>
        </FileNum>
        <FileSize>{nowFileSize}GB/8GB</FileSize>
        <BarContainer>
          <ul>
            <li>
              <Bar className="file-progressbar" remainPercent={remainPercent} />
            </li>
          </ul>
        </BarContainer>
      </FileInfoBox>
    </FileInfoContainer>
  );
};

const FileInfoContainer = styled.div`
  margin-top : 82px;
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
  top: 98px;
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

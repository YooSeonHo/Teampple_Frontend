import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFileInfo = () => {
  return (
    <FileInfoContainer>
      <Link style={{ textDecoration: 'none', color: 'black' }} to="/file">
        <FileInfoBox>
          <Title>공유 파일함</Title>
          <FileNum>
            <span style={{ fontSize: '24px' }}>0</span>
            <span style={{ color: '#707070' }}>&nbsp;파일</span>
          </FileNum>
          <FileSize>0MB/5GB</FileSize>
          <BarContainer>
            <ul>
              <li>
                <Bar />
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

const Bar = styled.span`
  position: absolute;
  border-radius: 46px;
  background-color: #fce44c;
  height: 16px;
  width: 0%;
`;

export default NotFileInfo;

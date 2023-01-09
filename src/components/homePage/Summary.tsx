import React from 'react';
import styled from 'styled-components';

const Summary = () => {
  return (
    <div>
      <div className="playground">
        <BarContainer>
          <ul>
            <li>
              <Bar className="css-progressbar" />
            </li>
          </ul>
        </BarContainer>
      </div>
    </div>
  );
};

const BarContainer = styled.div`
  ul {
    position: relative;
    padding: 0;
    list-style: none;
    width: 888px;
  }
  li {
    background-color: #ececec;
    height: 16px;
    border-radius: 46px;
  }
`;

const Bar = styled.span`
  position: absolute;
  border-radius: 10px;
  background-color: #487aff;
  height: 20px;

  width: 80%;
  -webkit-animation: css-progressbar 2s ease-out;
  animation: css-progressbar 2s ease-out;
  &::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: '🥹';
    width: 40px;
    height: 40px;
    position: absolute;
    top: -10px;
    right: -10px;
    border: 1.5px solid #487aff;
    border-radius: 54px;
  }

  @keyframes css-progressbar {
    0% {
      width: 0px;
    }
    100% {
      width: 80%;
    }
  }
`;

export default Summary;
import React from 'react';
import styled from 'styled-components';

const StartBtn = () => {
  return (
    <div>
      <Btn>
        <Text>팀쁠 시작하기</Text>
      </Btn>
    </div>
  );
};

const Btn = styled.button`
  width: 372px;
  height: 54px;
  background-color: #487aff;
  border-radius: 8px;
`;

const Text = styled.span`
  font-size: 20px;
  line-height: 100%;
  color: #ffffff; ;
`;

export default StartBtn;

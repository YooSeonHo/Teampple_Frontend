import React from 'react';
import styled from 'styled-components';

const InfoInput = () => {
  return (
    <div>
      <InputContainer>
        <InputBox>
          <PlaceHolder>이름</PlaceHolder>
          <Input />
        </InputBox>
        <InputBox>
          <PlaceHolder>학교</PlaceHolder>
          <Input />
        </InputBox>
        <InputBox>
          <PlaceHolder>학과</PlaceHolder>
          <Input />
        </InputBox>
      </InputContainer>
    </div>
  );
};

const InputBox = styled.div`
  width: 372px;
  height: 54px;
  background-color: #ffffff;
  border-radius: 8px;
  font-size: 20px;
  line-height: 100%;
  color: #383838;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const InputContainer = styled.div`
`;
const PlaceHolder = styled.span`
  margin-right: 24px;
  color: #707070;
  font-size: 20px;
`;


const Input = styled.input`
  border: none;
  font-size: 20px;
  width: 270px;
`;

export default InfoInput;

import React, { useState } from 'react';
import styled from 'styled-components';

const InfoInput = () => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [depart, setDepart] = useState('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  };
  const onChangeDepart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepart(e.target.value);
  };

  return (
    <div>
      <InputContainer>
        <InputBox>
          <PlaceHolder>이름</PlaceHolder>
          <Input onChange={onChangeName} />
        </InputBox>
        <InputBox>
          <PlaceHolder>학교</PlaceHolder>
          <Input onChange={onChangeSchool} />
        </InputBox>
        <InputBox>
          <PlaceHolder>학과</PlaceHolder>
          <Input onChange={onChangeDepart} />
        </InputBox>
      </InputContainer>
      <Btn
        disabled={
          name.length !== 0 && school.length !== 0 && depart.length !== 0
            ? false
            : true
        }
      >
        <Text>팀쁠 시작하기</Text>
      </Btn>
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
  margin-bottom: 40px;
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

const Btn = styled.button`
  width: 372px;
  height: 54px;
  background-color: #487aff;
  border-radius: 8px;
  &:disabled {
    background-color: #d4e4ff;
  }
`;

const Text = styled.span`
  font-size: 20px;
  line-height: 100%;
  color: #ffffff; ;
`;

export default InfoInput;

import React, { useState } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

const ModifyStep = () => {
  const [name, setName] = useState('');
  const [aim, setAim] = useState('');
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeAim = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAim(e.target.value);
  };

  return (
    <ModifyTeampleContainer>
      <CloseBtn />
      <Title>단계 편집</Title>
      <InputContainer>
        <StepContainer>
          <Tag>1단계</Tag>
          <InputBox>
            <Input
              value={name}
              onChange={onChangeName}
              maxLength={9}
              placeholder="ex. 자료 조사"
            />
            <TextLength>
              ({name.replace(/<br\s*\/?>/gm, '\n').length}/9)
            </TextLength>
          </InputBox>
          <DelBtn>삭제</DelBtn>
        </StepContainer>
      </InputContainer>
      <AddStepBtn>+ 단계 추가하기</AddStepBtn>
      <SaveButton>저장</SaveButton>
    </ModifyTeampleContainer>
  );
};

const ModifyTeampleContainer = styled.div`
  width: 640px;
  height: 640px;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
`;

const CloseBtn = styled(GrClose)`
  position: absolute;
  top: 48px;
  right: 32px;
  cursor: pointer;
`;

const Title = styled.div`
  position: absolute;
  top: 48px;
  left: 276px;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
`;

const InputContainer = styled.div`
  position: absolute;
  top: 120px;
  width: 640px;
  height: 300px;
  overflow: auto;
`;
const StepContainer = styled.div`
  width: 640px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const Tag = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #707070;
  margin-left: 72px;
`;

const InputBox = styled.div`
  width: 419px;
  height: 50px;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  margin-left: 21px;
  margin-right: 24px;
`;

const Input = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  width: 370px;
  height: 50px;
  border: none;
  background-color: transparent;
  color: #707070;
  margin-left: 16px;
`;

const TextLength = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #c0c0c0;
`;

const DelBtn = styled.div``;

const AddStepBtn = styled.div`
  position: absolute;
  left: 259px;
  top: 464px;
  font-weight: 600;
  font-size: 18px;
  color: #487aff;
`;

const SaveButton = styled.button`
  position: absolute;
  width: 576px;
  height: 56px;
  left: 32px;
  top: 552px;
  background: #487aff;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
`;

export default ModifyStep;

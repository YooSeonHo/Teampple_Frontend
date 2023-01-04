import React, { useState } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { AiFillCalendar,AiOutlineLine } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
// installation
// npm install react-datepicker

// 언어 한글 설정
// npm install @types/react-datepicker --save-dev

const ModifyTeample = () => {
  const today = new window.Date();
  const [pickedDate, setPickedDate] = useState<Date>(today);
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
      <Title>팀플 수정</Title>
      <InputContainer>
        <NameContainer>
          <Tag1>이름</Tag1>
          <Input1 value={name} onChange={onChangeName} maxLength={12} />
          <TextLength1>
            ({name.replace(/<br\s*\/?>/gm, '\n').length}/12)
          </TextLength1>
        </NameContainer>
        <AimContainer>
          <Tag2>목표</Tag2>
          <Input2 value={aim} onChange={onChangeAim} maxLength={12} />
          <TextLength2>
            ({aim.replace(/<br\s*\/?>/gm, '\n').length}/12)
          </TextLength2>
        </AimContainer>
        <DateContainer>
          <Tag3>일정</Tag3>
          <DateBox1>
            <AiFillCalendar />
            <StyledDatePicker
              locale={ko} //한글
              dateFormat="yyyy-MM-dd"
              selected={pickedDate}
              closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
              onChange={(date: Date) => setPickedDate(date)}
            />
          </DateBox1>
          <Dash />
          <DateBox2>
            <AiFillCalendar />
            <StyledDatePicker
              locale={ko} //한글
              dateFormat="yyyy-MM-dd"
              selected={pickedDate}
              closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
              onChange={(date: Date) => setPickedDate(date)}
            />
          </DateBox2>
        </DateContainer>
      </InputContainer>
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
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  position: absolute;
  top: 48px;
  left: 276px;
`;

const InputContainer = styled.div``;
const NameContainer = styled.div``;
const AimContainer = styled.div``;
const DateContainer = styled.div``;

const Tag1 = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #707070;
  position: absolute;
  top: 136px;
  left: 32px;
`;

const Tag2 = styled(Tag1)`
  top: 216px;
`;

const Tag3 = styled(Tag1)`
  top: 296px;
`;

const Input1 = styled.input`
  width: 515px;
  height: 48px;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 16px;
  position: absolute;
  top: 120px;
  left: 93px;
  color: #707070;
`;

const Input2 = styled(Input1)`
  top: 200px;
`;

const DateBox1 = styled.div`
  width: 240px;
  height: 48px;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 16px;
  position: absolute;
  top: 280px;
  left: 93px;
  &:hover {
    cursor: pointer;
  }
`;

const DateBox2 = styled(DateBox1)`
  left: 365px;
`;

const Dash = styled(AiOutlineLine)`
  position: absolute;
  width: 16px;
  height: 0px;
  left: 341px;
  top: 304px;
  border: 0.6px solid #383838;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 122px;
  height: 48px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 20px;
  background-color: transparent;
  color: #707070;
  position: absolute;
  top: -48px;
  left: 5px;
`;

const TextLength1 = styled.span`
  position: absolute;
  top: 138px;
  right: 48px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #c0c0c0;
`;

const TextLength2 = styled(TextLength1)`
  top: 218px;
`;

const SaveButton = styled.button`
  position: absolute;
  width: 552px;
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

export default ModifyTeample;

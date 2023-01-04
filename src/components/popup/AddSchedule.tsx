import React, { useState } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { AiFillCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
// installation
// npm install react-datepicker

// 언어 한글 설정
// npm install @types/react-datepicker --save-dev

const AddSchedule = () => {
  const today = new window.Date();
  const [pickedDate, setPickedDate] = useState<Date>(today);

  return (
    <AddScheduleContainer>
      <CloseBtn />
      <Title>일정 추가</Title>
      <InputContainer>
        <NameContainer>
          <Tag1>이름</Tag1>
          <Input />
        </NameContainer>
        <DateContainer>
          <Tag2>일정</Tag2>
          <DateBox>
            <AiFillCalendar />
            <StyledDatePicker
              locale={ko} //한글
              dateFormat="yyyy-MM-dd"
              selected={pickedDate}
              closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
              onChange={(date: Date) => setPickedDate(date)}
            />
          </DateBox>
          <Time placeholder="18 : 00" />
        </DateContainer>
      </InputContainer>
      <SaveButton>저장</SaveButton>
    </AddScheduleContainer>
  );
};

const AddScheduleContainer = styled.div`
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
const DateContainer = styled.div``;

const Tag1 = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #707070;
  /* padding: 30px; */
  position: absolute;
  top: 136px;
  left: 32px;
`;

const Tag2 = styled(Tag1)`
  top: 216px;
`;

const Input = styled.input`
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

const Time = styled(Input)`
  position: absolute;
  width: 80px;
  height: 48px;
  left: 227px;
  top: 200px;
`;

const DateBox = styled.div`
  width: 130px;
  height: 48px;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 16px;
  position: absolute;
  top: 200px;
  left: 93px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 122px;
  height: 48px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 16px;
  background-color: transparent;
  color: #707070;
  position: absolute;
  top: -48px;
  left: 5px;
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

export default AddSchedule;

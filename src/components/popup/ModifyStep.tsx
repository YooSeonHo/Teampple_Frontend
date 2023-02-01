import React, { useState } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { AiOutlineLine } from 'react-icons/ai';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const ModifyStep = () => {
  const [name, setName] = useState('');
  const today = new window.Date();
  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date>(today);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <ModifyTeampleContainer>
      <CloseBtn />
      <Title>단계 편집</Title>
      <InputContainer>
        <StepContainer>
          <NameContainer>
            <TagContainer>
              <Tag>1단계</Tag>
              {/* <SubTag>(필수)</SubTag> */}
            </TagContainer>
            <InputBox>
              <Input value={name} onChange={onChangeName} maxLength={9} />
              <TextLength>
                ({name.replace(/<br\s*\/?>/gm, '\n').length}/9)
              </TextLength>
            </InputBox>
          </NameContainer>
          <DateContainer>
            <DateBox1>
              <StyledDatePicker
                locale={ko} //한글
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                onChange={(date: Date) => setStartDate(date)}
              />
              <IoCalendarNumberOutline
                style={{ width: '24px', height: '24px', color: '#a7a7a7' }}
              />
            </DateBox1>
            <Dash />
            <DateBox2>
              <StyledDatePicker
                locale={ko} //한글
                dateFormat="yyyy.MM.dd"
                selected={endDate}
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                onChange={(date: Date) => setEndDate(date)}
              />
              <IoCalendarNumberOutline
                style={{ width: '24px', height: '24px', color: '#a7a7a7' }}
              />
            </DateBox2>
            <DelBtn>삭제</DelBtn>
          </DateContainer>
        </StepContainer>
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
  height: 390px;
  overflow: auto;
`;
const StepContainer = styled.div`
  width: 640px;
  height: 110px;
  margin-bottom: 32px;
`;

const NameContainer = styled.div`
  width: 640px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const TagContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 80px;
  margin-left: 23px;
  text-align: center;
`;

const Tag = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #707070;
`;

const InputBox = styled.div`
  width: 468px;
  height: 50px;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  margin-left: 21px;
`;

const Input = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  width: 400px;
  height: 48px;
  border: none;
  background-color: transparent;
  color: #707070;
  margin-left: 16px;
  :focus {
    border: solid 1px #487aff;
  }
`;

const TextLength = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #c0c0c0;
  margin-right: 6px;
`;

const DelBtn = styled.div`
  margin-left: 16px;
  margin-top: -60px;
  font-weight: 600;
  font-size: 16px;
  color: #a7a7a7;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 93px;
`;

const DateBox1 = styled.div`
  width: 220px;
  height: 48px;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 16px;
  margin: 0px 6px 0px 0px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const DateBox2 = styled(DateBox1)`
  margin: 0px 0px 0px 6px;
`;

const Dash = styled(AiOutlineLine)`
  width: 16px;
  height: 0px;
  border: 0.6px solid #383838;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 220px;
  height: 48px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 20px;
  background-color: transparent;
  color: #707070;
  position: absolute;
  top: -30px;
  left: -20px;
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { AiOutlineLine } from 'react-icons/ai';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  nameState,
  aimState,
  startDateState,
  endDateState,
} from 'state/AddTeample/atom';
import { AddTeamzIndexState,makeTeampleState } from 'state';
import { Background } from './AddSchedule';
import { ModalProps } from 'interfaces';
import { makeTeampleInfo } from 'interfaces';
import moment from 'moment';

const AddTeample = ({setModal,setNextModal} : ModalProps) => {
  const [startDate, setStartDate] = useRecoilState<Date>(startDateState);
  const [endDate, setEndDate] = useRecoilState<Date>(endDateState);
  const [name, setName] = useRecoilState(nameState);
  const [aim, setAim] = useRecoilState(aimState);
  const [zIndex, setZIndex] = useRecoilState(AddTeamzIndexState);
  const [makeTeample,setMakeTeample] = useRecoilState(makeTeampleState);
  const reset = useResetRecoilState(makeTeampleState);
  const resetName = useResetRecoilState(nameState);
  const resetAim = useResetRecoilState(aimState);
  const resetStart = useResetRecoilState(startDateState);
  const resetDue = useResetRecoilState(endDateState);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeAim = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAim(e.target.value);
  };
  
  const onClickNext = (e: React.MouseEvent<HTMLElement>) => {
    if (name === '') alert('이름을 입력하세요.');
    else if (aim === '') alert('목표를 입력하세요.');
    else {
      setNextModal(true);
      setModal(false);
      setMakeTeample((prev)=>({
        ...prev,
        name : name,
        goal : aim,
        startDate : moment(startDate, 'YYYYMMDD').format('YYYY-MM-DD') + 'T' + '00:00:00',
        dueDate : moment(endDate, 'YYYYMMDD').format('YYYY-MM-DD') + 'T' + '00:00:00',
        // startDate : startDate,
      }));
    }
  };

  const closeModal = () => {
    reset();
    resetAim();
    resetDue();
    resetName();
    resetStart();
    setModal(false);
    setZIndex(997);
  };

  return (
    <Background>
      <ModifyTeampleContainer  style={{ zIndex: zIndex }}>
        <CloseBtn  onClick={closeModal}/>
        <Title>팀플 정보</Title>
        <InputContainer>
          <NameContainer>
            <Tag1>이름</Tag1>
            <Input1
              value={name}
              onChange={onChangeName}
              maxLength={12}
              placeholder="ex. 경영 전략"
              autoFocus
            />
            <TextLength1>
              ({name.replace(/<br\s*\/?>/gm, '\n').length}/12)
            </TextLength1>
          </NameContainer>
          <AimContainer>
            <Tag2>목표</Tag2>
            <Input2
              value={aim}
              onChange={onChangeAim}
              maxLength={12}
              placeholder="ex. 팀플 가이드 서비스 개발"
            />
            <TextLength2>
              ({aim.replace(/<br\s*\/?>/gm, '\n').length}/12)
            </TextLength2>
          </AimContainer>
          <DateContainer>
            <Tag3>일정</Tag3>
            <DateBox1>
              <StyledDatePicker
                locale={ko}
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                closeOnScroll={true}
                onChange={(date: Date) => setStartDate(date)}
              />
              <IoCalendarNumberOutline
                style={{ width: '24px', height: '24px', color: '#a7a7a7' }}
              />
            </DateBox1>
            <Dash />
            <DateBox2>
              <StyledDatePicker
                locale={ko}
                dateFormat="yyyy.MM.dd"
                selected={endDate}
                closeOnScroll={true}
                onChange={(date: Date) => setEndDate(date)}
              />
              <IoCalendarNumberOutline
                style={{ width: '24px', height: '24px', color: '#a7a7a7' }}
              />
            </DateBox2>
          </DateContainer>
        </InputContainer>
        <NextButton onClick={onClickNext}>다음</NextButton>
      </ModifyTeampleContainer>
    </Background>
  );
};

const ModifyTeampleContainer = styled.div`
  width: 640px;
  height: 640px;
  background: #ffffff;
  border-radius: 16px;
  z-index: 999;
  position: fixed;
  top: 220px;
  left: 640px;
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
  display: flex;
  align-items: center;
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
  width: 240px;
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

const NextButton = styled.button`
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

export default AddTeample;

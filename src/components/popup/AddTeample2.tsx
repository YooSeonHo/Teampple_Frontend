import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { AiOutlineLine } from 'react-icons/ai';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useRecoilState } from 'recoil';
import {
  stepState,
  testState,
  nameState,
  aimState,
  startDateState,
  endDateState,
} from 'state/AddTeample/atom';

const AddTeample2 = () => {
  // stepState는 [1단계:{이름1,기간1},{이름2,기간2}, ...] 이런 형식이라 복잡해서 일단 testState으로 테스트만 함
  const [stepTest, setStepTest] = useRecoilState(testState);
  // 하나씩 받아서 하나의 state로 묶어줄 예정?
  const [stepName, setStepName] = useState('');
  const today = new window.Date();
  const [stepStartDate, setStepStartDate] = useState<Date>(today);
  const [stepEndDate, setStepEndDate] = useState<Date>(today);

  const [startDate, setStartDate] = useRecoilState<Date>(startDateState);
  const [endDate, setEndDate] = useRecoilState<Date>(endDateState);
  const [name, setName] = useRecoilState(nameState);
  const [aim, setAim] = useRecoilState(aimState);
  const onChangeStepName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepName(e.target.value);
  };
  const navigate = useNavigate();
  const onClickPrev = (e: React.MouseEvent<HTMLElement>) => {
    navigate('/teample-home/add-teample1');
  };

  const onClickMake = (event: React.MouseEvent<HTMLElement>) => {
    // if (stepName === '') alert('1단계는 필수 항목입니다.');
    // else {
    event.preventDefault();
    console.log(name, aim, startDate, endDate, stepTest);
    alert('팀플 만들기 완료');

    // }
  };

  return (
    <ModifyTeampleContainer>
      <CloseBtn />
      <Title>팀플 단계</Title>
      <Desc>단계를 설정하면 전략적으로 프로젝트를 진행시킬 수 있어요.</Desc>
      <InputContainer>
        <StepContainer>
          <NameContainer>
            <TagContainer>
              <Tag>1단계</Tag>
              {/* <SubTag>(필수)</SubTag> */}
            </TagContainer>
            <InputBox>
              <Input
                value={stepName}
                onChange={onChangeStepName}
                maxLength={9}
                placeholder="ex. 자료 조사"
              />
              <TextLength>
                ({stepName.replace(/<br\s*\/?>/gm, '\n').length}/9)
              </TextLength>
            </InputBox>
          </NameContainer>
          <DateContainer>
            <DateBox1>
              <StyledDatePicker
                locale={ko} //한글
                dateFormat="yyyy.MM.dd"
                selected={stepStartDate}
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                onChange={(date: Date) => setStepStartDate(date)}
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
                selected={stepEndDate}
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                onChange={(date: Date) => setStepEndDate(date)}
              />
              <IoCalendarNumberOutline
                style={{ width: '24px', height: '24px', color: '#a7a7a7' }}
              />
            </DateBox2>
            <DelBtn>삭제</DelBtn>
          </DateContainer>
        </StepContainer>
        <AddStepButton>+ 단계 추가하기</AddStepButton>
      </InputContainer>
      <PrevButton onClick={onClickPrev}>이전</PrevButton>
      <MakeButton onClick={onClickMake}>팀플 만들기</MakeButton>
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

const Desc = styled.div`
  position: absolute;
  width: 328px;
  height: 14px;
  left: 156px;
  top: 84px;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #a7a7a7;
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
  margin-top: 70px;
  margin-left: 23px;
  text-align: center;
`;

const Tag = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #707070;
`;

const SubTag = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #c0c0c0;
  margin-top: 38px;
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

const AddStepButton = styled.button`
  position: absolute;
  left: 42px;
  width: 570px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f4f8ff;
  color: #5785ff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
`;

const MakeButton = styled.button`
  position: absolute;
  width: 277px;
  height: 56px;
  left: 331px;
  top: 552px;
  background: #487aff;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
`;

const PrevButton = styled(MakeButton)`
  position: absolute;
  left: 38px;
  top: 552px;
  background: #ececec;
  border-radius: 12px;
  color: #707070;
`;

export default AddTeample2;

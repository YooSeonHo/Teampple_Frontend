import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import {
  stepState,
  testState,
  nameState,
  aimState,
  startDateState,
  endDateState,
} from 'state/AddTeample/atom';
import AddDiv from './AddTeample/AddDiv'; //단계 추가하기 버튼 클릭시 Add 컴포넌트 추가

const AddTeample2 = () => {
  // stepState는 [1단계:{이름1,기간1},{이름2,기간2}, ...] 이런 형식이라 복잡해서 일단 testState으로 테스트만 함
  // 일단 setState를 sting으로 두고 테스트
  const [stepTest, setStepTest] = useRecoilState(testState);
  // 하나씩 받아서 하나의 state로 묶어줄 예정?
  // const [stepName, setStepName] = useState('');
  // const today = new window.Date();
  // const [stepStartDate, setStepStartDate] = useState<Date>(today);
  // const [stepEndDate, setStepEndDate] = useState<Date>(today);

  const [startDate] = useRecoilState<Date>(startDateState);
  const [endDate] = useRecoilState<Date>(endDateState);
  const [name] = useRecoilState(nameState);
  const [aim] = useRecoilState(aimState);

  const navigate = useNavigate();
  const onClickPrev = (e: React.MouseEvent<HTMLElement>) => {
    navigate('/teample-home/add-teample1');
  };

  const onClickMake = (event: React.MouseEvent<HTMLElement>) => {
    // if (stepName === '') alert('1단계는 필수 항목입니다.');
    // else {
    event.preventDefault();
    console.log()
    console.log(name, aim, startDate, endDate, stepTest);
    alert('팀플 만들기 완료');

    // }
  };

  const [countList, setCountList] = useState([0]);
  const onClickAdd = () => {
    const countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    // countArr.push(counter); // index 사용 X
    countArr[counter] = counter; // index 사용 시
    setCountList(countArr);
    console.log(countArr);
  };

  return (
    <ModifyTeampleContainer>
      <CloseBtn />
      <Title>팀플 단계</Title>
      <Desc>단계를 설정하면 전략적으로 프로젝트를 진행시킬 수 있어요.</Desc>
        <InputContainer>
          {/* 컴포넌트 추가 */}
          <AddDiv countList={countList} setCountList={setCountList} />
          <AddStepButton onClick={onClickAdd}>+ 단계 추가하기</AddStepButton>
        </InputContainer>
        <PrevButton onClick={onClickPrev}>이전</PrevButton>
        {/* <MakeButton onClick={onClickMake}>
          팀플 만들기
        </MakeButton> */}
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

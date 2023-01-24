import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  stepState,
  testState,
  nameState,
  aimState,
  startDateState,
  endDateState,
} from 'state/AddTeample/atom';
import AddDiv from './AddTeample/AddDiv'; //단계 추가하기 버튼 클릭시 Add 컴포넌트 추가
import { Background } from './AddSchedule';
import { ModalProps } from 'interfaces';
import { stageInfo } from 'interfaces';
import { stageState,makeTeampleState } from 'state';
import axios from 'axios';
import moment from 'moment';

const AddTeample2 = ({setModal,setNextModal} : ModalProps) => {
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
  const [stages,setStages] = useRecoilState<stageInfo[]>(stageState);
  const [makeTeample,setMakeTeample] = useRecoilState(makeTeampleState);
  const [temp,setTemp] = useState<any>([]);
  const reset = useResetRecoilState(makeTeampleState);
  const resetName = useResetRecoilState(nameState);
  const resetAim = useResetRecoilState(aimState);
  const resetStart = useResetRecoilState(startDateState);
  const resetDue = useResetRecoilState(endDateState);
  const resetStages = useResetRecoilState(stageState);

  const postTeample = async () => {
    await axios({
      url : '/api/teams',
      baseURL :  'https://www.teampple.site',
      method : 'post',
      headers :{
        Authorization : `${process.env.REACT_APP_JWTTOKEN}`
      },
      data : makeTeample,
    }).then(()=>{
      alert('팀플 생성이 완료되었습니다.');
      setModal(false);
      setNextModal(false);
      location.reload();
    }).catch((e)=>{
      console.log(e);
    })
  }

  const onClickPrev = (e: React.MouseEvent<HTMLElement>) => {
    setModal(true);
    setNextModal(false);
  };
  
    
    
    const onClickMake = async (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();

      setTemp(stages.map((s)=>(
        {...s, 
          startDate : moment(s.startDate, 'YYYYMMDD').format('YYYY-MM-DD') + 'T' + '00:00:00',
          dueDate : moment(s.dueDate, 'YYYYMMDD').format('YYYY-MM-DD') + 'T' + '00:00:00'
        })))

        await postTeample();
      };
      
      useEffect(()=>{
        setMakeTeample((prev)=>({
          ...prev,
          stages : temp
        }))
      },[temp])


  const [countList, setCountList] = useState([0]);

  const onClickAdd = () => {
    const countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    // countArr.push(counter); // index 사용 X
    countArr[counter] = counter; // index 사용 시
    setCountList(countArr);

    const newStage = {
      dueDate : new Date(),
      name : "",
      sequenceNum : stages.length,
      startDate : new Date()
    };

    setStages([...stages,newStage]);
  };

  const closeModal = () => {
    reset();
    resetAim();
    resetDue();
    resetName();
    resetStart();
    resetStages();
    setNextModal(false);
  };

  return (
    <Background>
      <ModifyTeampleContainer>
        <CloseBtn onClick={closeModal}/>
        <Title>팀플 단계</Title>
        <Desc>단계를 설정하면 전략적으로 프로젝트를 진행시킬 수 있어요.</Desc>
          <InputContainer>
            {/* 컴포넌트 추가 */}
            <AddDiv countList={countList} setCountList={setCountList} />
            <AddStepButton onClick={onClickAdd}>+ 단계 추가하기</AddStepButton>
          </InputContainer>
          <PrevButton onClick={onClickPrev}>이전</PrevButton>
          <MakeButton onClick={onClickMake}>
            팀플 만들기
          </MakeButton>
      </ModifyTeampleContainer>
    </Background>
  );
};

const ModifyTeampleContainer = styled.div`
  width: 640px;
  height: 640px;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
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

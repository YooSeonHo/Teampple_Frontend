import React, { useState,useEffect } from 'react';

import styled from 'styled-components';

import { AiOutlineLine } from 'react-icons/ai';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useRecoilState } from 'recoil';
import {
  stepState,
} from 'state/AddTeample/atom';
import { useForm } from 'react-hook-form';
import { stageInfo } from 'interfaces';
import { stageState } from 'state';

const AddDiv = (props: any) => {
  // stepState는 [1단계:{이름1,기간1},{이름2,기간2}, ...] 이런 형식이라 복잡해서 일단 testState으로 테스트만 함
  const [step, setStep] = useRecoilState(stepState);
  const today = new window.Date();
  const [stepStartDate, setStepStartDate] = useState<Date>(today);
  const [stepEndDate, setStepEndDate] = useState<Date>(today);
  const [stages,setStages] = useRecoilState<stageInfo[]>(stageState);

  const onClickDel = (e: any) => { //수정 필요 에러
    e.preventDefault();
    const n = parseInt(e.target.parentElement.id);
    // const counter = countArr.slice(1)[0];
    // console.log(counter)
    // counter -= 1;
    // countArr[counter] = counter; // index 사용 시
    const del = stages.filter((st)=>{
      return st.sequenceNum !== n;
    }).map((st,index)=>(
      {...st, sequenceNum : index}
    ));
    console.log(del);
    setStages(del);
  };


  // enter키 누르면 submit 방지
  document.addEventListener(
    'keydown',
    function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    },
    true,
  );

  const { register, handleSubmit } = useForm();
  const Subb = (data:any) => {
      setStep(data);
      console.log(data);
      console.log(step);
      // console.log(name, aim, startDate, endDate, stepTest);
      alert('팀플 만들기 완료');
  }
  
  // const onClickMake = (event: React.MouseEvent<HTMLElement>) => {
  //   // if (stepName === '') alert('1단계는 필수 항목입니다.');
  //   // else {
  //   event.preventDefault();
  //   // console.log(name, aim, startDate, endDate, stepTest);
  //   alert('팀플 만들기 완료');

  //   // }
  // };

  const onChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    // const temp = stages.filter((s)=>{
    //   return s.sequenceNum === parseInt(e.target.id);
    // }).map((s)=>{
    //   return {...s, name : e.target.value};
    // }
    // )
     const temp = stages.map((s)=> s.sequenceNum === parseInt(e.target.id) ? {...s, name : e.target.value} : s)
     setStages(temp);
  }

  return (
    <AddDivContainer>
      <form onSubmit={handleSubmit(Subb)}>
        <div>
          {stages &&
            stages.map((i: stageInfo) => (
              <StepContainer key={i.sequenceNum} id={i.sequenceNum.toString()}>
                <NameContainer>
                  <TagContainer>
                    <Tag>{i.sequenceNum + 1}단계</Tag>
                    {/* <SubTag>(필수)</SubTag> */}
                  </TagContainer>
                  <InputBox>
                    <Input
                      onChange={onChange}
                      maxLength={9}
                      placeholder="ex. 자료 조사"
                      value={i.name}
                      id={i.sequenceNum.toString()}
                    />
                    <TextLength>
                    ({i.name.replace(/<br\s*\/?>/gm, '\n').length}/9)
                  </TextLength>
                  </InputBox>
                </NameContainer>
                <DateContainer id={i.sequenceNum.toString()}>
                  <DateBox1>
                    <StyledDatePicker
                      locale={ko} //한글
                      dateFormat="yyyy.MM.dd"
                      selected={i.startDate}
                      closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                      onChange={(date: Date) => {
                        const temp = stages.map((s)=> s.sequenceNum === i.sequenceNum ? {...s, startDate : date} : s)
                        setStages(temp);
                      }}
                    />
                    <IoCalendarNumberOutline
                      style={{
                        width: '24px',
                        height: '24px',
                        color: '#a7a7a7',
                      }}
                    />
                  </DateBox1>
                  <Dash />
                  <DateBox2>
                    <StyledDatePicker
                      locale={ko} //한글
                      dateFormat="yyyy.MM.dd"
                      selected={i.dueDate}
                      closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                      onChange={(date: Date) => {
                        const temp = stages.map((s)=> s.sequenceNum === i.sequenceNum ? {...s, dueDate : date} : s)
                        setStages(temp);
                      }}
                    />
                    <IoCalendarNumberOutline
                      style={{
                        width: '24px',
                        height: '24px',
                        color: '#a7a7a7',
                      }}
                    />
                  </DateBox2>
                  <DelBtn name={i.name} onClick={onClickDel}>
                    삭제
                  </DelBtn>
                </DateContainer>
              </StepContainer>
            ))}
        </div>
        {/* <button type="submit">전송</button> */}
        {/* <MakeButton type="submit">
          팀플 만들기
        </MakeButton> */}
      </form>
    </AddDivContainer>
  );
};

const AddDivContainer = styled.div`
position: relative;
overflow : hidden;
`

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

const DelBtn = styled.button`
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

const MakeButton = styled.button`
  width: 277px;
  height: 56px;
  //주의)))) 절대 위치임 매번 바꿔야함 해결방안 모색 중 ...
  //이유: form태그 내부에 button을 위치시켜야하는데 컴포넌트 분리해서 form으로 submit 기능 불가능 ...
  position: fixed;
  top: 550px;
  left: 350px;
  background: #487aff;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
`;

export default AddDiv;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineLine } from 'react-icons/ai';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useRecoilState } from 'recoil';
import { stepState } from 'state/AddTeample/atom';
import { useForm } from 'react-hook-form';
import { stageInfo } from 'interfaces/stageType';
import { stageState, teamidState } from 'state';
import moment from 'moment';
import axios from 'axios';
import { baseURL } from 'api/client';
import stageAPI from 'api/stageAPI';

const ModDiv = (props: any) => {
  const [step, setStep] = useRecoilState(stepState);
  const [stages, setStages] = useRecoilState<stageInfo[]>(stageState);
  const token = localStorage.getItem('jwt_accessToken');
  const [teamid] = useRecoilState(teamidState);

  const getStage = async () => {
    stageAPI.get(teamid)
      .then((response) => {
        setStages(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onClickDel = (e: any) => {
    e.preventDefault();

    if (stages.length <= 1) {
      alert('1단계는 필수입니다.');
    } else {
      const n = parseInt(e.target.parentElement.id);
  
      const del = stages
        .filter((st) => {
          return st.sequenceNum !== n;
        })
        .map((st, index) => ({ ...st, sequenceNum: index + 1 }));
      setStages(del);
    }
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
  const Subb = (data: any) => {
    setStep(data);
    alert('팀플 만들기 완료');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = stages.map((s) =>
      s.sequenceNum === parseInt(e.target.id)
        ? { ...s, name: e.target.value }
        : s,
    );
    setStages(temp);
  };

  useEffect(() => {
    getStage();
  }, []);

  return (
    <AddDivContainer>
      <form onSubmit={handleSubmit(Subb)}>
        <div>
          {stages &&
            stages.map((i: stageInfo) => (
              <StepContainer key={i.sequenceNum} id={i.sequenceNum.toString()}>
                <NameContainer>
                  <TagContainer>
                    <Tag>{i.sequenceNum}단계</Tag>
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
                      selected={new Date(i.startDate)}
                      closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                      popperProps={{ strategy: 'fixed' }}
                      onChange={(date: Date) => {
                        const temp = stages.map((s) =>
                          s.sequenceNum === i.sequenceNum
                            ? { ...s, startDate: date }
                            : s,
                        );
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
                      selected={new Date(i.dueDate)}
                      minDate={new Date(i.startDate)}
                      closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                      popperProps={{ strategy: 'fixed' }}
                      onChange={(date: Date) => {
                        const temp = stages.map((s) =>
                          s.sequenceNum === i.sequenceNum
                            ? { ...s, dueDate: date }
                            : s,
                        );
                        //  {...s, dueDate : moment(date, 'YYYYMMDD').format('YYYY-MM-DD') + 'T' + '00:00:00'} : s)
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
      </form>
    </AddDivContainer>
  );
};

const AddDivContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const StepContainer = styled.div`
  width: 33.333vw;
  height: 10.185185vh;
  margin-bottom: 2.96296vh;
`;

const NameContainer = styled.div`
  width: 33.333vw;
  height: 4.62963vh;
  display: flex;
  align-items: center;
  margin-bottom: 1.111vh;
`;

const TagContainer = styled.div`
  width: 2.60417vw;
  height: 4.62963vh;
  margin-top: 6.4815vh;
  margin-left: 1.19792vw;
  text-align: center;
`;

const Tag = styled.div`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 100%;
  color: #707070;
`;


const InputBox = styled.div`
  width: 24.375vw;
  height: 4.62963vh;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  margin-left: 1.09375vw;
  :focus-within {
    border: solid 1px #487aff;
  }
`;

const Input = styled.input`
  font-weight: 400;
  font-size: 0.8333vw;
  line-height: 100%;
  width: 20.833vw;
  height: 4.444vh;
  border: none;
  background-color: transparent;
  color: #707070;
  margin-left: 0.8333vw;
  ::placeholder {
    color: #cccccc;
  }
`;

const TextLength = styled.span`
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 100%;
  color: #c0c0c0;
  margin-right: 0.3125vw;
`;

const DelBtn = styled.button`
  margin-left: 0.8333vw;
  margin-top: -5.1852vh;
  font-weight: 600;
  font-size: 0.8333vw;
  color: #a7a7a7;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4.84375vw;
`;

const DateBox1 = styled.div`
  width: 11.4583vw;
  height: 4.444vh;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  font-size: 0.833vw;
  line-height: 100%;
  padding: 0.833vw;
  margin: 0px 6px 0px 0px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  :focus-within {
    border: solid 1px #487aff;
  }
`;

const DateBox2 = styled(DateBox1)`
  margin: 0px 0px 0px 6px;
`;

const Dash = styled(AiOutlineLine)`
  width: 0.833vw;
  height: 0px;
  border: 0.6px solid #383838;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 11.4583vw;
  height: 4.444vh;
  border: none;
  font-weight: 400;
  font-size: 0.833vw;
  line-height: 100%;
  padding: 20px;
  background-color: transparent;
  color: #707070;
  position: absolute;
  top: -2.77778vh;
  left: -1.0417vw;
`;

export default ModDiv;

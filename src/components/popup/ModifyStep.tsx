import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { AiOutlineLine } from 'react-icons/ai';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import ModDiv from './ModTeample/ModDiv';
import { stageInfo } from 'interfaces';
import { useRecoilState } from 'recoil';
import {
  stageState,
  makeTeampleState,
  teamidState,
  modTeampleState,
} from 'state';
import moment from 'moment';
import useDidMountEffect from 'components/hooks/useDidMountEffect';
import axios from 'axios';

const ModifyStep = ({ setModal }: any) => {
  const token = localStorage.getItem('jwt_accessToken');
  const closeModal = () => {
    setModal(false);
  };

  const [countList, setCountList] = useState([0]);
  const [stages, setStages] = useRecoilState<stageInfo[]>(stageState);
  const [temp, setTemp] = useState<any>([]);
  const [makeTeample, setMakeTeample] = useRecoilState(makeTeampleState);
  const [modTeample, setModTeample] = useRecoilState(modTeampleState);
  const [teamid] = useRecoilState(teamidState);

  const putTeample = async () => {
    await axios({
      url: '/api/stages',
      baseURL: 'https://www.teampple.site',
      method: 'put',
      headers: {
        Authorization: token,
      },
      data: modTeample,
      params: {
        teamId: teamid,
      },
    })
      .then(() => {
        alert('단계 수정이 완료되었습니다.');
        // setModal(false);
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onClickAdd = () => {
    const countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr[counter] = counter; // index 사용 시
    setCountList(countArr);

    const newStage = {
      dueDate: new Date(),
      name: '',
      sequenceNum: stages.length + 1,
      startDate: new Date(),
    };

    setStages([...stages, newStage]);
  };

  const HandlePutStep = () => {
    const TrimCheck: stageInfo[] = stages.filter((stag) => {
      return stag.name.trim() === '';
    });
    if (TrimCheck.length >= 1) {
      TrimCheck.map((tr: stageInfo) =>
        alert(`${tr.sequenceNum}단계를 확인해주세요.`),
      );
    }
    else {
      setTemp(
        stages.map((s) => ({
          ...s,
          startDate:
            moment(s.startDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            '00:00:00',
          dueDate:
            moment(s.dueDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            '00:00:00',
        })),
      );
    }
  }

  useEffect(() => {
    setModTeample(() => ({
      stages: temp,
    }));
  }, [temp]);

  useDidMountEffect(async () => {
    if (modTeample.stages.length !== 0) {
      await putTeample();
    }
  }, [modTeample]);

  return (
    <Background>
      <ModifyTeampleContainer>
        <CloseBtn onClick={closeModal} />
        <Title>단계 편집</Title>
        <InputContainer>
          <ModDiv countList={countList} setCountList={setCountList} />
          <AddStepButton onClick={onClickAdd}>+ 단계 추가하기</AddStepButton>
        </InputContainer>
        <SaveButton onClick={HandlePutStep}>저장</SaveButton>
      </ModifyTeampleContainer>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const ModifyTeampleContainer = styled.div`
  width: 33.33333vw;
  height: 59.259vh;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
  position: fixed;
  top: 20.37037vh;
  left: 33.33333vw;
`;

const CloseBtn = styled(GrClose)`
  position: absolute;
  top: 4.4444vh;
  right: 1.66666vw;
  cursor: pointer;
`;

const Title = styled.div`
  position: absolute;
  top: 4.4444vh;
  left: 14.375vw;
  font-weight: 600;
  font-size: 1.25vw;
  line-height: 100%;
  text-align: center;
`;

const InputContainer = styled.div`
  position: absolute;
  top: 11.11vh;
  width: 33.3333vw;
  height: 36.11vh;
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
  :focus-within {
    border: solid 1px #487aff;
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
  width: 30vw;
  height: 5.185185vh;
  left: 1.66666vw;
  top: 51.1111vh;
  background: #487aff;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 400;
  font-size: 1.041667vw;
  line-height: 100%;
`;

const AddStepButton = styled.button`
  position: absolute;
  left: 2.1875vw;
  width: 29.6875vw;
  height: 5.18519vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f4f8ff;
  color: #5785ff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8333vw;
  line-height: 100%;
`;

export default ModifyStep;

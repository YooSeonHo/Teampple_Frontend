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
import { stageState, makeTeampleState } from 'state';
import axios from 'axios';
import moment from 'moment';
import useDidMountEffect from 'components/hooks/useDidMountEffect';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const AddTeample2 = ({ setModal, setNextModal }: ModalProps) => {
  // stepState는 [1단계:{이름1,기간1},{이름2,기간2}, ...] 이런 형식이라 복잡해서 일단 testState으로 테스트만 함
  // 일단 setState를 sting으로 두고 테스트
  const [stepTest, setStepTest] = useRecoilState(testState);
  // 하나씩 받아서 하나의 state로 묶어줄 예정?
  // const [stepName, setStepName] = useState('');
  // const today = new window.Date();
  // const [stepStartDate, setStepStartDate] = useState<Date>(today);
  // const [stepEndDate, setStepEndDate] = useState<Date>(today);

  const navigate = useNavigate();
  const [startDate] = useRecoilState<Date>(startDateState);
  const [endDate] = useRecoilState<Date>(endDateState);
  const [name] = useRecoilState(nameState);
  const [aim] = useRecoilState(aimState);
  const [stages, setStages] = useRecoilState<stageInfo[]>(stageState);
  const [makeTeample, setMakeTeample] = useRecoilState(makeTeampleState);
  const [temp, setTemp] = useState<any>([]);
  const reset = useResetRecoilState(makeTeampleState);
  const resetName = useResetRecoilState(nameState);
  const resetAim = useResetRecoilState(aimState);
  const resetStart = useResetRecoilState(startDateState);
  const resetDue = useResetRecoilState(endDateState);
  const resetStages = useResetRecoilState(stageState);
  const token = localStorage.getItem('jwt_accessToken');

  const postTeample = async () => {
    await axios({
      url: '/api/teams',
      baseURL: 'https://www.teampple.site',
      method: 'post',
      headers: {
        Authorization: token,
      },
      data: makeTeample,
    })
      .then(() => {
        alertPostTeample();
        setModal(false);
        setNextModal(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const alertPostTeample = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Alert>
            <div className="alertTitle">새로운 팀플이 생성되었어요!</div>
            <div className="alertBody">
              상단 버튼을 클릭해 팀원에게 초대 링크를 공유해보세요
            </div>
            <button
              onClick={() => {
                onClose();
                navigate('/home');
                location.reload();
              }}
              className="close"
            >
              확인
            </button>
          </Alert>
        );
      },
    });
  };

  const onClickPrev = (e: React.MouseEvent<HTMLElement>) => {
    setModal(true);
    setNextModal(false);
  };

  const onClickMake = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const TrimCheck: stageInfo[] = stages.filter((stag) => {
      return stag.name.trim() === '';
    });
    const DateCheck: stageInfo[] = stages.filter((stag) => {
      return stag.startDate > stag.dueDate;
    });

    if (TrimCheck.length >= 1 || DateCheck.length >= 1) {
      if (TrimCheck.length >= 1){
      TrimCheck.map((tr: stageInfo) =>
        alert(`${tr.sequenceNum}단계 제목을 입력해주세요.`),
      );
      }
      if (DateCheck.length >= 1){
        DateCheck.map((da : stageInfo) =>
          alert(`${da.sequenceNum}단계 마감일을 확인해주세요.`)
        )
      }
    } else {
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
  };

  useEffect(() => {
    setMakeTeample((prev) => ({
      ...prev,
      stages: temp,
    }));
  }, [temp]);

  useDidMountEffect(async () => {
    if (makeTeample.stages.length !== 0) {
      await postTeample();
    }
  }, [makeTeample]);

  const [countList, setCountList] = useState([0]);

  const onClickAdd = () => {
    const countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    // countArr.push(counter); // index 사용 X
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
        <CloseBtn onClick={closeModal} />
        <Title>팀플 단계</Title>
        <Desc>단계를 설정하면 전략적으로 프로젝트를 진행시킬 수 있어요.</Desc>
        <InputContainer>
          {/* 컴포넌트 추가 */}
          <AddDiv countList={countList} setCountList={setCountList} />
          <AddStepButton onClick={onClickAdd}>+ 단계 추가하기</AddStepButton>
        </InputContainer>
        <PrevButton onClick={onClickPrev}>이전</PrevButton>
        <MakeButton onClick={onClickMake}>팀플 만들기</MakeButton>
      </ModifyTeampleContainer>
    </Background>
  );
};

const ModifyTeampleContainer = styled.div`
  width: 33.33333vw;
  height: 59.259vh;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
  z-index: 999;
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

const Desc = styled.div`
  position: absolute;
  height: 1.2962vh;
  left: 8.125vw;
  top: 7.7778vh;
  font-size: 0.729vw;
  line-height: 100%;
  text-align: center;
  color: #a7a7a7;
`;

const InputContainer = styled.div`
  position: absolute;
  top: 11.11vh;
  width: 33.3333vw;
  height: 36.11vh;
  overflow: auto;
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

const MakeButton = styled.button`
  position: absolute;
  width: 14.4271vw;
  height: 5.1852vh;
  left: 17.2386vw;
  top: 51.11vh;
  background: #487aff;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 400;
  font-size: 1.041667vw;
  line-height: 100%;
`;

const PrevButton = styled(MakeButton)`
  position: absolute;
  left: 1.9791vw;
  top: 51.11vh;
  background: #ececec;
  border-radius: 12px;
  color: #707070;
`;

const Alert = styled.div`
  width: 440px;
  height: 168px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  .alertBody {
    position: absolute;
    top: 40px;
    font-size: 14px;
    color: #707070;
    font-weight: 400;
  }

  .alertTitle {
    position: absolute;
    font-size: 18px;
    color: #383838;
    font-weight: 600;
    top: 66px;
  }

  .close {
    color: #487aff;
    font-weight: 600;
    font-size: 16px;
    position: absolute;
    bottom: 34px;
  }
`;

export default AddTeample2;

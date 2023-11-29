import React, { useState } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { CiAlarmOn } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useRecoilState } from 'recoil';
import { teamidState } from 'state';
import teamAPI from 'api/teamAPI';
import { ModalProps } from 'interfaces/modalType';

const AddSchedule = ({ setModal }: ModalProps) => {
  const today = new window.Date();
  const [pickedDate, setPickedDate] = useState<Date>(today);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [teamid] = useRecoilState(teamidState);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const onChangeDate = (pickedDate: Date) => {
    setPickedDate(pickedDate);
  };

  const closeModal = () => {
    setModal && setModal(false);
  };

  const postSchedulesAPI = async () => {
    teamAPI
      .postSch(pickedDate, time, name, teamid)
      .then(() => {
        alert('새로운 일정 추가 성공!');
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert('시간 입력 형식에 맞추어 입력하세요.');
      });
  };

  const onClickBtn = () => {
    if (time === '') alert('시간 입력은 필수입니다.');
    if (name === '') alert('일정 이름 입력은 필수입니다.');
    else postSchedulesAPI();
  };

  return (
    <Background>
      <AddScheduleContainer>
        <CloseBtn onClick={closeModal} />
        <Title>일정 추가</Title>
        <InputContainer>
          <NameContainer>
            <Tag1>이름</Tag1>
            <Input
              value={name}
              onChange={onChangeName}
              maxLength={12}
              placeholder="ex. 중간 발표"
            />
            <TextLength>
              ({name.replace(/<br\s*\/?>/gm, '\n').length}/12)
            </TextLength>
          </NameContainer>
          <DateContainer>
            <Tag2>일정</Tag2>
            <DateBox>
              <StyledDatePicker
                locale={ko}
                dateFormat="yyyy.MM.dd"
                selected={pickedDate}
                closeOnScroll={true}
                onChange={onChangeDate}
              />
              <IoCalendarNumberOutline
                style={{
                  width: '1.25vw',
                  height: '2.22222vh',
                  color: '#a7a7a7',
                }}
              />
            </DateBox>
            <Time
              value={time}
              onChange={onChangeTime}
              placeholder="18 : 00"
              maxLength={7}
            />
            <Clock />
          </DateContainer>
        </InputContainer>
        <SaveButton onClick={onClickBtn}>저장</SaveButton>
      </AddScheduleContainer>
    </Background>
  );
};

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const AddScheduleContainer = styled.div`
  width: 33.3333vw;
  height: 59.259vh;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
  z-index: 999;
  position: fixed;
  top: 20.3703vh;
  left: 33.3333vw;
`;

const CloseBtn = styled(GrClose)`
  position: absolute;
  top: 4.4444vh;
  right: 1.66666vw;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.25vw;
  line-height: 100%;
  text-align: center;
  position: absolute;
  top: 4.4444vh;
  left: 14.375vw;
`;

const InputContainer = styled.div``;

const NameContainer = styled.div``;
const DateContainer = styled.div``;

const Tag1 = styled.span`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 100%;
  color: #707070;
  position: absolute;
  top: 12.592593vh;
  left: 1.66666vw;
`;

const Tag2 = styled(Tag1)`
  top: 20vh;
`;

const Input = styled.input`
  width: 26.822817vw;
  height: 4.4444vh;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  line-height: 100%;
  font-size: 0.83333vw;
  padding-left: 0.8333vw;
  padding-right: 0.8333vw;
  padding-top: 1.481481vh;
  padding-bottom: 1.481481vh;
  position: absolute;
  top: 11.11111vh;
  left: 4.84375vw;
  color: #707070;
  ::placeholder {
    color: #cccccc;
  }
  :focus {
    border: solid 1px #487aff;
  }
`;

const Time = styled(Input)`
  position: absolute;
  width: 6.05166vw;
  height: 4.44444vh;
  left: 17.6979vw;
  top: 18.518vh;
  ::placeholder {
    color: #cccccc;
  }
  :focus {
    border: solid 1px #487aff;
  }
`;

const Clock = styled(CiAlarmOn)`
  position: absolute;
  top: 19.62963vh;
  left: 21.864583vw;
  width: 1.25vw;
  height: 2.2222vh;
  color: #a7a7a7;
`;

const DateBox = styled.div`
  width: 12.5vw;
  height: 4.4444vh;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  font-size: 0.83333vw;
  padding-left: 0.8333vw;
  padding-right: 0.8333vw;
  padding-top: 1.481481vh;
  padding-bottom: 1.481481vh;
  line-height: 100%;
  position: absolute;
  top: 18.518519vh;
  left: 4.84375vw;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  :focus-within {
    border: solid 1px #487aff;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 12.5vw;
  height: 4.4444vh;
  border: none;
  font-weight: 400;
  font-size: 0.8333vw;
  line-height: 100%;
  padding-left: 1.041667vw;
  padding-right: 1.041667vw;
  padding-top: 1.851852vh;
  padding-bottom: 1.851852vh;
  background-color: transparent;
  color: #707070;
  position: absolute;
  top: -2.777778vh;
  left: -1.041667vw;
`;

const TextLength = styled.span`
  position: absolute;
  top: 12.77777vh;
  right: 2.5vw;
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 100%;
  color: #c0c0c0;
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

export default AddSchedule;

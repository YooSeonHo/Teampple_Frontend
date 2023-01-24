import React, { useState } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { CiAlarmOn } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useRecoilState } from 'recoil';
import { zIndexState, teamidState } from 'state';
import axios from 'axios';
import moment from 'moment';

const AddSchedule = ({ setModal }: any) => {
  const today = new window.Date();
  const [pickedDate, setPickedDate] = useState<any>(today);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [zIndex, setZIndex] = useRecoilState(zIndexState);
  const [teamid] = useRecoilState(teamidState);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    console.log(e.target.value);
  };

  const onChangeDate = (pickedDate: any) => {
    setPickedDate(pickedDate);
  };

  const closeModal = () => {
    setModal(false);
    setZIndex(997);
  };

  const token = localStorage.getItem('jwt_accessToken');

  const postSchedulesAPI = async () => {
    await axios({
      url: `/api/teams/schedules`,
      baseURL: 'https://www.teampple.site/',
      method: 'post',
      headers: {
        Authorization: token,
      },
      data: {
        dueDate: (
          moment(pickedDate, 'YYYYMMDD').format('YYYY-MM-DD') +
          'T' +
          time +
          ':00'
        ).toString(),
        name: name,
      },
      params: {
        teamId: teamid,
      },
    })
      .then((response) => {
        console.log(response);
        alert('새로운 일정 추가 성공!');
        // modal이어서 navigate 불가능하니까 성공하면 `/teample-home/${teamId}`이 화면 새로고침되게
        window.location.replace('/teample-home/${teamId}');
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
            <Input value={name} onChange={onChangeName} maxLength={12} />
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
                style={{ width: '24px', height: '24px', color: '#a7a7a7' }}
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

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const AddScheduleContainer = styled.div`
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

const Input = styled.input`
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

const Time = styled(Input)`
  position: absolute;
  width: 116px;
  height: 48px;
  left: 263px;
  top: 200px;
`;

const Clock = styled(CiAlarmOn)`
  position: absolute;
  top: 212px;
  left: 343px;
  width: 24px;
  height: 24px;
  color: #a7a7a7;
`;

const DateBox = styled.div`
  width: 158px;
  height: 48px;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 16px;
  position: absolute;
  top: 200px;
  left: 93px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 158px;
  height: 48px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 16px;
  background-color: transparent;
  color: #707070;
  position: absolute;
  top: -30px;
  left: -20px;
`;

const TextLength = styled.span`
  position: absolute;
  top: 138px;
  right: 48px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #c0c0c0;
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

export default AddSchedule;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { AiOutlineLine } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import axios from 'axios';
import moment from 'moment';
import { useRecoilState } from 'recoil';
import { teamidState } from 'state';
import { baseURL } from 'api/client';
import teamAPI from 'api/teamAPI';
import { ModalProps } from 'interfaces/modalType';

const ModifyTeample = ({ setModal1 }: ModalProps) => {
  const today = new window.Date();
  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date>(today);
  const [name, setName] = useState('');
  const [aim, setAim] = useState('');
  const [teamid] = useRecoilState(teamidState);
  const token = localStorage.getItem('jwt_accessToken');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeAim = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAim(e.target.value);
  };

  const closeModal = () => {
    setModal1 && setModal1(false);
  };

  const getTeamInfo = async () => {
    await axios({
      method: 'get',
      baseURL: baseURL,
      url: '/api/teams',
      params: { teamId: teamid },
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      setStartDate(
        new Date(
          moment(res.data.data.startDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            '00:00:00',
        ),
      );
      setEndDate(
        new Date(
          moment(res.data.data.dueDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            '00:00:00',
        ),
      );
      setName(res.data.data.name);
      setAim(res.data.data.goal);
    });
  };

  useEffect(() => {
    getTeamInfo();
  }, []);

  const checkDate = () => {
    if (startDate > endDate) {
      setEndDate(startDate);
    }
  };

  useEffect(() => {
    checkDate();
  }, [startDate, endDate]);

  const postSchedulesAPI = async () => {
    // await axios({
    //   url: `/api/teams`,
    //   baseURL: baseURL,
    //   method: 'put',
    //   headers: {
    //     Authorization: token,
    //   },
    //   data: {
    //     dueDate: (
    //       moment(endDate, 'YYYYMMDD').format('YYYY-MM-DD') +
    //       'T' +
    //       '00:00:00'
    //     ).toString(),
    //     startDate: (
    //       moment(startDate, 'YYYYMMDD').format('YYYY-MM-DD') +
    //       'T' +
    //       '00:00:00'
    //     ).toString(),
    //     name: name,
    //     goal: aim,
    //   },
    //   params: {
    //     teamId: teamid,
    //   },
    // })
    teamAPI
      .put(startDate, endDate, name, aim, teamid)
      .then(() => {
        alert('팀플 수정 성공');
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert('다시 시도하세요.');
      });
  };

  const onClickBtn = () => {
    if (name === '') alert('팀플 이름 입력은 필수입니다.');
    if (aim === '') alert('목표 입력은 필수입니다.');
    else postSchedulesAPI();
  };

  return (
    <Background>
      <ModifyTeampleContainer>
        <CloseBtn onClick={closeModal} />
        <Title>팀플 수정</Title>
        <InputContainer>
          <NameContainer>
            <Tag1>이름</Tag1>
            <Input1 value={name} onChange={onChangeName} maxLength={12} />
            <TextLength1>
              ({name.replace(/<br\s*\/?>/gm, '\n').length}/12)
            </TextLength1>
          </NameContainer>
          <AimContainer>
            <Tag2>목표</Tag2>
            <Input2 value={aim} onChange={onChangeAim} maxLength={12} />
            <TextLength2>
              ({aim.replace(/<br\s*\/?>/gm, '\n').length}/12)
            </TextLength2>
          </AimContainer>
          <DateContainer>
            <Tag3>일정</Tag3>
            <DateBox1>
              <StyledDatePicker
                locale={ko} //한글
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                onChange={(date: Date) => setStartDate(date)}
              />
              <IoCalendarNumberOutline
                style={{
                  width: '1.25vw',
                  height: '2.22222vh',
                  color: '#a7a7a7',
                }}
              />
            </DateBox1>
            <Dash />
            <DateBox2>
              <StyledDatePicker
                locale={ko} //한글
                dateFormat="yyyy.MM.dd"
                selected={endDate}
                minDate={startDate}
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                onChange={(date: Date) => setEndDate(date)}
              />
              <IoCalendarNumberOutline
                style={{
                  width: '1.25vw',
                  height: '2.22222vh',
                  color: '#a7a7a7',
                }}
              />
            </DateBox2>
          </DateContainer>
        </InputContainer>
        <SaveButton onClick={onClickBtn}>저장</SaveButton>
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
  background: rgba(0, 0, 0, 0.6);
`;

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
const AimContainer = styled.div``;
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

const Tag3 = styled(Tag1)`
  top: 27.407407vh;
`;

const Input1 = styled.input`
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
  :focus {
    border: solid 1px #487aff;
  }
`;

const Input2 = styled(Input1)`
  top: 18.518519vh;
`;

const DateBox1 = styled.div`
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
  top: 25.925926vh;
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

const DateBox2 = styled(DateBox1)`
  left: 19.010417vw;
`;

const Dash = styled(AiOutlineLine)`
  position: absolute;
  width: 0.83333vw;
  height: 0vh;
  left: 17.760417vw;
  top: 28.148148vh;
  border: 0.6px solid #383838;
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

const TextLength1 = styled.span`
  position: absolute;
  top: 12.777778vh;
  right: 2.5vw;
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 100%;
  color: #c0c0c0;
`;

const TextLength2 = styled(TextLength1)`
  top: 20.185185vh;
`;

const SaveButton = styled.button`
  position: absolute;
  width: 30vw;
  height: 5.185185vh;
  left: 1.66666vw;
  top: 51.1111vh;
  background: #487aff;
  border-radius: 0.625vw;
  color: #ffffff;
  font-weight: 400;
  font-size: 1.041667vw;
  line-height: 100%;
`;

export default ModifyTeample;

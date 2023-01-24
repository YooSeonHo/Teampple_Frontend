import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { AiOutlineLine } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import prof from '../images/template1.png';
import { useRecoilState } from 'recoil';
import { zIndexState, teamidState } from 'state';
import moment from 'moment';
import axios from 'axios';
//+버튼 만들지 말고 그냥 담당자 리스트에서 체크하면 추가, 체크 없애면 삭제
const AddTask = ({ setModal }: any) => {
  const today = new window.Date();
  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date>(today);
  const [name, setName] = useState('');
  const [zIndex, setZIndex] = useRecoilState(zIndexState);
  const token = localStorage.getItem('jwt_accessToken');
  const [teamid] = useRecoilState(teamidState);
  const [teamMates, setTeamMates] = useState([]);
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const closeModal = () => {
    setModal(false);
    setZIndex(997);
  };

  const postTasksAPI = async () => {
    await axios({
      url: `/api/tasks`,
      baseURL: 'https://www.teampple.site',
      method: 'post',
      headers: {
        Authorization: token,
      },
      data: {
        dueDate: (
          moment(endDate, 'YYYYMMDD').format('YYYY-MM-DD') +
          'T' +
          '00:00:00'
        ).toString(),
        name: name,
        operators: checkedList, // api 고치면 실행될 듯
        startDate: (
          moment(startDate, 'YYYYMMDD').format('YYYY-MM-DD') +
          'T' +
          '00:00:00'
        ).toString(),
      },
      params: { stageId: 1 }, //바꿔야함
    })
      .then((response) => {
        console.log(response);
        alert('새로운 할일 추가 성공!');
        //api 수정되어 param에 teamId 추가되면 주석해제
        // window.location.replace('/teample-home/${teamId}');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getTeamMateAPI = async () => {
    await axios({
      url: `/api/teams/teammates`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      headers: {
        Authorization: token,
      },
      params: { teamId: teamid },
    })
      .then((response) => {
        setTeamMates(response.data.data.teammates);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onClickBtn = () => {
    if (name === '') alert('할일 이름 입력은 필수입니다.');
    else postTasksAPI();
  };

  useEffect(() => {
    getTeamMateAPI();
    console.log(checkedList);
  }, [checkedList]);

  const onCheckedHandle = (checked: boolean, item: string) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };

  const onRemoveHandle = (item: string) => {
    setCheckedList(checkedList.filter((el) => el !== item));
  };

  return (
    <Background>
      <ModifyTeampleContainer>
        <CloseBtn onClick={closeModal} />
        <Title>할일 추가</Title>
        <Tag1>할일</Tag1>
        <Input1
          value={name}
          onChange={onChangeName}
          maxLength={12}
          placeholder="ex. 온라인 회의"
        />
        <TextLength1>
          ({name.replace(/<br\s*\/?>/gm, '\n').length}/12)
        </TextLength1>
        <Tag2>기간</Tag2>
        <DateBox1>
          <StyledDatePicker
            locale={ko} //한글
            dateFormat="yyyy.MM.dd"
            selected={startDate}
            closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
            onChange={(date: Date) => setStartDate(date)}
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
            selected={endDate}
            closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
            onChange={(date: Date) => setEndDate(date)}
          />
          <IoCalendarNumberOutline
            style={{ width: '24px', height: '24px', color: '#a7a7a7' }}
          />
        </DateBox2>
        <Tag3>담당자</Tag3>
        <ManagerContainer>
          {checkedList.map((item) => (
            <Manager key={item}>
              {item}
              <SmallCloseBtn onClick={() => onRemoveHandle(item)}>
                <GrClose />
              </SmallCloseBtn>
            </Manager>
          ))}
        </ManagerContainer>
        <TeamMateContainer>
          <AddTeamMate>담당자 추가</AddTeamMate>
          <TeamMateBox>
            {teamMates.map((teammate: any, index: number) => (
              <TeamMate key={index}>
                <Profile />
                <TextInfo>
                  <Name>{teammate.name}</Name>
                  <School>
                    {teammate.schoolName} {teammate.major}
                  </School>
                </TextInfo>
                <CheckBox
                  type="checkbox"
                  value={teammate.name}
                  onChange={(e) => {
                    onCheckedHandle(e.target.checked, e.target.value);
                  }}
                  checked={checkedList.includes(teammate.name) ? true : false}
                />
              </TeamMate>
            ))}
          </TeamMateBox>
        </TeamMateContainer>
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

const ManagerContainer = styled.div`
  position: absolute;
  width: 515px;
  height: 48px;
  left: 93px;
  top: 280px;
  display: flex;
  flex-direction: row;
  overflow: auto;
`;
const TeamMateContainer = styled.div``;

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

const Tag3 = styled(Tag1)`
  top: 296px;
`;

const Input1 = styled.input`
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

const DateBox1 = styled.div`
  width: 240px;
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

const DateBox2 = styled(DateBox1)`
  left: 365px;
`;

const Dash = styled(AiOutlineLine)`
  position: absolute;
  width: 16px;
  height: 0px;
  left: 341px;
  top: 224px;
  border: 0.6px solid #383838;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 240px;
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

const TextLength1 = styled.span`
  position: absolute;
  top: 138px;
  right: 48px;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: #c0c0c0;
`;

const Manager = styled.div`
  width: 100px;
  height: 48px;
  background: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  margin-right: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddTeamMate = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #c0c0c0;
  position: absolute;
  left: 32px;
  top: 352px;
`;

const TeamMateBox = styled.div`
  position: absolute;
  top: 384px;
  left: 32px;
  width: 576px;
  height: 152px;
  overflow: auto;
`;

const TeamMate = styled.div`
  width: 576px;
  height: 64px;
  padding: 12px 18px;
  display: flex;
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background: #fce44c;
  background-image: url(${prof}); //사용자별 프로필 이미지 들어갈 예정
  background-size: cover;
`;
const TextInfo = styled.div`
  height: 43px;
  width: 170px;
  padding: 0px 16px;
`;
const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
const School = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #a7a7a7;
  margin-top: 4px;
`;
const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  margin-left: 300px;
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

const SmallCloseBtn = styled.button`
  opacity: 0.4;
  margin-left: 14px;
`;

export default AddTask;

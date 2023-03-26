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
import {
  zIndexState,
  teamidState,
  stageIdState,
  AddToDozIndexState,
  taskIdState,
} from 'state';
import moment from 'moment';
import axios from 'axios';
import { detailInfo, StyledProfileImgInfo, ITeamMate } from 'interfaces';
import { baseURL } from 'api/client';

const ModifyTask = ({ setBigModal }: any) => {
  const today = new window.Date();
  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date>(today);
  const [name, setName] = useState('');
  const [zIndex, setZIndex] = useRecoilState(zIndexState);
  const token = localStorage.getItem('jwt_accessToken');
  const [teamid, setTeamid] = useRecoilState(teamidState);
  const [teamMates, setTeamMates] = useState([]);
  const [checkedNameList, setCheckedNameList] = useState<string[]>([]);
  const [checkedIdList, setCheckedIdList] = useState<number[]>([]);
  const [stageId, setStageId] = useRecoilState(stageIdState);
  const [toDoZindex, setToDoZindex] = useRecoilState(AddToDozIndexState);
  const [taskId] = useRecoilState(taskIdState);
  const [user, setUser] = useState<ITeamMate | undefined>();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const closeModal = () => {
    setBigModal(false);
  };

  const getDetail = async () => {
    await axios({
      url: `/api/tasks`,
      baseURL: baseURL,
      method: 'get',
      params: {
        taskId: taskId,
      },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setName(res.data.data.taskName);
        const opList = res.data.data.operators;
        opList.map((op: any) => {
          checkedNameList.push(op.name);
          checkedIdList.push(op.id);
        });
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
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const putTasksAPI = async () => {
    await axios({
      url: `/api/tasks`,
      baseURL: baseURL,
      method: 'put',
      headers: {
        Authorization: token,
      },
      data: {
        dueDate: (
          moment(endDate, 'YYYYMMDDTT').format('YYYY-MM-DD') +
          'T' +
          '00:00:00'
        ).toString(),
        name: name,
        operators: checkedIdList,
        startDate: (
          moment(startDate, 'YYYYMMDD').format('YYYY-MM-DD') +
          'T' +
          '00:00:00'
        ).toString(),
      },
      params: { taskId: taskId },
    })
      .then(() => {
        alert('할일 수정 완료');
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getTeamMateAPI = async () => {
    await axios({
      url: `/api/teams/teammates`,
      baseURL: baseURL,
      method: 'get',
      headers: {
        Authorization: token,
      },
      params: { teamId: teamid },
    })
      .then((response) => {
        setTeamMates(response.data.data.teammateInfoVos);
        setUser(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onClickBtn = () => {
    if (name === '') alert('할일 이름 입력은 필수입니다.');
    else {
      putTasksAPI();
      setZIndex(997);
      setToDoZindex(997);
    }
  };

  useEffect(() => {
    getDetail();
    getTeamMateAPI();
  }, []);

  const onCheckedHandle = (checked: boolean, item: string, id: number) => {
    if (checked) {
      setCheckedNameList([...checkedNameList, item]);
      setCheckedIdList([...checkedIdList, id]);
    } else if (!checked) {
      setCheckedNameList(checkedNameList.filter((el) => el !== item));
      setCheckedIdList(checkedIdList.filter((el) => el !== id));
    }
  };

  const checkDate = () => {
    if (startDate > endDate) {
      setEndDate(startDate);
    }
  };

  useEffect(() => {
    checkDate();
  }, [startDate, endDate]);

  return (
    <Background>
      <ModifyTeampleContainer>
        <CloseBtn onClick={closeModal} />
        <Title>할일 수정</Title>
        <Tag1>할일</Tag1>
        <Input1 value={name} onChange={onChangeName} maxLength={12} />
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
            style={{ width: '1.25vw', height: '2.22222vh', color: '#a7a7a7' }}
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
            style={{ width: '1.25vw', height: '2.22222vh', color: '#a7a7a7' }}
          />
        </DateBox2>
        <Tag3>담당자</Tag3>
        <ManagerContainer>
          {checkedNameList.map((item) => (
            <Manager key={item}>{item}</Manager>
          ))}
        </ManagerContainer>
        <TeamMateContainer>
          <AddTeamMate>담당자 추가</AddTeamMate>
          <TeamMateBox>
            {user && (
              <TeamMate>
                <Profile profileImage={user.image} />
                <TextInfo>
                  <Name>{user.name}</Name>
                  <School>
                    {user.schoolName} {user.major}
                  </School>
                </TextInfo>
                <CheckBox
                  type="checkbox"
                  value={user.name}
                  id={user.teammateId?.toString()}
                  onChange={(e) => {
                    onCheckedHandle(
                      e.target.checked,
                      e.target.value,
                      Number(e.target.id),
                    );
                  }}
                  checked={checkedNameList.includes(user.name) ? true : false}
                />
              </TeamMate>
            )}
            {teamMates.map((teammate: ITeamMate, index: number) => (
              <TeamMate key={index}>
                <Profile profileImage={teammate.image} />
                <TextInfo>
                  <Name>{teammate.name}</Name>
                  <School>
                    {teammate.schoolName} {teammate.major}
                  </School>
                </TextInfo>
                <CheckBox
                  type="checkbox"
                  value={teammate.name}
                  id={teammate.id?.toString()}
                  onChange={(e) => {
                    onCheckedHandle(
                      e.target.checked,
                      e.target.value,
                      Number(e.target.id),
                    );
                  }}
                  checked={
                    checkedNameList.includes(teammate.name) ? true : false
                  }
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
  width: 33.33333vw;
  height: 59.259vh;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
  z-index: 1000;
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

const ManagerContainer = styled.div`
  position: absolute;
  width: 26.8229vw;
  height: 4.44444vh;
  left: 4.84375vw;
  top: 25.925926vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
`;
const TeamMateContainer = styled.div``;

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
  top: 18.925926vh;
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
  top: 21.148148vh;
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

const Manager = styled.div`
  width: 5.208333vw;
  height: 4.4444vh;
  background: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  margin-right: 0.625vw;
  font-weight: 400;
  font-size: 0.83333vw;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddTeamMate = styled.div`
  font-weight: 500;
  font-size: 0.83333vw;
  line-height: 100%;
  color: #c0c0c0;
  position: absolute;
  left: 1.6666vw;
  top: 32.592593vh;
`;

const TeamMateBox = styled.div`
  position: absolute;
  top: 35.5555vh;
  left: 1.6666vw;
  width: 30vw;
  height: 14.074vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

const TeamMate = styled.div`
  width: 30vw;
  height: 5.9259vh;
  padding-top: 1.11111vh;
  padding-bottom: 1.11111vh;
  padding-left: 0.9375vw;
  padding-right: 0.9375vw;
  display: flex;
`;

const Profile = styled.div<StyledProfileImgInfo>`
  width: 2.08333vw;
  height: 3.703704vh;
  border-radius: 16px;
  background: #fce44c;
  background-image: url(${(props) =>
    require('../images/profile/proImageU' + props.profileImage + '.png')});
  background-size: cover;
`;
const TextInfo = styled.div`
  height: 3.981481vh;
  width: 8.854167vw;
  padding-top: 0vh;
  padding-bottom: 0vh;
  padding-left: 0.8333vw;
  padding-right: 0.8333vw;
`;
const Name = styled.div`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 2.037vh;
`;
const School = styled.div`
  font-weight: 400;
  font-size: 0.72916vw;
  line-height: 1.574vh;
  color: #a7a7a7;
  margin-top: 0.37037;
`;
const CheckBox = styled.input`
  width: 1.25vw;
  height: 2.222vh;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  margin-left: 15.625vw;
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

const SmallCloseBtn = styled.button`
  opacity: 0.4;
  margin-left: 0.729167vw;
`;

export default ModifyTask;

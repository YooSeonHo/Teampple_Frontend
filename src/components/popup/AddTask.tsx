import React, { useState, useEffect } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';

import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useRecoilState } from 'recoil';
import {
  zIndexState,
  teamidState,
  stageIdState,
  AddToDozIndexState,
} from 'state';
import axios from 'axios';
import { baseURL } from 'api/client';
import taskAPI from 'api/taskAPI';
import { ModalProps } from 'interfaces/modalType';
import * as Style from '../../css/TeampleHomePage/AddTaskStyle';
import { ITeamMate, ITeamMateAndMe } from 'interfaces/teamType';

const AddTask = ({ setModal }: ModalProps) => {
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
  const [user, setUser] = useState<ITeamMateAndMe | undefined>();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const closeModal = () => {
    setModal && setModal(false);
    setZIndex(997);
    setToDoZindex(997);
  };

  const postTasksAPI = () => {
    taskAPI
      .post(stageId, name, checkedIdList, startDate, endDate)
      .then(() => {
        alert('새로운 할 일 추가 성공!');
        location.reload();
        // window.location.replace('/teample-home/${teamId}');
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
    if (name === '') alert('할 일 이름 입력은 필수입니다.');
    else {
      postTasksAPI();
      setZIndex(997);
      setToDoZindex(997);
    }
  };

  useEffect(() => {
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
    <Style.Background>
      <Style.AddTaskContainer>
        <Style.CloseBtn onClick={closeModal} />
        <Style.Title>할일 추가</Style.Title>
        <Style.Tag1>할일</Style.Tag1>
        <Style.Input1
          value={name}
          onChange={onChangeName}
          maxLength={12}
          placeholder="ex. 온라인 회의"
        />
        <Style.TextLength1>
          ({name.replace(/<br\s*\/?>/gm, '\n').length}/12)
        </Style.TextLength1>
        <Style.Tag2>기간</Style.Tag2>
        <Style.DateBox1>
          <Style.StyledDatePicker
            locale={ko} //한글
            dateFormat="yyyy.MM.dd"
            selected={startDate}
            closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
            onChange={(date: Date) => setStartDate(date)}
          />
          <IoCalendarNumberOutline
            style={{ width: '1.25vw', height: '2.22222vh', color: '#a7a7a7' }}
          />
        </Style.DateBox1>
        <Style.Dash />
        <Style.DateBox2>
          <Style.StyledDatePicker
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
        </Style.DateBox2>
        <Style.Tag3>담당자</Style.Tag3>
        <Style.ManagerContainer>
          {checkedNameList.map((item) => (
            <Style.Manager key={item}>{item}</Style.Manager>
          ))}
        </Style.ManagerContainer>
        <Style.TeamMateContainer>
          <Style.AddTeamMate>담당자 추가</Style.AddTeamMate>
          <Style.TeamMateBox>
            {user && (
              <Style.TeamMate>
                <Style.Profile profileImage={user.image} />
                <Style.TextInfo>
                  <Style.Name>{user.name}</Style.Name>
                  <Style.School>
                    {user.schoolName} {user.major}
                  </Style.School>
                </Style.TextInfo>
                <Style.CheckBox
                  type="checkbox"
                  value={user.name}
                  id={user.teammateId.toString()}
                  onChange={(e) => {
                    onCheckedHandle(
                      e.target.checked,
                      e.target.value,
                      Number(e.target.id),
                    );
                  }}
                  checked={checkedNameList.includes(user.name) ? true : false}
                />
              </Style.TeamMate>
            )}
            {teamMates.map((teammate: ITeamMate, index: number) => (
              <Style.TeamMate key={index}>
                <Style.Profile profileImage={teammate.image} />
                <Style.TextInfo>
                  <Style.Name>{teammate.name}</Style.Name>
                  <Style.School>
                    {teammate.schoolName} {teammate.major}
                  </Style.School>
                </Style.TextInfo>
                <Style.CheckBox
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
              </Style.TeamMate>
            ))}
          </Style.TeamMateBox>
        </Style.TeamMateContainer>
        <Style.SaveButton onClick={onClickBtn}>저장</Style.SaveButton>
      </Style.AddTaskContainer>
    </Style.Background>
  );
};



export default AddTask;

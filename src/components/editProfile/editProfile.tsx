import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import editBtn from '../images/Frame 299.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { profileImgState } from 'state';

const EditBox = styled.div`
  width: 50.625vw;
  height: 63.7vh;
  border: 2px solid #d5dbee;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin-top: 4.074vh;
  margin-left: auto;
  margin-right: auto;

  .profileImg {
    width: 11.458vw;
    height: 20.37vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3.33vh;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  input {
    background-color: transparent;
    border: none;
    flex-wrap: nowrap;
  }

  input:focus {
    outline: none;
  }

  .profileInfo {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.22vh;
  }

  .profileName {
    font-weight: 700;
    font-size: 1.468vw;
    line-height: 100%;
    text-align: center;
    height: 20px;
  }

  .profileEmail {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    text-align: center;
    color: #383838;
    margin-top: 1.85185vh;
    height: 20px;
  }

  .logout {
    font-weight: 500;
    font-size: 0.8333vw;
    line-height: 100%;
    text-align: center;
    color: #487aff;
    margin-top: 1.944vh;
  }

  .logout:hover {
    cursor: grab;
  }

  .schoolInfo {
    margin-top: 5.1852vh;
    display: flex;
    justify-content: center;
  }

  .infoBox {
    width: 19.375vw;
    height: 4.62963vh;
    background-color: rgba(237, 239, 246, 0.5);
    border-radius: 12px;
    display: flex;
    margin: 0px 12px;
    margin-top: 12px;
    :focus-within {
      border: solid 1px #487aff;
    }
  }

  .infoText {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #707070;
    margin-top: auto;
    margin-bottom: auto;
    width: 50px;
    margin-left: 0.8333vw;
  }

  .name,
  .email,
  .school,
  .major,
  .grade {
    font-weight: 500;
    font-size: 0.9375vw;
    line-height: 100%;
    color: #383838;
    margin-top: auto;
    margin-bottom: auto;
  }

  .editBtn {
    width: 5.9375vw;
    height: 3.704vh;
    margin-top: 3.7963vh;
    margin-left: auto;
    margin-right: auto;
  }

  .editBtn:hover {
    cursor: grab;
  }

  .extraText {
    font-weight: 500;
    font-size: 1.042vw;
    line-height: 100%;
    color: #383838;
    margin-top: 8vh;

    .myPlan {
      margin-bottom: 2.5926vh;
    }

    .myPlan:hover,
    .delete:hover {
      cursor: grab;
    }
  }

  .inputContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;
  }
`;

const EditProfile = () => {
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profimg, setProfimg] = useRecoilState(profileImgState);
  const navigate = useNavigate();

  const onSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  };
  const onMajor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value);
  };
  const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const token = localStorage.getItem('jwt_accessToken');

  const getProfile = async () => {
    await axios({
      baseURL: 'https://www.teampple.site/',
      url: 'api/users/userprofiles',
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setName(res.data.data.name);
        setEmail(res.data.data.email);
        setSchool(res.data.data.schoolName);
        setSchool(res.data.data.schoolName);
        setMajor(res.data.data.major);
        setProfimg(res.data.data.profileImage);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const putProfileAPI = async () => {
    await axios({
      url: `api/users/userprofiles`,
      baseURL: 'https://www.teampple.site/',
      method: 'put',
      headers: {
        Authorization: token,
      },
      data: {
        major: major,
        schoolName: school,
        email: email,
        name: name,
      },
    })
      .then((response) => {
        console.log(response);
        alert('프로필 수정이 완료되었습니다.');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const putProfile = () => {
    if (name === '') alert('이름 입력은 필수입니다.');
    else putProfileAPI();
  };

  const postAuthLogoutAPI = async () => {
    await axios({
      url: `/api/auth/logout`,
      baseURL: 'https://www.teampple.site/',
      method: 'post',
      headers: {
        Authorization: token,
      },
    })
      .then(() => {
        localStorage.removeItem('jwt_accessToken');
        localStorage.removeItem('jwt_refreshToken');
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <EditBox>
      <div className="profileImg">
        {profimg && (
          <img
            src={require('../images/profile/proImageU' + profimg + '.png')}
          />
        )}
      </div>
      <div className="profileInfo">
        <div className="profileName">{name}</div>
        <div className="profileEmail">{email}</div>
        <div className="logout" onClick={postAuthLogoutAPI}>
          로그아웃
        </div>
      </div>
      <div className="inputContainer">
        <div className="infoBox">
          <div className="infoText">이름</div>
          <input className="name" value={name} onChange={onName}></input>
        </div>
        <div className="infoBox">
          <div className="infoText">이메일</div>
          <input className="email" value={email} onChange={onEmail}></input>
        </div>
        <div className="infoBox">
          <div className="infoText">학교</div>
          <input className="school" value={school} onChange={onSchool}></input>
        </div>
        <div className="infoBox">
          <div className="infoText">전공</div>
          <input className="major" value={major} onChange={onMajor}></input>
        </div>
      </div>
      <div className="editBtn" onClick={putProfile}>
        <img src={editBtn} />
      </div>
      <div className="extraText">
        <div className="myPlan">나의 구독 플랜</div>
        <div className="delete">탈퇴하기</div>
      </div>
    </EditBox>
  );
};

export default EditProfile;

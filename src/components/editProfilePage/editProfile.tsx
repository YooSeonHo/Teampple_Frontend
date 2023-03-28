import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from 'api/client';
import * as Style from '../../css/EditProfilePage/EditProfileStyle'
import editBtn from '../images/Frame 299.png';
import { useRecoilState } from 'recoil';
import { profileImgState } from 'state';
import prof1 from '../images/profile/proImageU1.png';
import userAPI from 'api/userAPI';
import authAPI from 'api/authAPI';

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

  const getProfile =  () => {
    userAPI.getUserProfile()
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
    userAPI.putUserProfile(major,school,email,name)
      .then(() => {
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
    // await axios({
    //   url: `/api/auth/logout`,
    //   baseURL: baseURL,
    //   method: 'post',
    //   headers: {
    //     Authorization: token,
    //   },
    //   data: {
    //     jwtAccessToken: localStorage.getItem('jwt_accessToken'),
    //     jwtRefreshToken: localStorage.getItem('jwt_refreshToken'),
    //   },
    // })
    authAPI.postLogout()
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
    <>
      <Style.EditBox>
        {profimg ? (
          <img
            className="profileImg"
            src={require('../images/profile/proImageU' + profimg + '.png')}
          />
        ) : (
          <img className="profileImg" src={prof1} />
        )}
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
            <input
              className="school"
              value={school}
              onChange={onSchool}
            ></input>
          </div>
          <div className="infoBox">
            <div className="infoText">전공</div>
            <input className="major" value={major} onChange={onMajor}></input>
          </div>
        </div>
        <div className="editBtn" onClick={putProfile}>
          <img src={editBtn} />
        </div>
      </Style.EditBox>
      <Style.ExtraText>
        <div className="myPlan">나의 구독 플랜</div>
        <div className="delete">탈퇴하기</div>
      </Style.ExtraText>
    </>
  );
};

export default EditProfile;

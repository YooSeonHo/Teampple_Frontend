import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiFillMessage } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { feedbackState, fbListState, isCheckedState } from 'state';
import feedback from '../images/feedback.png';
import axios from 'axios';
import { baseURL } from 'api/client';
import userAPI from 'api/userAPI';

const HomeHeader = () => {
  const token = localStorage.getItem('jwt_accessToken');
  const [fbList, setFbList] = useRecoilState(fbListState);
  const [isCheck, setIsCheck] = useRecoilState(isCheckedState);

  const getFeedbackAPI = () => {
    userAPI.getFeedback()
      .then((response) => {
        setFbList(response.data.data.feedbacks.reverse());
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const countChecked = () => {
    let cnt = 0;
    fbList &&
      fbList.map((fb) => {
        if (!fb.checked) {
          cnt += 1;
        }
      });
    if (cnt > 0) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    setIsCheck(countChecked());
  }, [fbList]);

  useEffect(() => {
    getFeedbackAPI();
  }, []);

  const [isOpen, setIsOpen] = useRecoilState(feedbackState);

  const openFeed = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeHeaderContainer>
      <HomeTitle>홈</HomeTitle>
      <div className="iconBox" onClick={openFeed}>
        {isCheck ? <MsgIcon /> : <img id="feedback" src={feedback} />}
      </div>
    </HomeHeaderContainer>
  );
};

const HomeHeaderContainer = styled.div`
  width: 87.5vw;
  height: 6.6666vh;
  border-bottom: solid;
  border-width: 3px;
  border-color: #edeff6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .iconBox {
    margin-left: auto;
    margin-right: 2.81vw;
    margin-top: 1.3vh;

    #feedback {
      width: 1.8vw;
    }

    img {
      max-width: 100vw;
      max-height: 100vh;
    }
  }
  .iconBox:hover {
    cursor: grab;
  }
`;
const HomeTitle = styled.div`
  position: absolute;
  left: 5.2vw;
  font-weight: 600;
  font-size: 1.25vw;
  line-height: 100%;
`;

const MsgIcon = styled(AiFillMessage)`
  top: 1.3vwh;
  right: 2.81vw;
  color: #487aff;
  font-size: 1.6vw;
  :hover {
    cursor: grab;
  }
`;

export default HomeHeader;

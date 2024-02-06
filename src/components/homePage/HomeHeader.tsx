import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { checkedfbSelector, fbListState, isCheckedState } from 'state';
import feedback from '../images/feedback.png';
import userAPI from 'api/userAPI';
import * as Style from '../../css/HomePage/HomeHeaderStyle';
import { useModal } from 'hooks/useModal';
import Feedbacks from 'components/feedbacks/feedbacks';
import { fbInfo } from 'interfaces/feedbackType';

const HomeHeader = () => {
  const [fbList, setFbList] = useRecoilState(fbListState);
  const checked = useRecoilValue(checkedfbSelector);
  // const fbList = useRecoilValue(fbListSelector);
  const { isOpen, toggleModal } = useModal();

  const getFeedback = async () => {
    try {
      const feedbacks = await userAPI.getFeedback();
      setFbList(feedbacks.data.data.feedbacks.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <Style.HomeHeaderContainer>
      <Style.HomeTitle>홈</Style.HomeTitle>
      <div className="iconBox" onClick={toggleModal}>
        {checked ? <Style.MsgIcon /> : <img id="feedback" src={feedback} />}
      </div>
      {isOpen && <Feedbacks pathname="/home" />}
    </Style.HomeHeaderContainer>
  );
};

export default HomeHeader;

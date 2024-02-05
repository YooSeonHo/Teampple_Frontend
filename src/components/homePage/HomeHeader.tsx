import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fbListState, isCheckedState } from 'state';
import feedback from '../images/feedback.png';
import userAPI from 'api/userAPI';
import * as Style from '../../css/HomePage/HomeHeaderStyle';
import { useModal } from 'hooks/useModal';
import Feedbacks from 'components/feedbacks/feedbacks';

const HomeHeader = () => {
  const fbList = useRecoilValue(fbListState);
  const [isCheck, setIsCheck] = useRecoilState(isCheckedState);
  const { isOpen, toggleModal } = useModal();

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

  return (
    <Style.HomeHeaderContainer>
      <Style.HomeTitle>홈</Style.HomeTitle>
      <div className="iconBox" onClick={toggleModal}>
        {isCheck ? <Style.MsgIcon /> : <img id="feedback" src={feedback} />}
      </div>
      {isOpen && <Feedbacks pathname="/home" />}
    </Style.HomeHeaderContainer>
  );
};

export default HomeHeader;

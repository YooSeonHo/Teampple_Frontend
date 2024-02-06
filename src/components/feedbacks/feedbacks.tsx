import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import * as Style from '../../css/Feedbacks/FeedbackStyle';
import { fbInfo } from 'interfaces/feedbackType';
import { useRecoilState, useRecoilValue } from 'recoil';
import { taskIdState, profileImgState, fbListState } from 'state';

const Feedbacks = ({ pathname }: { pathname: string }) => {
  const fbList = useRecoilValue(fbListState);
  const [taskId, setTaskId] = useRecoilState(taskIdState);
  const navigate = useNavigate();

  const getTaskId = (e: React.MouseEvent<HTMLElement>) => {
    setTaskId(parseInt((e.target as HTMLElement).id));
    navigate(`/teample-detail/${(e.target as HTMLElement).id}`);
  };
  const [profileImg] = useRecoilValue(profileImgState);

  return (
    <Style.FeedBox pathname={pathname}>
      <div className="feedText">피드백</div>
      <div className="feedList">
        {fbList &&
          fbList.map((fb: fbInfo, index: number) => (
            <Style.Feed
              id={fb.taskId.toString()}
              key={index}
              onClick={getTaskId}
              checked={fb.checked}
            >
              <div className="icon" id={fb.taskId.toString()}>
                {profileImg && (
                  <img
                    src={require('../images/profile/proImageU' +
                      profileImg +
                      '.png')}
                    id={fb.taskId.toString()}
                  />
                )}
              </div>
              <div className="feedContent" id={fb.taskId.toString()}>
                [{fb.teamName}]
                <br />
                {fb.taskName}에 적힌 피드백입니다.
              </div>
              <div className="feedAt" id={fb.taskId.toString()}>
                {moment(fb.modifiedAt).format('MM-DD  HH:mm')}
              </div>
            </Style.Feed>
          ))}
      </div>
    </Style.FeedBox>
  );
};

export default Feedbacks;

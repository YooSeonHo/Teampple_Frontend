import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profile1 from '../images/profile/proImageU1.png';
import { StyledFeedInfo } from 'interfaces';
import moment from 'moment';
import { useRecoilState } from 'recoil';
import { fbListState,taskIdState, profileImgState } from 'state';


const FeedBox = styled.div<StyledFeedInfo>`
  border: 1px solid #dedede;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: 12px;
  width: 19.375vw;
  height: 43.6111vh;
  display: flex;
  flex-direction: column;

  left: 0vw;
  right: 0vw;
  position: absolute;
  margin-right: 2.8125vw;
  margin-top: ${(props) =>
    props.pathname === '/home' ? '6.777777vh' : '0.1111111vh'};
  margin-left: auto;
  z-index: 1001;

  .feedText {
    font-weight: 500;
    font-size: 0.729167vw;
    line-height: 1.574074vh;
    color: #383838;
    margin-top: 2.2222vh;
    margin-left: 1.041667vw;
  }

  .feedList {
    display: flex;
    margin-top: 1.111vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Feed = styled.div`
  width: 17.1875vw;
  height: 5.925926vh;
  margin-left: 1.041667vw;
  margin-top: 1vh;
  display: flex;
  border-bottom: 1px solid #cccccc;
  :hover {
    cursor: pointer;
  }
  .icon {
    width: 2.083333vw;
    height: 3.7043704vh;
    margin-right: 0.83333vw;
    margin-bottom: 1vh;
  }

  .feedContent {
    font-weight: 500;
    font-size: 0.4vw;
    line-height: 160%;
    color: #383838;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 13.020833vw;
    max-height: 3.7043704vh;
    white-space: normal;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .feedAt {
    font-size: 0.625vw;
    line-height: 100%;
    color: #a7a7a7;
    margin-top: 1.851852vh;
    margin-left : auto;
    margin-right : 1vw;
    // margin-left: 2.083333vw;
  }
`;

const Feedbacks = ({ pathname }: { pathname: string }) => {
  const [fbList, setFbList] = useRecoilState(fbListState);
  const [taskId, setTaskId] = useRecoilState(taskIdState);

  const getTaskId = (e: any) => {
    setTaskId(e.target.id);
    window.open(`/teample-detail/${e.target.id}`, '_self');
    }
  const [profileImg,setProfileImg] = useRecoilState(profileImgState);


  return (
    <FeedBox pathname={pathname}>
      <div className="feedText">피드백</div>
      <div className="feedList">
        {fbList && fbList.map((fb: any, index: number) => (
          <Feed id={fb.taskId} key={index} onClick={getTaskId}>
            <div className="icon">
               {profileImg && 
                  <img
                    src={require('../images/profile/' +
                      profileImg +
                      '.png')}
                  />}
            </div>
            <div className="feedContent" id={fb.taskId}>
              [{fb.teamName}]
              <br />
              {fb.taskName}에 적힌 피드백입니다.
            </div>
            <div className="feedAt" id={fb.taskId}>
              {moment(fb.modifiedAt).format('MM-DD  HH:mm')}
            </div>
          </Feed>
        ))}
      </div>
    </FeedBox>
  );
};

export default Feedbacks;

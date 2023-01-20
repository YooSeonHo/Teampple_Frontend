import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profile1 from '../images/profile/proImageU1.png';
import { StyledFeedInfo } from 'interfaces';
import axios from 'axios';

const FeedBox = styled.div<StyledFeedInfo>`
  border: 1px solid #dedede;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: 12px;
  width: 372px;
  height: 471px;
  display: flex;
  flex-direction: column;

  left: 0;
  right: 0;
  position: absolute;
  margin-right: 54px;
  margin-top: ${(props) => (props.pathname === '/home' ? '84px' : '12px')};
  margin-left: auto;
  z-index: 1001;

  .feedText {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #383838;
    margin-top: 24px;
    margin-left: 20px;
  }

  .feedList {
    display: flex;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Feed = styled.div`
  width: 330px;
  height: 64px;
  margin-left: 20px;
  display: flex;

  .icon {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    margin-bottom: 12px;
  }

  .feedContent {
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    color: #383838;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 250px;
    max-height: 40px;
    white-space: normal;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .feedAt {
    font-size: 12px;
    line-height: 100%;
    color: #a7a7a7;
  }
`;

const Feedbacks = ({ pathname }: { pathname: string }) => {
  const [fbList, setFbList] = useState([]);
  const testtoken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZWFtcHBsZSIsImlhdCI6MTY3NDIzODQ5NSwic3ViIjoia2FrYW9VMiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NzQyNDIwOTV9.pY40z0oK3XdCKI3ynDDlAuVD8LQn9xVPnaSWP0jLvzA';
  const getFeedbackAPI = async () => {
    await axios({
      url: `/api/users/feedbacks`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      headers: {
        Authorization: testtoken,
      },
    })
      .then((response) => {
        setFbList(response.data.data.feedbacks);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getFeedbackAPI();
  }, []);

  return (
    <FeedBox pathname={pathname}>
      <div className="feedText">피드백</div>
      <div className="feedList">
        {fbList.map((fb: any, index: number) => (
          <Feed key={index}>
            <div className="icon">
              <img src={profile1} />
            </div>
            <div className="feedContent">
              [팀플이름]
              <br />
              {fb.taskName}에 적힌 피드백입니다.
            </div>
            {/* 분단위로 수정해야함 .... */}
            {/* <div className="feedAt">{fb.modifiedAt}</div> */}
          </Feed>
        ))}
      </div>
    </FeedBox>
  );
};

export default Feedbacks;

import styled from 'styled-components';
import { StyledFeedInfo } from 'interfaces/feedbackType';

export const FeedBox = styled.div<StyledFeedInfo>`
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
    props.pathname === '/home' ? '50.777777vh' : '0.1111111vh'};
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

export const Feed = styled.div<StyledFeedInfo>`
  width: 17.1875vw;
  height: 4.925926vh;
  margin-left: 1.041667vw;
  margin-top: 1vh;
  display: flex;
  border-bottom: 1px solid #cccccc;
  opacity: ${(props) => (props.checked ? '0.5' : '1')};

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
    margin-top: 1.5vh;
    margin-left: auto;
    margin-right: 0.2vw;
    width: 4vw;
    // margin-left: 2.083333vw;
  }
`;

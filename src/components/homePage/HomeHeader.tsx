import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiFillMessage } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { feedbackState, fbListState } from 'state';
import Feedbacks from 'components/feedbacks/feedbacks';
import feedback from '../images/feedback.png';
import axios from 'axios';


const HomeHeader = () => {
  const navigation = useNavigate();
  const token = localStorage.getItem('jwt_accessToken');
  const [fbList,setFbList] = useRecoilState(fbListState)
  const onClickMsg = (e: React.MouseEvent<HTMLElement>) => {
    navigation('/feedback');
    console.log(e.target);
  };

  const getFeedbackAPI = async () => {
    await axios({
      url: `/api/users/feedbacks`,
      baseURL: 'https://www.teampple.site',
      method: 'get',
      headers: {
        Authorization: token,
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


  const [isOpen, setIsOpen] = useRecoilState(feedbackState);

  const openFeed = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeHeaderContainer>
      <HomeTitle>홈</HomeTitle>
      <div className="iconBox" onClick={openFeed}>
        {fbList.length === 0?  <MsgIcon/>:<img id="feedback" src={feedback}/>  }
      </div>
    </HomeHeaderContainer>
  );
};

const HomeHeaderContainer = styled.div`
  position: relative;
  width: 87.5vw;
  height: 6.6666vh;
  border-bottom: solid;
  border-width: 3px;
  border-color: #edeff6;
  display : flex;

  .iconBox{
  margin-left: auto;
  margin-right: 2.8125vw;
  
  #feedback {
    width: 1.6666vw;
    height: 2.962vh;
    margin-top: 1.8518vh;
  }
  
  img {
    max-width: 100vw;
    max-height: 100vh;
  }
  
}
  .iconBox:hover{
    cursor: grab;
  }
`;
const HomeTitle = styled.div`
  position: absolute;
  top: 2.2222vh;
  left: 5.20vw;
  font-weight: 600;
  font-size: 1.25vw;
  line-height: 100%;
`;

const MsgIcon = styled(AiFillMessage)`
  position: absolute;
  top: 1.851852vh;
  right: 2.81vw;
  color: #487aff;
  width: 1.67vw;
  height: 2.96293vh;

  :hover{
    cursor : grab;
  }
`;


export default HomeHeader;

import styled from 'styled-components';
import { AiFillMessage } from 'react-icons/ai';

export const HomeHeaderContainer = styled.div`
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
export const HomeTitle = styled.div`
  position: absolute;
  left: 5.2vw;
  font-weight: 600;
  font-size: 1.25vw;
  line-height: 100%;
`;

export const MsgIcon = styled(AiFillMessage)`
  top: 1.3vwh;
  right: 2.81vw;
  color: #487aff;
  font-size: 1.6vw;
  :hover {
    cursor: grab;
  }
`;

import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { AiOutlineLine } from 'react-icons/ai';
import DatePicker from 'react-datepicker';

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.01);
`;

export const AddTaskContainer = styled.div`
  width: 33.33333vw;
  height: 59.259vh;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
  z-index: 999;
  position: fixed;
  top: 20.37037vh;
  left: 33.33333vw;
`;

export const CloseBtn = styled(GrClose)`
  position: absolute;
  top: 4.4444vh;
  right: 1.66666vw;
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.25vw;
  line-height: 100%;
  text-align: center;
  position: absolute;
  top: 4.4444vh;
  left: 14.375vw;
`;

export const ManagerContainer = styled.div`
  position: absolute;
  width: 26.8229vw;
  height: 4.44444vh;
  left: 4.84375vw;
  top: 25.925926vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
`;
export const TeamMateContainer = styled.div``;

export const Tag1 = styled.span`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 100%;
  color: #707070;
  position: absolute;
  top: 12.592593vh;
  left: 1.66666vw;
`;

export const Tag2 = styled(Tag1)`
  top: 20vh;
`;

export const Tag3 = styled(Tag1)`
  top: 27.407407vh;
`;

export const Input1 = styled.input`
  width: 26.822817vw;
  height: 4.4444vh;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  line-height: 100%;
  font-size: 0.83333vw;
  padding-left: 0.8333vw;
  padding-right: 0.8333vw;
  padding-top: 1.481481vh;
  padding-bottom: 1.481481vh;
  position: absolute;
  top: 11.11111vh;
  left: 4.84375vw;
  color: #707070;
  ::placeholder {
    color: #cccccc;
  }
  :focus {
    border: solid 1px #487aff;
  }
`;

export const DateBox1 = styled.div`
  width: 12.5vw;
  height: 4.4444vh;
  border: none;
  background-color: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  font-weight: 400;
  font-size: 0.83333vw;
  padding-left: 0.8333vw;
  padding-right: 0.8333vw;
  padding-top: 1.481481vh;
  padding-bottom: 1.481481vh;
  line-height: 100%;
  position: absolute;
  top: 18.925926vh;
  left: 4.84375vw;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  :focus-within {
    border: solid 1px #487aff;
  }
`;

export const DateBox2 = styled(DateBox1)`
  left: 19.010417vw;
`;

export const Dash = styled(AiOutlineLine)`
  position: absolute;
  width: 0.83333vw;
  height: 0vh;
  left: 17.760417vw;
  top: 21.148148vh;
  border: 0.6px solid #383838;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 12.5vw;
  height: 4.4444vh;
  border: none;
  font-weight: 400;
  font-size: 0.8333vw;
  line-height: 100%;
  padding-left: 1.041667vw;
  padding-right: 1.041667vw;
  padding-top: 1.851852vh;
  padding-bottom: 1.851852vh;
  background-color: transparent;
  color: #707070;
  position: absolute;
  top: -2.777778vh;
  left: -1.041667vw;
`;

export const TextLength1 = styled.span`
  position: absolute;
  top: 12.777778vh;
  right: 2.5vw;
  font-weight: 400;
  font-size: 0.625vw;
  line-height: 100%;
  color: #c0c0c0;
`;

export const Manager = styled.div`
  width: 5.208333vw;
  height: 4.4444vh;
  background: rgba(237, 239, 246, 0.5);
  border-radius: 8px;
  margin-right: 0.625vw;
  font-weight: 400;
  font-size: 0.83333vw;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddTeamMate = styled.div`
  font-weight: 500;
  font-size: 0.83333vw;
  line-height: 100%;
  color: #c0c0c0;
  position: absolute;
  left: 1.6666vw;
  top: 32.592593vh;
`;

export const TeamMateBox = styled.div`
  position: absolute;
  top: 35.5555vh;
  left: 1.6666vw;
  width: 30vw;
  height: 14.074vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TeamMate = styled.div`
  width: 30vw;
  height: 5.9259vh;
  padding-top: 1.11111vh;
  padding-bottom: 1.11111vh;
  padding-left: 0.9375vw;
  padding-right: 0.9375vw;
  display: flex;
`;

export const Profile = styled.div<any>`
  width: 2.08333vw;
  height: 3.703704vh;
  border-radius: 16px;
  background: #fce44c;
  background-size: cover;
  background-image: url(${(props) =>
    require(`../../components/images/profile/proImageU` +
      props.profileImage +
      `.png`)});
`;

export const TextInfo = styled.div`
  height: 3.981481vh;
  width: 8.854167vw;
  padding-top: 0vh;
  padding-bottom: 0vh;
  padding-left: 0.8333vw;
  padding-right: 0.8333vw;
`;
export const Name = styled.div`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 2.037vh;
`;
export const School = styled.div`
  font-weight: 400;
  font-size: 0.72916vw;
  line-height: 1.574vh;
  color: #a7a7a7;
  margin-top: 0.37037;
`;
export const CheckBox = styled.input`
  width: 1.25vw;
  height: 2.222vh;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  margin-left: 15.625vw;
`;

export const SaveButton = styled.button`
  position: absolute;
  width: 30vw;
  height: 5.185185vh;
  left: 1.66666vw;
  top: 51.1111vh;
  background: #487aff;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 400;
  font-size: 1.041667vw;
  line-height: 100%;
`;

export const SmallCloseBtn = styled.button`
  opacity: 0.4;
  margin-left: 0.729167vw;
`;

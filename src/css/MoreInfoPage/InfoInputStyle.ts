import styled from 'styled-components';

export const InputBox = styled.div`
  width: 372px;
  height: 54px;
  background-color: #ffffff;
  border-radius: 8px;
  font-size: 20px;
  line-height: 100%;
  color: #383838;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
export const InputContainer = styled.div`
  margin-bottom: 40px;
`;
export const PlaceHolder = styled.span`
  margin-right: 24px;
  color: #707070;
  font-size: 20px;
`;
export const Input = styled.input`
  border: none;
  font-size: 20px;
  width: 270px;
`;
export const Btn = styled.button`
  width: 372px;
  height: 54px;
  background-color: #487aff;
  border-radius: 8px;
  &:disabled {
    background-color: #d4e4ff;
  }
`;
export const Text = styled.span`
  font-size: 20px;
  line-height: 100%;
  color: #ffffff; ;
`;
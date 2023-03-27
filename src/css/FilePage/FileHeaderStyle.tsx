import styled from 'styled-components';
import headerImg from '../../components/images/Group 773.png';
import { SearchInputProps } from 'interfaces';

export const FileHeaderContainer = styled.div`
  width: 87.5vw;
  height: 200px;
  position: relative;
  background-image: url('${headerImg}');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 16.5vw;
  top: 3.6111vh;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.4583vw;
  line-height: 100%;
`;

export const Desc = styled.div`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 100%;
  color: #707070;
  margin-top: 2.1296vh;
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 11.4815vh;
  left: 60.104vw;
  width: 14/16667vw;
  height: 3.703704vh;
  background: #ffffff;
  border: 1px solid #d5dbee;
  border-radius: 30px;
  font-weight: 500;
  font-size: 0.8333vw;
  line-height: 100%;
  display: flex;
  align-items: center;
  padding: 0.625vw;
`;

export const Input = styled.input<SearchInputProps>`
  border: none;
  padding: 0.41667vw;
  background-color: transparent;
`;

export const Back = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 12.8125vw;
  top: 3.33vh;
  :hover {
    cursor: pointer;
  }
`;
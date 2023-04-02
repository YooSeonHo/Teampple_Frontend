import styled from 'styled-components';
import templateHeader from '../../components/images/TemplateHeader.png';

export const TemplateHeaderContainer = styled.div`
  width: 87.5vw;
  height: 200px;
  background: #f9fafd;
  background-image: url('${templateHeader}');
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 12vw;
  top: 39px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.4583vw;
  line-height: 160%;
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 11.481vh;
  right: 10vw;
  width: 272px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d5dbee;
  border-radius: 30px;
  font-weight: 500;
  font-size: 0.8333vw;
  line-height: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
`;

export const Input = styled.input`
  border: none;
  padding: 8px;
`;

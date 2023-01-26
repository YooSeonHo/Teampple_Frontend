import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import templateHeader from '../images/TemplateHeader.png'

const TemplateHeader = () => {
  return (
    <TemplateHeaderContainer>
      <TextContainer>
        <Title>나에게 필요한 양식을 손쉽게<br />알짜배기 템플릿</Title>
      </TextContainer>
      <InputContainer>
        <FiSearch />
        <Input placeholder="검색" />
      </InputContainer>
    </TemplateHeaderContainer>
  );
};

const TemplateHeaderContainer = styled.div`
  /* width: 1680px; */
  width: 100vw;
  height: 200px;
  background: #f9fafd;
  background-image: url('${templateHeader}');
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 298px;
  top: 39px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 160%;
`;

const InputContainer = styled.div`
  position: absolute;
  top: 124px;
  left: 1054px;
  width: 272px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d5dbee;
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
`;

const Input = styled.input`
  border: none;
  padding: 8px;
`;

export default TemplateHeader;

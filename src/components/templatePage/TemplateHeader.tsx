import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import templateHeader from '../images/TemplateHeader.png';
import { useRecoilState } from 'recoil';
import { searchTemplateState, IsSearchTemplateState } from 'state';

const TemplateHeader = () => {
  const [search, setSearch] = useRecoilState(searchTemplateState);
  const [isSearch, setIsSearch] = useRecoilState(IsSearchTemplateState);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }

    setSearch(e.currentTarget.value);
  };
  return (
    <TemplateHeaderContainer>
      <TextContainer>
        <Title>
          나에게 필요한 양식을 손쉽게
          <br />
          알짜배기 템플릿
        </Title>
      </TextContainer>
      <InputContainer>
        <FiSearch />
        <Input placeholder="검색" onChange={onSearch} />
      </InputContainer>
    </TemplateHeaderContainer>
  );
};

const TemplateHeaderContainer = styled.div`
  width: 87.5vw;
  height: 200px;
  background: #f9fafd;
  background-image: url('${templateHeader}');
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 12vw;
  top: 39px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.4583vw;
  line-height: 160%;
`;

const InputContainer = styled.div`
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

const Input = styled.input`
  border: none;
  padding: 8px;
`;

export default TemplateHeader;

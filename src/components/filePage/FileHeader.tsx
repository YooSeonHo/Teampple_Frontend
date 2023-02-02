import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import fileIcon from '../images/Group 771.png';
import headerImg from '../images/Group 773.png';
import { useRecoilState } from 'recoil';
import { searchFileState, IsSearchState } from 'state';
import { SearchFileInfo, SearchInputProps } from 'interfaces';
import back from '../images/Vector.png';
import { useNavigate } from 'react-router-dom';

const FileHeader = () => {
  const [search, setSearch] = useRecoilState(searchFileState);
  const [isSearch, setIsSearch] = useRecoilState(IsSearchState);
  const navigate = useNavigate();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }

    setSearch(e.currentTarget.value);
  };
  return (
    <FileHeaderContainer>
      <Back src={back} onClick={() => navigate(-1)} />
      <TextContainer>
        <Title>공유 파일함</Title>
        <Desc>팀플에 첨부된 자료를 한눈에 편하게</Desc>
      </TextContainer>
      <InputContainer>
        <FiSearch />
        <Input placeholder="검색" onChange={onSearch} />
      </InputContainer>
    </FileHeaderContainer>
  );
};

const FileHeaderContainer = styled.div`
  width: 87.5vw;
  height: 200px;
  position: relative;
  background-image: url('${headerImg}');
  background-size: contain;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 16.5vw;
  top: 3.6111vh;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.4583vw;
  line-height: 100%;
`;

const Desc = styled.div`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 100%;
  color: #707070;
  margin-top: 2.1296vh;
`;

const InputContainer = styled.div`
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

const Input = styled.input<SearchInputProps>`
  border: none;
  padding: 0.41667vw;
  background-color: transparent;
`;

const Back = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 12.8125vw;
  top: 3.33vh;
  :hover{
    cursor: pointer;
  }
`;

export default FileHeader;

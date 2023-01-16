import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import fileIcon from '../images/Group 771.png';
import headerImg from '../images/Group 773.png';
import { useRecoilState } from 'recoil';
import { searchFileState,IsSearchState } from 'state';
import { SearchFileInfo,SearchInputProps } from 'interfaces';

const FileHeader = () => {
  const [search,setSearch] = useRecoilState(searchFileState);
  const [isSearch,setIsSearch] = useRecoilState(IsSearchState);

  const onSearch = (e : React.ChangeEvent<HTMLInputElement>) =>{
    if (e.currentTarget.value === "") {
      setIsSearch(false)
    }
    else {
      setIsSearch(true)
    }
    
    setSearch(e.currentTarget.value)
  }
  return (
    <FileHeaderContainer>
      <TextContainer>
        <Title>공유 파일함</Title>
        <Desc>팀플에 첨부된 자료를 한눈에 편하게</Desc>
      </TextContainer>
      <InputContainer>
        <FiSearch />
        <Input placeholder="검색" onChange={onSearch}/>
      </InputContainer>
    </FileHeaderContainer>
  );
};


const FileHeaderContainer = styled.div`
  width: 1680px;
  // width: 100vw;
  height: 200px;
  // background: #fffce3;
  position: relative;
  background-image : url('${headerImg}');
  background-size : 100% 100%;
`;



const TextContainer = styled.div`
  position: absolute;
  left: 298px;
  top: 39px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 100%;
`;

const Desc = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #707070;
  margin-top: 23px;
`;

const InputContainer = styled.div`
  position: absolute;
  top: 124px;
  left: 1154px;
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

const Input = styled.input<SearchInputProps>`
  border: none;
  padding: 8px;
`;

export default FileHeader;

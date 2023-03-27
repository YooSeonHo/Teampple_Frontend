import React from 'react';
import { FiSearch } from 'react-icons/fi';
import fileIcon from '../images/Group 771.png';
import { useRecoilState } from 'recoil';
import { searchFileState, IsSearchState } from 'state';
import { SearchInputProps } from 'interfaces/fileType';
import { SearchFileInfo } from 'interfaces/fileType';
import back from '../images/Vector.png';
import { useNavigate } from 'react-router-dom';
import * as Style from '../../css/FilePage/FileHeaderStyle';

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
    <Style.FileHeaderContainer>
      <Style.Back src={back} onClick={() => navigate(-1)} />
      <Style.TextContainer>
        <Style.Title>공유 파일함</Style.Title>
        <Style.Desc>팀플에 첨부된 자료를 한눈에 편하게</Style.Desc>
      </Style.TextContainer>
      <Style.InputContainer>
        <FiSearch />
        <Style.Input placeholder="검색" onChange={onSearch} />
      </Style.InputContainer>
    </Style.FileHeaderContainer>
  );
};

export default FileHeader;

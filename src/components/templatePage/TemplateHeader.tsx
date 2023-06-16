import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRecoilState } from 'recoil';
import { searchTemplateState, IsSearchTemplateState } from 'state';
import * as Style from '../../css/TemplatePage/TemplateHeaderStyle';

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
    <Style.TemplateHeaderContainer>
      <Style.TextContainer>
        <Style.Title>
          나에게 필요한 양식을 손쉽게
          <br />
          알짜배기 템플릿
        </Style.Title>
      </Style.TextContainer>
      <Style.InputContainer>
        <FiSearch />
        <Style.Input placeholder="검색" onChange={onSearch} />
      </Style.InputContainer>
    </Style.TemplateHeaderContainer>
  );
};

export default TemplateHeader;

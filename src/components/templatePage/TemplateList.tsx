import React from 'react';
import template1 from '../images/template1.png';
import styled from 'styled-components';
//피그마 터져서 나중에 추가
const TemplateList = () => {
  return (
    <MiniTemplateContainer>
      <TemplateBoxContainer>
        <Template1>
          <Img1 />
          <Desc1>피피티 템플릿 모음집</Desc1>
        </Template1>
        <Template1>
          <Img1 />
          <Desc1>피피티 템플릿 모음집</Desc1>
        </Template1>
        <Template1>
          <Img1 />
          <Desc1>피피티 템플릿 모음집</Desc1>
        </Template1>
        <Template1>
          <Img1 />
          <Desc1>피피티 템플릿 모음집</Desc1>
        </Template1>
      </TemplateBoxContainer>
    </MiniTemplateContainer>
  );
};

const MiniTemplateContainer = styled.div`
  position: relative;
`;

const TemplateBoxContainer = styled.div`
  width: 1200px;
  position: absolute;
  top: 40px;
  left: 254px;
  display: flex;
  flex-wrap: wrap;
`;

const Template1 = styled.div`
  position: relative;
  width: 372px;
  height: 200px;
  background: #edeff6;
  border-radius: 12px;
  margin-right: 28px;
  margin-bottom: 29px;
  display: grid;
  grid-template-rows: 8fr 2fr;
`;

const Img1 = styled.div`
  background-image: url(${template1});
  background-size: cover;
  width: 150px;
  height: 130px;
  margin: auto;
`;

const Desc1 = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #707070;
  background: #f9fafd;
  border-radius: 0px 0px 12px 12px;
  width: 372px;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 24px;
`;

export default TemplateList;

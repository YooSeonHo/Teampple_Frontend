import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchTemplateState, IsSearchTemplateState } from 'state';
import { baseURL } from 'api/client';
import templateAPI from 'api/templateAPI';

interface ITemplate {
  templateId: number;
  url: string;
  name: string;
}

const TemplateList = () => {
  const token = localStorage.getItem('jwt_accessToken');
  const [templates, setTemplates] = useState([]);
  const [searchTemp, setSearchTemp] = useRecoilState(searchTemplateState);
  const [isSearch, setIsSearch] = useRecoilState(IsSearchTemplateState);

  const getTemplateAPI = async () => {
    templateAPI.get()
      .then((response) => {
        setTemplates(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getTemplateAPI();
  }, []);

  return (
    <TemplateBoxContainer>
      <Box>
        {templates && isSearch
          ? templates
              .filter((temp: ITemplate) => {
                return temp.name
                  .toLowerCase()
                  .includes(searchTemp.toLowerCase());
              })
              .map((template: ITemplate) => (
                <Template
                  key={template.templateId}
                  onClick={() => window.open(`${template.url}`, '_blank')}
                >
                  <Img
                    src={require(`../images/templateThumb/template_${template.templateId}.png`)}
                  />
                  <Desc>{template.name}</Desc>
                </Template>
              ))
          : templates.map((template: ITemplate) => (
              <Template
                key={template.templateId}
                onClick={() => window.open(`${template.url}`, '_blank')}
              >
                <Img
                  src={require(`../images/templateThumb/template_${template.templateId}.png`)}
                />
                <Desc>{template.name}</Desc>
              </Template>
            ))}
      </Box>
    </TemplateBoxContainer>
  );
};

const TemplateBoxContainer = styled.div`
  width: 87.5vw;
  margin-top: 5.37037vh;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 63vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Template = styled.div`
  width: 19.375vw;
  margin-right: 1.4583vw;
  margin-bottom: 2.6851vh;
  display: grid;
  grid-template-rows: 8fr 2fr;
  :hover{
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 19.375vw;
  height: 18.518vh;
  margin: auto;
`;

const Desc = styled.div`
  font-weight: 500;
  font-size: 0.9375vw;
  line-height: 100%;
  color: #505050;
  width: 19.375vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.11vh;
`;

export default TemplateList;

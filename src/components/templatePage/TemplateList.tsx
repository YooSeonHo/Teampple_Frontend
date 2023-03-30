import React from 'react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchTemplateState, IsSearchTemplateState } from 'state';
import templateAPI from 'api/templateAPI';
import * as Style from '../../css/TemplatePage/TemplateListStyle';

interface ITemplate {
  templateId: number;
  url: string;
  name: string;
}

const TemplateList = () => {
  const [templates, setTemplates] = useState([]);
  const [searchTemp, setSearchTemp] = useRecoilState(searchTemplateState);
  const [isSearch, setIsSearch] = useRecoilState(IsSearchTemplateState);

  const getTemplateAPI = async () => {
    // await axios({
    //   url: `/api/templates`,
    //   baseURL: baseURL,
    //   method: 'get',
    //   headers: {
    //     Authorization: token,
    //   },
    // })
    templateAPI
      .get()
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
    <Style.TemplateBoxContainer>
      <Style.Box>
        {templates && isSearch
          ? templates
              .filter((temp: ITemplate) => {
                return temp.name
                  .toLowerCase()
                  .includes(searchTemp.toLowerCase());
              })
              .map((template: ITemplate) => (
                <Style.Template
                  key={template.templateId}
                  onClick={() => window.open(`${template.url}`, '_blank')}
                >
                  <Style.Img
                    src={require(`../images/templateThumb/template_${template.templateId}.png`)}
                  />
                  <Style.Desc>{template.name}</Style.Desc>
                </Style.Template>
              ))
          : templates.map((template: ITemplate) => (
              <Style.Template
                key={template.templateId}
                onClick={() => window.open(`${template.url}`, '_blank')}
              >
                <Style.Img
                  src={require(`../images/templateThumb/template_${template.templateId}.png`)}
                />
                <Style.Desc>{template.name}</Style.Desc>
              </Style.Template>
            ))}
      </Style.Box>
    </Style.TemplateBoxContainer>
  );
};

export default TemplateList;

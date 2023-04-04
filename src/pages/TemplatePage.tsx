import React from 'react';
import TemplateHeader from 'components/templatePage/TemplateHeader';
import TemplateList from 'components/templatePage/TemplateList';
import TemplateLayout from 'components/layouts/commonLayout';

const TemplatePage = () => {
  return (
    <div>
      <TemplateLayout title='템플릿'>
        <TemplateHeader />
        <TemplateList />
      </TemplateLayout>
    </div>
  );
};

export default TemplatePage;

import React from 'react';
import TemplateHeader from 'components/templatePage/TemplateHeader';
import TemplateList from 'components/templatePage/TemplateList';
import TemplateLayout from 'components/layouts/templateLayout';

const TemplatePage = () => {
  return (
    <div>
      <TemplateLayout>
        <TemplateHeader />
        <TemplateList />
      </TemplateLayout>
    </div>
  );
};

export default TemplatePage;

import React from 'react';
import FileHeader from 'components/filePage/FileHeader';
import Layout from 'components/layouts/layout';
import FileList from 'components/filePage/fileList';
import styled from 'styled-components';


const FilePage = () => {

  return (
    <Layout>
      <FileHeader/>
      <FileList/>
    </Layout>
  );
};

export default FilePage;

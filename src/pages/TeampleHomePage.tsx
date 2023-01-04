import React from 'react';
import SummaryTeample from 'components/teampleHomePage/SummaryTeample';
import FileInfo from 'components/teampleHomePage/FileInfo';
import AddSchedule from 'components/popup/AddSchedule';
import ModifyTeample from 'components/popup/ModifyTeample';
import AddTask from 'components/popup/AddTask';

const TeampleHomePage = () => {
  return (
    <div>
      {/* <SummaryTeample /> */}
      {/* <FileInfo /> */}
      {/* <AddSchedule /> */}
      <ModifyTeample />
      {/* <AddTask /> */}
    </div>
  );
};

export default TeampleHomePage;

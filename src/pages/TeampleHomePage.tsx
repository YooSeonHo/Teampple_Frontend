import React from 'react';
import SummaryTeample from 'components/teampleHomePage/SummaryTeample';
import FileInfo from 'components/teampleHomePage/FileInfo';
import AddSchedule from 'components/popup/AddSchedule';

const TeampleHomePage = () => {
  return (
    <div>
      {/* <SummaryTeample /> */}
      {/* <FileInfo /> */}
      {/* AddSchedule - 일정관리자에 들어가야함. merge전이어서 일단 여기에 넣어둠 */}
      <AddSchedule />
    </div>
  );
};

export default TeampleHomePage;

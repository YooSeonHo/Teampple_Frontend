import React from 'react';
import EditProfile from 'components/editProfilePage/editProfile';
import ProfileLayout from 'components/layouts/commonLayout';

const ProfilePage = () => {
  return (
    <ProfileLayout title='프로필'>
      <EditProfile />
    </ProfileLayout>
  );
};

export default ProfilePage;

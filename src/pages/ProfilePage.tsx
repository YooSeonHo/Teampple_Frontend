import React from 'react';
import EditProfile from 'components/editProfile/editProfile';
import ProfileLayout from 'components/layouts/profileLayout';

const ProfilePage = () => {
  return (
      <ProfileLayout>
        <EditProfile />
      </ProfileLayout>
  );
};


export default ProfilePage;
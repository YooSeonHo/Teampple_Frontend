import React from 'react';
import EditProfile from 'components/editProfilePage/editProfile';
import ProfileLayout from 'components/layouts/profileLayout';

const ProfilePage = () => {
  return (
      <ProfileLayout>
        <EditProfile />
      </ProfileLayout>
  );
};


export default ProfilePage;
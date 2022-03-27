import ProfileContent from '@src/component/organism/ProfileContent';
import T_Basic from '@src/component/template/T_Basic';
import React from 'react';

const ProfileScreen = () => {
  return (
    <T_Basic 
      Body={<ProfileContent />}
    />
  )
}

export default ProfileScreen;
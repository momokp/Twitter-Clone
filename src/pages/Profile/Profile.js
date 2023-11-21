import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import '../Page.css';
import MainProfile from './MainProfile/MainProfile';

const Profile = () => {
    const [user] = useAuthState(auth);

  return (
    <div className="profilePage">
          <MainProfile user = {user} />
    </div>
  );
};

export default Profile;
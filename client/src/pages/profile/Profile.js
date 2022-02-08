import './profile.css';

import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = () => {
  return (
    <>
      <div className='profile'>
        <Sidebar />

        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src='/assets/person/3.jpeg'
                alt='profile'
              />
              <img
                className='profileUserImg'
                src='/assets/person/7.jpeg'
                alt='cover'
              />
            </div>

            <div className='profileInfo'>
              <h4 className='profileInfoName'>Ilker Adiguzel</h4>
              <span className='profileInfoDesc'>Welcome to my profile!</span>
            </div>
          </div>

          <div className='profileRightBottom'>
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

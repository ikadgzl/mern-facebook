import './rightbar.css';

import { users } from '../../dummyData';
import OnlineUser from './OnlineUser';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img src='/assets/gift.png' alt='birthday' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today!
          </span>
        </div>

        <img src='/assets/ad.png' alt='ad' className='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>

        <ul className='rightbarFriendList'>
          {/* todo: make user li its own component called OnlineUser */}
          {users.map((user) => (
            <OnlineUser key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;

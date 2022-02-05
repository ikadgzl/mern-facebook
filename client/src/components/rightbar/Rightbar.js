import './rightbar.css';

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
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                className='rightbarProfileImg'
                src='/assets/person/3.jpeg'
                alt='friend'
              />
              <span className='rightbarOnline'></span>
            </div>

            <span className='rightbarUsername'>John Doe</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                className='rightbarProfileImg'
                src='/assets/person/3.jpeg'
                alt='friend'
              />
              <span className='rightbarOnline'></span>
            </div>

            <span className='rightbarUsername'>John Doe</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                className='rightbarProfileImg'
                src='/assets/person/3.jpeg'
                alt='friend'
              />
              <span className='rightbarOnline'></span>
            </div>

            <span className='rightbarUsername'>John Doe</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                className='rightbarProfileImg'
                src='/assets/person/3.jpeg'
                alt='friend'
              />
              <span className='rightbarOnline'></span>
            </div>

            <span className='rightbarUsername'>John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;

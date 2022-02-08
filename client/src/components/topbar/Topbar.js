import './topbar.css';

import { Chat, Notifications, Person, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/home'>
          <span className='logo'>SocialApp</span>
        </Link>
      </div>

      <div className='topbarCenter'>
        <div className='searchBar'>
          <Search />
          <input
            className='searchInput'
            placeholder='Search for friends, posts or videos'
          />
        </div>
      </div>

      <div className='topbarRight'>
        <nav className='topbarLinks'>
          <span className='topbarLink'>Home</span>
          <span className='topbarLink'>Timeline</span>
        </nav>

        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>

          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>2</span>
          </div>

          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>

        <Link to='/profile'>
          <img src='/assets/person/1.jpeg' alt='user' className='topbarImg' />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;

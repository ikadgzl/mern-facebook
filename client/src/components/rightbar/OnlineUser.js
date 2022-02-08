const OnlineUser = ({ user }) => {
  return (
    <li className='rightbarFriend'>
      <div className='rightbarProfileImgContainer'>
        <img
          className='rightbarProfileImg'
          src={user.profilePicture}
          alt='friend'
        />
        <span className='rightbarOnline'></span>
      </div>

      <span className='rightbarUsername'>{user.username}</span>
    </li>
  );
};

export default OnlineUser;

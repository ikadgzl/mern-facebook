const CloseFriend = ({ user }) => {
  return (
    <li className='sidebarFriend'>
      <img
        className='sidebarFriendImg'
        src={user.profilePicture}
        alt='friend'
      />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
  );
};

export default CloseFriend;

import { MoreVert } from '@material-ui/icons';
import './post.css';

import { users } from '../../dummyData';

const Post = ({ post }) => {
  const owner = users.find((user) => user.id === post.userId);

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              className='postProfileImg'
              src={owner.profilePicture}
              alt='person'
            />
            <span className='postUsername'>{owner.username}</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>

        <div className='postCenter'>
          <span className='postText'>{post.description}</span>
          <img className='postImg' src={post.photo} alt='post' />
        </div>

        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='/assets/like.png' alt='like icon' />
            <img
              className='likeIcon'
              src='/assets/heart.png'
              alt='heart icon'
            />
            <span className='postLikeCounter'>{post.like}</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

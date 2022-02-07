import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

import { posts } from '../../dummyData';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

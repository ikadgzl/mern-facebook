import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getTimeline,
  likePost,
  updatePost
} from '../controller/posts.js';

const postsRouter = Router();

postsRouter.route('/').get(getPosts).post(createPost);
postsRouter.route('/:id').get(getPost).put(updatePost).delete(deletePost);
postsRouter.route('/:id/like').put(likePost);
postsRouter.route('/timeline/all').get(getTimeline);

export default postsRouter;

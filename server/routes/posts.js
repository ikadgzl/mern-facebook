import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost
} from '../controller/posts.js';

const postsRouter = Router();

postsRouter.route('/').get(getPosts).post(createPost);
postsRouter.route('/:id').get(getPost).put(updatePost).delete(deletePost);

export default postsRouter;

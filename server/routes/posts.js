import { Router } from 'express';
import { getPosts } from '../controller/posts.js';

const postsRouter = Router();

postsRouter.get('/', getPosts);

export default postsRouter;

import { Router } from 'express';
import {
  deleteUser,
  followUser,
  getAllUser,
  getUser,
  unfollowUser,
  updateUser
} from '../controller/users.js';

const userRouter = Router();

userRouter.route('/').get(getAllUser);
userRouter.route('/:id').get(getUser).put(updateUser).delete(deleteUser);
userRouter.route('/:id/follow').put(followUser);
userRouter.route('/:id/unfollow').put(unfollowUser);

export default userRouter;

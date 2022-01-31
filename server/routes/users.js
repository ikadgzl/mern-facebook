import { Router } from 'express';
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser
} from '../controller/users.js';

const userRouter = Router();

userRouter.route('/').get(getAllUser).post();

userRouter.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default userRouter;

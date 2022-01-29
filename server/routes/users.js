import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send('from user router');
});

export default userRouter;

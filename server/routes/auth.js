import { Router } from 'express';
import { loginUser, registerUser } from '../controller/auth.js';

const authRouter = Router();

authRouter.get('/', (req, res) => res.send('from auth router'));

// Register Route
authRouter.post('/register', registerUser);

// Login Route
authRouter.post('/login', loginUser);

export default authRouter;

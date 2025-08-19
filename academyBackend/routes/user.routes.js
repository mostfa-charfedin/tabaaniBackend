import { Router } from 'express';

import authorize from '../middlewares/auth.middleware.js'
import {getUser, getUsers, updateUser} from '../controllers/user.controller.js'

const userRouter = Router();

userRouter.get('/', authorize, getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.put('/:id', authorize, updateUser);

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;
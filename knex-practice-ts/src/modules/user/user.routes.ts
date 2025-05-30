import { Router } from 'express';
import UserController from './user.controller';

const router = Router();

router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.get('/users', UserController.getAllUsers);

export default router;
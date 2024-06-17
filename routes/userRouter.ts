import { Router } from 'express';
import { getCurrentUser, updateUser } from '../controllers/userController';
import { validateUpdateUserInput } from '../middleware/validationMiddleware';

const router = Router();

router.get('/current-user', getCurrentUser);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;
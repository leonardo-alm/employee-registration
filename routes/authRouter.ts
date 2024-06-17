import { Router } from 'express';
import { login, logout, register } from '../controllers/authController';
import { validateRegisterInput, validateLoginInput} from '../middleware/validationMiddleware';

const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.get('/logout', logout);

export default router;
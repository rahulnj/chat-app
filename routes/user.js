import { Router } from 'express';
import { catchErrors } from '../handlers/errorHandlers';
import { login, register } from '../controllers/userController';

const router = Router();

router.post('/login', catchErrors(login));
router.post('/register', catchErrors(register));

export default router;

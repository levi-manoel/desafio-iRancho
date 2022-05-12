import { Router } from 'express';
import pessoasControllers from '../controllers/pessoas.controllers.js';

const router = Router();

router.get('/', pessoasControllers.getAll);

export default router;

import { Router } from 'express';
import pessoasControllers from '../controllers/pessoas.controllers.js';

import validatePostPessoa from '../middlewares/postPessoa.validations.js';

const router = Router();

router
  .get('/', pessoasControllers.getAll)
  .get('/:id', pessoasControllers.getById)
  .post('/', validatePostPessoa, pessoasControllers.create)
  .post('/:id', validatePostPessoa, pessoasControllers.update);

export default router;

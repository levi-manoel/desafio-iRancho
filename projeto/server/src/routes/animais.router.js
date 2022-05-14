import { Router } from 'express';
import animaisController from '../controllers/animais.controller.js';

const router = Router();

router
  .get('/', animaisController.getAll)
  .get('/:id', animaisController.getById)
  .post('/', animaisController.create)
  .put('/:id', animaisController.update)
  .delete('/:id', animaisController.remove);

export default router;

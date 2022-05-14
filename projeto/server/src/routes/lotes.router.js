import { Router } from 'express';
import lotesControllers from '../controllers/lotes.controllers.js';
import postLoteValidations from '../middlewares/postLote.validations.js';

const router = Router();

router
  .get('/', lotesControllers.getAll)
  .get('/:id', lotesControllers.getById)
  .post('/', postLoteValidations, lotesControllers.create)
  .put('/:id', postLoteValidations, lotesControllers.update)
  .delete('/:id', lotesControllers.remove);

export default router;

import { Router } from 'express';
import lotesControllers from '../controllers/lotes.controllers.js';

const router = Router();

router
  .get('/', lotesControllers.getAll)
  .get('/:id', lotesControllers.getById);

export default router;

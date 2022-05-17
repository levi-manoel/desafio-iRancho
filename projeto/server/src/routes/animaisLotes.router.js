import { Router } from 'express';
import animaisLotesController from '../controllers/animaisLotes.controller.js';

const router = Router();

router
  .get('/', animaisLotesController.getAll);

export default router;
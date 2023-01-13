/**
 * Define all your API web-routes
 *
 */

import { Router } from 'express';
import  GameController from '../controllers/Game';

const router = Router();

router.get('/jogo/simular', GameController.index);

export default router;

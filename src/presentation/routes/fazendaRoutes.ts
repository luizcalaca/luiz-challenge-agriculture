import { Router } from 'express';
import FazendaController from '../controllers/FazendaController';

const fazendaController = new FazendaController();
const fazendaRouter = Router();

fazendaRouter.post('/', fazendaController.create);

export default fazendaRouter;

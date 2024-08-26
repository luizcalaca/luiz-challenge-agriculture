import { Router } from 'express';
import ProdutorController from '../controllers/ProdutorController';

const produtorController = new ProdutorController();
const produtorRouter = Router();

produtorRouter.post('/', produtorController.create);

export default produtorRouter;

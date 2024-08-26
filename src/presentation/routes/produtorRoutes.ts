import { Router } from 'express';
import ProdutorController from '../controllers/ProdutorController';

const produtorController = new ProdutorController();
const produtorRouter = Router();

produtorRouter.post('/', produtorController.create);
produtorRouter.put('/', produtorController.update);
produtorRouter.delete('/', produtorController.delete);

export default produtorRouter;

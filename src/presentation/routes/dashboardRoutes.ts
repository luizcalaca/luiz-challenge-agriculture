import { Router } from 'express';
import DashboardController from '../controllers/DashboardController';

const dashboardController = new DashboardController();
const dashboardRouter = Router();

dashboardRouter.post('/', dashboardController.getAllData);

export default dashboardRouter;

import express from 'express';
import produtorRouter from '../presentation/routes/produtorRoutes';
import errorHandler from '../presentation/middlewares/errorHandler';
import fazendaRouter from '../presentation/routes/fazendaRoutes';
import dashboardRouter from '../presentation/routes/dashboardRoutes';

const app = express();

app.use(express.json());
app.use('/produtores', produtorRouter);
app.use('/fazendas', fazendaRouter);
app.use('/dashboard', dashboardRouter);
app.use(errorHandler);

export default app;

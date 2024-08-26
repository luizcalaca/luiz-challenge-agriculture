import express from 'express';
import produtorRouter from '../presentation/routes/produtorRoutes';
import errorHandler from '../presentation/middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/produtores', produtorRouter);
app.use(errorHandler);

export default app;

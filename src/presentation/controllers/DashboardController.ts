import { NextFunction, Request, Response } from 'express';
import DashboardModel from '../../infrastructure/models/DashboardModel';

export default class DashboardController {
  // eslint-disable-next-line max-len
  public getAllData = async (request: Request, response: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      const objetoDashboardModel = new DashboardModel();
      const result = await objetoDashboardModel.getDashboardData();
      return response.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };
}

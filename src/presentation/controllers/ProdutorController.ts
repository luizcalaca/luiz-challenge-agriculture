import { NextFunction, Request, Response } from 'express';
import ProdutorUseCase from '../../domain/usecases/ProdutorUseCase';
import ProdutorRepository from '../../domain/repositories/ProdutorRepository';
import ProdutorModel from '../../infrastructure/models/ProdutorModel';

export default class ProdutorController {
  private produtorModel: ProdutorModel;
  private produtorRepository: ProdutorRepository;
  private produtorUseCase: ProdutorUseCase;

  constructor() {
    this.produtorModel = new ProdutorModel();
    this.produtorRepository = new ProdutorRepository(this.produtorModel);
    this.produtorUseCase = new ProdutorUseCase(this.produtorRepository);
  }

  // eslint-disable-next-line max-len
  public create = async (request: Request, response: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      await this.produtorUseCase.create(request.body);
      return response.status(200).json({ message: 'Produtor cadastrado com sucesso!' });
    } catch (error) {
      next(error);
    }
  };
}

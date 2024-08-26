import { NextFunction, Request, Response } from 'express';
import FazendaUseCase from '../../domain/usecases/FazendaUseCase';
import FazendaRepository from '../../domain/repositories/FazendaRepository';
import FazendaModel from '../../infrastructure/models/FazendaModel';

export default class FazendaController {
  private fazendaModel: FazendaModel;
  private fazendaRepository: FazendaRepository;
  private fazendaUseCase: FazendaUseCase;

  constructor() {
    this.fazendaModel = new FazendaModel();
    this.fazendaRepository = new FazendaRepository(this.fazendaModel);
    this.fazendaUseCase = new FazendaUseCase(this.fazendaRepository);
  }

  // eslint-disable-next-line max-len
  public create = async (request: Request, response: Response, next: NextFunction): Promise<Response | undefined> => {
    try {
      await this.fazendaUseCase.create(request.body);
      return response.status(200).json({ message: 'Fazenda cadastrada com sucesso!' });
    } catch (error) {
      next(error);
    }
  };
}

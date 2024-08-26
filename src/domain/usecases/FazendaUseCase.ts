import Fazenda from '../entities/Fazenda';
import AreaMaiorException from '../exceptions/AreaMaiorException';
import FazendaRepository from '../repositories/FazendaRepository';

export default class FazendaUseCase {
  constructor(private fazendaRepository: FazendaRepository) {}

  public async create(entity: Fazenda): Promise<void> {
    if ((entity.areaAgriculturavel + entity.areaVegetacao) > entity.areaTotal)
      throw new AreaMaiorException(`Àrea agrícultável e vegetação,
          não deverá ser maior que a área total da fazenda`, 'ValidationError');

    await this.fazendaRepository.create(entity);
  }
}

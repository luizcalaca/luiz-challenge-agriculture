import Fazenda from '../entities/Fazenda';
import IConnectionDatabase from '../interfaces/IConnectionDatabase';

export default class FazendaRepository {
  constructor(private persistence: IConnectionDatabase) {}

  public async create(entity: Fazenda): Promise<void> {
    await this.persistence.connection.query(entity);
  }
}

import Produtor from '../entities/Produtor';
import IConnectionDatabase from '../interfaces/IConnectionDatabase';

export default class ProdutorRepository {
  constructor(private persistence: IConnectionDatabase) { }

  public async create(entity: Produtor): Promise<void> {
    await this.persistence.connection.query(entity);
  }
}

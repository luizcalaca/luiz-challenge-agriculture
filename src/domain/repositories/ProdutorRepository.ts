import Produtor from '../entities/Produtor';
import IConnectionDatabase from '../interfaces/IConnectionDatabase';

export default class ProdutorRepository {
  constructor(private persistence: IConnectionDatabase) { }

  public async create(entity: Produtor): Promise<void> {
    await this.persistence.connection.query(entity);
  }

  public async update(entity: Produtor): Promise<void> {
    await this.persistence.connection.query(entity);
  }

  public async delete(entity: Produtor): Promise<void> {
    await this.persistence.connection.query(entity);
  }
}

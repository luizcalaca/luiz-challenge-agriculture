import Produtor from '../../domain/entities/Produtor';
import PostgresAdapter from '../adapters/PostgresAdapter';

export default class ProdutorModel {
  constructor(private persistence: PostgresAdapter = new PostgresAdapter()) { }

  public async create(entity: Produtor): Promise<void> {
    await this.persistence.connection.query(
      'INSERT INTO produtores (cpf_cnpj, nome_produtor) VALUES ($1, $2)',
      [entity.cpfCnpj, entity.nomeProdutor],
    );
  }
}

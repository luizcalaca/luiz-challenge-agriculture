import { Pool } from 'pg';
import IConnectionDatabase from '../../domain/interfaces/IConnectionDatabase';
import Produtor from '../../domain/entities/Produtor';

export default class PostgresAdapter implements IConnectionDatabase {
  public connection: Pool;

  constructor() {
    this.connection = new Pool({
      user: 'seu_usuario',
      host: 'localhost',
      database: 'seu_banco',
      password: 'sua_senha',
      port: 5432,
    });
  }

  public async create(entity: Produtor): Promise<void> {
    await this.connection.query(
      'INSERT INTO produtores (cpf_cnpj, nome_produtor) VALUES ($1, $2)',
      [entity.cpfCnpj, entity.nomeProdutor],
    );
  }
}

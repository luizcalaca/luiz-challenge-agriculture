import { Pool } from 'pg';
import IConnectionDatabase from '../../domain/interfaces/IConnectionDatabase';

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
}

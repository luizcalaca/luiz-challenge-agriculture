import { Pool } from 'pg';
import IConnectionDatabase from '../../domain/interfaces/IConnectionDatabase';

export default class PostgresAdapter implements IConnectionDatabase {
  public connection: Pool;

  constructor() {
    this.connection = new Pool({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: Number(process.env.PGPORT),
    });
  }
}

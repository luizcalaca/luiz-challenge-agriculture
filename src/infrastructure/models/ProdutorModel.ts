import Produtor from '../../domain/entities/Produtor';
import PostgresAdapter from '../adapters/PostgresAdapter';

export default class ProdutorModel extends PostgresAdapter {
  public async create(entity: Produtor): Promise<void> {
    console.log('Model', entity);
    await this.connection.query(
      'INSERT INTO produtores (cpf_cnpj, nome_produtor) VALUES ($1, $2)',
      [entity.cpfCnpj, entity.nomeProdutor],
    );
  }

  public async update(entity: Produtor): Promise<void> {
    await this.connection.query(
      'UPDATE produtores SET nome_produtor = $1 WHERE cpf_cnpj = $2',
      [entity.nomeProdutor, entity.cpfCnpj],
    );
  }

  public async delete(cpfCnpj: string): Promise<void> {
    await this.connection.query(
      'DELETE FROM produtores WHERE cpf_cnpj = $1',
      [cpfCnpj],
    );
  }
}

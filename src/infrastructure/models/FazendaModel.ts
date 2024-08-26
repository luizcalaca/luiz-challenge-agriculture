import Fazenda from '../../domain/entities/Fazenda';
import PostgresAdapter from '../adapters/PostgresAdapter';

export default class FazendaModel extends PostgresAdapter {
  public async create(entity:Fazenda): Promise<void> {
    console.log('Model', entity);
    await this.connection.query(
      `INSERT INTO fazendas (
        fk_localidades_id,
        fk_culturas_id,
        fk_produtores_id,
        nome_fazenda,
        area_total,
        area_agriculturavel,
        area_vegetacao
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
      [entity.fkLocalidadesId, entity.fkCulturasId, entity.fkProdutoresId, entity.nomeFazenda,
        entity.areaTotal, entity.areaAgriculturavel, entity.areaVegetacao],
    );
  }
}

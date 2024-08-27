import PostgresAdapter from '../adapters/PostgresAdapter';

export default class DashboardModel extends PostgresAdapter {
  async getTotalFazendas(): Promise<void> {
    const query = 'SELECT COUNT(*) AS total_fazendas FROM fazendas';
    const result = await this.connection.query(query);
    return result.rows[0].total_fazendas;
  }

  async getTotalAreaHectares(): Promise<void> {
    const query = 'SELECT SUM(area_total) AS total_area_hectares FROM fazendas';
    const result = await this.connection.query(query);
    return result.rows[0].total_area_hectares;
  }

  async getFazendasPorEstado(): Promise<any> {
    const query = `
      SELECT
        l.estado,
        COUNT(f.pk_fazendas_id) AS total_fazendas
      FROM
        fazendas f
      JOIN
        localidades l ON f.fk_localidades_id = l.pk_localidades_id
      GROUP BY
        l.estado;
    `;
    const result = await this.connection.query(query);
    return result.rows;
  }

  async getFazendasPorCultura(): Promise<any[]> {
    const query = `
      SELECT
        c.nome_cultura,
        COUNT(fc.pk_fazendas_culturas_id) AS total_fazendas
      FROM
        fazendas_culturas fc
      JOIN
        culturas c ON fc.fk_culturas_id = c.pk_culturas_id
      GROUP BY
        c.nome_cultura;
    `;
    const result = await this.connection.query(query);
    return result.rows;
  }

  async getUsoSolo(): Promise<void> {
    const query = `
      SELECT
        SUM(area_agriculturavel) AS total_area_agriculturavel,
        SUM(area_vegetacao) AS total_area_vegetacao
      FROM
        fazendas;
    `;
    const result = await this.connection.query(query);
    return result.rows[0];
  }

  async getDashboardData(): Promise<any> {
    const [totalFazendas, totalAreaHectares,
      fazendasPorEstado,
      fazendasPorCultura,
      usoSolo,
    ] = await Promise.all([
      this.getTotalFazendas(),
      this.getTotalAreaHectares(),
      this.getFazendasPorEstado(),
      this.getFazendasPorCultura(),
      this.getUsoSolo(),
    ]);

    return {
      totalFazendas,
      totalAreaHectares,
      fazendasPorEstado,
      fazendasPorCultura,
      usoSolo,
    };
  }
}

import Fazenda from '../../domain/entities/Fazenda';
import PostgresAdapter from '../adapters/PostgresAdapter';

export default class FazendaModel extends PostgresAdapter {

  async function getTotalFazendas() {
    const query = 'SELECT COUNT(*) AS total_fazendas FROM fazendas';
    const result = await this.connection.query(query);
    return result.rows[0].total_fazendas;
  }

  // Função para obter o total de fazendas em hectares (área total)
  async function getTotalAreaHectares() {
    const query = 'SELECT SUM(area_total) AS total_area_hectares FROM fazendas';
    const result = await this.connection.query(query);
    return result.rows[0].total_area_hectares;
  }

  // Função para obter dados para o gráfico de pizza por estado
  async function getFazendasPorEstado() {
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
    const result = await pool.query(query);
    return result.rows;
  }

  // Função para obter dados para o gráfico de pizza por cultura
  async function getFazendasPorCultura() {
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

  // Função para obter dados para o gráfico de pizza por uso de solo (área agricultável e vegetação)
  async function getUsoSolo() {
    const query = `
      SELECT
        SUM(area_agriculturavel) AS total_area_agriculturavel,
        SUM(area_vegetacao) AS total_area_vegetacao
      FROM
        fazendas;
    `;
    const result = await pool.query(query);
    return result.rows[0];
  }

  // Função principal para coordenar as chamadas de funções menores
  async function getDashboardData() {
      const totalFazendas = await getTotalFazendas();
      const totalAreaHectares = await getTotalAreaHectares();
      const fazendasPorEstado = await getFazendasPorEstado();
      const fazendasPorCultura = await getFazendasPorCultura();
      const usoSolo = await getUsoSolo();

      return {
        totalFazendas,
        totalAreaHectares,
        fazendasPorEstado,
        fazendasPorCultura,
        usoSolo,
      };
  }
}

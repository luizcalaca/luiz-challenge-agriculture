import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/application/app';
import mockFazendas from '../mocks/fazenda.mock';
chai.use(chaiHttp);

describe('POST /produtores', () => {

  it('Salva uma fazenda', async () => {
    const httpResponse = await chai.request(app).post('/fazendas').send(mockFazendas[0]);
    expect(httpResponse.status).to.equal(200);
  });

});

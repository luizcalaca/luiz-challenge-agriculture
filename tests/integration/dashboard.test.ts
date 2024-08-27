import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/application/app';
import mockFazendas from '../mocks/fazenda.mock';
chai.use(chaiHttp);

describe('Get /dashboard', () => {

  it('Obtém dados para o dashboard', async () => {
    const httpResponse = await chai.request(app).get('/dashboard')
    expect(httpResponse.status).to.equal(200);
  });

});

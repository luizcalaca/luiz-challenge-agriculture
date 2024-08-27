import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../src/application/app';
import { produtorMock } from '../mocks/produtor.mock';
chai.use(chaiHttp);

describe('POST /produtores', () => {

  it('Salva um produtor', async () => {
    const httpResponse = await chai.request(app).post('/produtores').send(produtorMock);
    expect(httpResponse.status).to.equal(200);
  });

  it('Deleta um produtor', async () => {
    const httpResponse = await chai.request(app).delete('/produtores').send(produtorMock);
    expect(httpResponse.status).to.equal(200);
  });

  it('Atualiza um produtor', async () => {
    const httpResponse = await chai.request(app).put('/produtores').send(produtorMock);
    expect(httpResponse.status).to.equal(200);
  });
});

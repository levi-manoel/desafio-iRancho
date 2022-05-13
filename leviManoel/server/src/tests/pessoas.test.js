import require from '../utils/require.js';

import sinon from 'sinon';
import chai from 'chai';
const chaiHttp = require('chai-http');

import app from '../app.js';
import { Pessoa } from '../database/models/Pessoa.js';
import pessoasMock from './mocks/pessoas.mocks.js';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes de GET /pessoas', () => {
  describe('GET /pessoas - getAll', () => {
    before(() => {
      sinon.stub(Pessoa, 'findAll').resolves(pessoasMock.getAllMock);
    })
    after(() => {
      Pessoa.findAll.restore();
    })

    it('Responde com código 200 e todas as pessoas', async () => {
      const response = await chai.request(app).get('/pessoas');

      expect(response.body).to.be.deep.equal(pessoasMock.getAllMock);
      expect(response).to.be.status(200);
    })
  })

  describe('GET /pessoas/:id - getById', () => {
    before(() => {
      sinon.stub(Pessoa, 'findByPk').resolves(pessoasMock.getByIdMock);
    })
    after(() => {
      Pessoa.findByPk.restore();
    })

    it('Responde com código 200 e uma pessoa', async () => {
      const response = await chai.request(app).get('/pessoas/3');

      expect(response.body).to.be.deep.equal(pessoasMock.getByIdMock.dataValues);
      expect(response).to.be.status(200);
    })
  })
})
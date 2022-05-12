import { Pessoa } from '../database/models/Pessoa.js';

async function getAll() {
  const rows = Pessoa.findAll();

  return rows;
}

async function getById(id) {
  const row = Pessoa.findByPk(id);

  return row;
}

export default {
  getAll,
  getById,
};

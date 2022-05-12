import { Pessoa } from '../database/models/Pessoa.js';

async function getAll() {
  const rows = Pessoa.findAll();

  return rows;
}

export default {
  getAll,
};

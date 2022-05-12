import { Pessoa } from '../database/models/Pessoa.js';

async function getAll() {
  const rows = await Pessoa.findAll();

  return rows;
}

async function getById(id) {
  const row = await Pessoa.findByPk(id);

  if (row === null) return { code: 404, response: { error: 'Não foi achada nenhuma pessoa com esse ID' } };
  
  return { code: 200, response: row.dataValues };
}

export default {
  getAll,
  getById,
};

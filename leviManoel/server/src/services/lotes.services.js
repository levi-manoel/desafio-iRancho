import { Lote } from '../database/models/Lote.js';

async function getAll() {
  const rows = await Lote.findAll();

  return { code: 200, response: rows };
}

async function getById(id) {
  const row = await Lote.findByPk(id);

  if (row === null) return { code: 404, response: { error: 'Não foi achado um lote com esse ID' } };

  return { code: 200, response: row.dataValues };
}

async function create(lote) {
  const result = await Lote.create(lote);
  
  return { code: 201, response: result };
}

export default {
  getAll,
  getById,
  create,
};

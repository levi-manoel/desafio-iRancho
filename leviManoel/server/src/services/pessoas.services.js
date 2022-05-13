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

async function create(personOrPeople) {
  let result;
  
  if (Array.isArray(personOrPeople)) {
    result = await Pessoa.bulkCreate(personOrPeople);
  } else {
    result = await Pessoa.create(personOrPeople);
  }

  return { code: 201, response: result };
}

export default {
  getAll,
  getById,
  create,
};

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

async function create(person) {
  const result = await Pessoa.create(person);

  return { code: 201, response: result };
}

async function update(person, id) {
  const toUpdatePerson = await Pessoa.findByPk(id);
  if (toUpdatePerson === null) return { code: 404, response: { error: 'Não foi achada nenhuma pessoa com esse ID' } };

  await toUpdatePerson.update(person);

  return { code: 200, response: toUpdatePerson };
}

async function remove(id) {
  const toRemovePerson = await Pessoa.findByPk(id);
  if (toRemovePerson === null) return { code: 404, response: { error: 'Não foi achada nenhuma pessoa com esse ID' } };

  await toRemovePerson.destroy();

  return { code: 200, response: toRemovePerson };
}

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};

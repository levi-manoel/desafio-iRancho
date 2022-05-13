import { Animal } from '../database/models/Animal.js';

async function getAll() {
  const rows = await Animal.findAll();

  return { code: 200, response: rows };
}

async function getById(id) {
  const row = await Animal.findByPk(id);

  if (row === null) return { code: 404, response: { error: 'Não foi achado um animal com esse ID' } };

  return { code: 200, response: row.dataValues };
}

async function create(animal) {
  const result = await Animal.create(animal);
  
  return { code: 201, response: result };
}

async function update(animal, id) {
  const toUpdateAnimal = await Animal.findByPk(id);
  if (toUpdateAnimal === null) return { code: 404, response: { error: 'Não foi achado um animal com esse ID' } };

  await toUpdateAnimal.update(animal);

  return { code: 200, response: toUpdateAnimal };
}

async function remove(id) {
  const toRemoveAnimal = await Animal.findByPk(id);
  if (toRemoveAnimal === null) return { code: 404, response: { error: 'Não foi achado um animal com esse ID' } };

  await toRemoveAnimal.destroy();

  return { code: 200, response: toRemoveAnimal };
}

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
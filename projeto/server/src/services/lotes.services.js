import { Animal } from '../database/models/Animal.js';
import { Lote } from '../database/models/Lote.js';
import { AnimalLote } from '../database/models/Animal_Lote.js';

async function getAll() {
  const rows = await Lote.findAll({
    include: {
      model: Animal, as: 'animais',
    }
  });

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

async function update(lote, id) {
  const toUpdateLote = await Lote.findByPk(id);
  if (toUpdateLote === null) return { code: 404, response: { error: 'Não foi achado um lote com esse ID' } };

  await toUpdateLote.update(lote);

  return { code: 200, response: toUpdateLote };
}

async function remove(id) {
  const toRemoveLote = await Lote.findByPk(id);
  if (toRemoveLote === null) return { code: 404, response: { error: 'Não foi achado um lote com esse ID' } };

  await toRemoveLote.destroy();

  return { code: 200, response: toRemoveLote };
}

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};

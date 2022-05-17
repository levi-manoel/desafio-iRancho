import { Animal } from '../database/models/Animal.js';
import { AnimalLote } from '../database/models/Animal_Lote.js';

async function getAll() {
  const rows = await AnimalLote.findAll({
    include: {
      model: Animal, as: 'animais',
    }
  });

  return { code: 200, response: { rows }};
}

export default {
  getAll,
};

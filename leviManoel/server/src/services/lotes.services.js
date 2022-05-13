import { Lote } from '../database/models/Lote.js';

async function getAll() {
  const row = await Lote.findAll();

  return { code: 200, response: row };
}

export default {
  getAll,
};

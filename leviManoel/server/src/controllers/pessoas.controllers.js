import pessoasServices from '../services/pessoas.services.js';

async function getAll(_res, res) {
  const pessoas = await pessoasServices.getAll();

  res.status(200).json(pessoas);
}

export default {
  getAll,
};

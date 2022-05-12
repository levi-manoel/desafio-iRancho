import pessoasServices from '../services/pessoas.services.js';

async function getAll(_res, res) {
  const pessoas = await pessoasServices.getAll();

  res.status(200).json(pessoas);
}

async function getById(req, res) {
  const { id } = req.params;
  const pessoa = await pessoasServices.getById(id);

  res.status(200).json(pessoa);
}

export default {
  getAll,
  getById,
};
